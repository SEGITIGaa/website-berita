import { useState, useEffect } from "../export";

export function useFetchTopHeadlines(query, sortBy) {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getArticle = async () => {
    try {
        setLoading(true)
        setError(null)

        const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=${sortBy}&pageSize=23&page=1&apiKey=${API_KEY}`
        );

        if (!res.ok) {
            throw new Error('maaf, terjadi kesalahan saat memuat berita')
        }

        const data = await res.json();
        setArticle(data.articles);

    } catch (error) {
        setError(error.message)
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getArticle()
  }, [query]);

  return { article, loading, error };
}
