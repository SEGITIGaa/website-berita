import { useFetchTopHeadlines, PopularNewsCard, PopularNewsLoading,} from "../export";

const PopularNews = () => {
  const { article, loading, error } = useFetchTopHeadlines(
    "politic",
    "popularity,publishedAt"
  );

  return (
    <div className="w-full md:w-1/4 col gap-8 order-first md:order-last">
      <h1 className="header">most popular news 🔥</h1>

      <div className="row md:col w-full overflow-x-scroll gap-3 ">
        {!loading ? (
          article.slice(0, 5).map((e, i) => <PopularNewsCard e={e} key={i} />)
        ) : (
          <PopularNewsLoading />
        )}
        <h1 className="error">{error}</h1>
      </div>
    </div>
  );
};

export default PopularNews;
