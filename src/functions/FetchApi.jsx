import { useState, useEffect } from "../export";

export function useFetchTopHeadlines(query, sortBy) {
//   const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
//   const [article, setArticle] = useState([]);

//   const getArticle = async () => {
//     // try {
//     const res = await fetch(
//       `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=${sortBy}&pageSize=23&page=1&apiKey=${API_KEY}`
//     );

//     // if (!res.ok) {
//     //     throw new Error('maaf, terjadi kesalahan saat memuat berita')
//     // }

//     const data = await res.json();
//     setArticle(data.articles);

//     // } catch (error) {

//     // }
//   };
//   useEffect(() => {
//     getArticle()
//   }, [query]);
//   return { article };

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const [article, setArticle] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

const getArticle = async () => {
  try {
    setLoading(true);
    setError(null);
    
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=${sortBy}&pageSize=23&page=1&apiKey=${API_KEY}`
    );

    if (res.status === 426) {
      const upgradeHeader = res.headers.get('Upgrade');
      throw new Error(`Upgrade required: ${upgradeHeader}`);
    }

    if (!res.ok) {
      throw new Error('Sorry, there was an error loading the news');
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
  getArticle();
}, [query, sortBy]);

return { article, loading, error };
}
