import { Layout, PopularNews, useFetchTopHeadlines, useState, TopHeadlinesCard, TopHeadlinesLoading, useEffect} from "../export";
import { useFetchLatestNews } from "../functions/FetchApi";

const Home = () => {
  const [query, setQuery] = useState("");
  const { article, next, prev, } = useFetchTopHeadlines(query);
  const { latestNews, loading, error, page } = useFetchLatestNews('popularity');
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (query !== '') {
      setContent(article);
    } else {
      setContent(latestNews);
    }
  }, [query, article, latestNews]);
  
  return (
    <Layout setQuery={setQuery}>
      <div className="col md:row gap-20">
        <PopularNews />
        <div className="w-full md:w-3/4 pb-10 gap-8 col order-last md:order-first">
          <h1 className="header">
            {query !== "" ? `Results for '${query}'` : "Latest news"}
          </h1>
          {!loading ? (
            content.map((e, i) =>
              e.title !== "[Removed]" ? <TopHeadlinesCard e={e} key={i} /> : ""
            )
          ) : (
            <TopHeadlinesLoading />
          )}
          <h1 className="error">{error}</h1>
          {query !== "" ? 
          <div className="row items-center w-full justify-end">
            <button type="submit" onClick={prev} disabled={page === 1} className="rounded-lg px-4 py-2 text-dark font-semibold disabled:text-gray-300">prev</button>
            <button type="submit" onClick={next} className="rounded-lg px-4 py-2 text-dark font-semibold">next</button>
          </div>
          : ''}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
