import { useState, useEffect } from "../export";


export function useFetchTopHeadlines(query = 'technology', sortBy = 'relevancy,publishedAt'){
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY
    const [article, setArticle] = useState([]);
    console.log("query", query);

    useEffect(() => {
  
    const getArticle = async () => {
        // try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=${sortBy}&pageSize=23&page=1&apiKey=${API_KEY}`)
            // if (!res.ok) {
            //     throw new Error('maaf, terjadi kesalahan saat memuat berita')
            // }

            const data = await res.json()
            setArticle(data.articles)

        // } catch (error) {
            
        // }
    }

      getArticle();
    }, [query]);
    return {article}
}