import { useState, useEffect } from "../export";

export function useFetchTopHeadlines(query, sortBy) {
  // const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const next = () => {
    setPage(page + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 

  const prev = () => {
    if (page > 1) {
      setPage(page + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } 

  const getArticle = async () => {
    try {
        setLoading(true)
        setError(null)

        const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=${sortBy}&pageSize=10&page=${page}&apiKey=3d2e881028d546c1a0995a58a263d0b9`
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
  }, [query, page]);

  return { article, loading, error, page, next, prev };
}
