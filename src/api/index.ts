import { SEARCH_URL, SUMMARY_URL } from "./constants";

export async function getResults(query: string) {
    try {
        const searchResponse = await fetch(`${SEARCH_URL}?db=pubmed&retmax=20&retmode=json&term=${query}`)
        const data = await searchResponse.json();
        const ids = data.esearchresult.idlist;
        const count = data.esearchresult.count;
        const summaryResponse = await fetch(`${SUMMARY_URL}?db=pubmed&retmode=json&id=${ids.join(',')}`);
        return {
            count,
            response: await summaryResponse.json()
        };
    } catch (error) {
        // TODO: handle properly
        console.error(error)
    }
}