import { mount } from '@vue/test-utils'
import SearchResults from './SearchResults.vue'
import PubMedArticle from './PubMedArticle.vue'

test('mount component', async () => {
  expect(SearchResults).toBeTruthy()

  const wrapper = mount(SearchResults, {
    propsData: {
      count: '1337',
      results: [],
      isPristine: true
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
});

test('renders an article for every result item', async () => {
  expect(SearchResults).toBeTruthy()

  const wrapper = mount(SearchResults, {
    propsData: {
      count: '3',
      results: [
        { uid: 0, authors: [] },
        { uid: 1, authors: [] },
        { uid: 2, authors: [] },
      ],
      isPristine: false
    },
  })

  const articles = wrapper.findAllComponents(PubMedArticle);

  expect(articles.length).toBe(3)
});
