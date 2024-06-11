import { Layout, TopHeadlinesCard, useFetchTopHeadlines, useParams, useState} from "../export";

const ArticleByCategory = () => {
  const slug = useParams().slug;
  const [query, setQuery] = useState("");
  const { article } = useFetchTopHeadlines(query !== "" ? query : slug);
  const [domain, setDomain] = useState("");

  const uniqueNames = new Set();
  const uniqueArticles = article.filter((e) => {
    if (uniqueNames.has(e.source.name)) {
      return false;
    } else {
      uniqueNames.add(e.source.name);
      return true;
    }
  });

  const filterSource = article.filter((e) => {
    if (domain !== "") {
      return e.source.name === domain;
    } else {
      return article;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setDomain(value);
  };

  return (
    <Layout setQuery={setQuery}>
      <div className="w-full gap-3 flex flex-col">
        <div className="col md:row md:items-center w-full justify-between gap-3">
          <h1 className="header text-3xl">
            {query === "" ? `${slug} news` : "Latest news"}
          </h1>

          <select
            name="source"
            id="source"
            onChange={handleSubmit}
            className="outline-none bg-light-grey text-dark font-semibold text-lg focus:ring-2 py-2 px-4 w-full rounded-lg md:w-1/4"
          >
            <option value="">choose news source</option>
            {uniqueArticles.map((e, i) =>
              e.source.name !== "[Removed]" ? (
                <option value={e.source.name} key={i}>
                  {e.source.name}
                </option>
              ) : (
                ""
              )
            )}
          </select>
        </div>

        {filterSource.map((e, i) =>
          e.title !== "[Removed]" ? <TopHeadlinesCard e={e} key={i} /> : ""
        )}
      </div>
    </Layout>
  );
};

export default ArticleByCategory;
