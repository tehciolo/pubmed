import { SEARCH_URL, SUMMARY_URL } from "./constants";

export function getResults(query: string) {
    return getSearchResults(query)
        .then(({ count, ids }) => {
            return Promise.all([count, getSummaryResults(ids)])
        })
        .then(([count, response]) => ({ count, response }))
        // TODO: handle properly
        .catch(console.error)
}

function getSearchResults(query: string) {
    return fetch(`${SEARCH_URL}?db=pubmed&retmax=20&retmode=json&term=${query}`)
        .then(response => response.json())
        .then(data => {
            const ids = data.esearchresult.idlist;
            const count = data.esearchresult.count;

            return { count, ids }
        })
}

function getSummaryResults(ids: number[]) {
    return fetch(`${SUMMARY_URL}?db=pubmed&retmode=json&id=${ids.join(',')}`)
        .then(response => response.json())
}