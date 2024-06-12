import { useState, useEffect } from "../export";

export function useFetchTopHeadlines(query, sortBy) {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const next = () => {
    setPage(prevPage => prevPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getArticle = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${debouncedQuery}&language=en&sortBy=${sortBy}&pageSize=50&page=${page}&apiKey=8cdf25763d46423486b050053cea9769`
      );

      if (res.status === 426) {
        throw new Error('Sorry, today has reached the maximum request limit');
      }
      if (res.status === 429) {
        throw new Error('Too many requests!😫');
      }
      if (!res.ok) {
        throw new Error('Sorry, there seems to be a mistake😥');
      }

      const data = await res.json();
      setArticle(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    getArticle();
  }, [debouncedQuery, page]);

  return { article, loading, error, page, next, prev };
}
