import { Layout, TopHeadlinesCard, TopHeadlinesLoading, useFetchTopHeadlines, useParams, useState} from "../export";

const ArticleByCategory = () => {
  const slug = useParams().slug;
  const [query, setQuery] = useState("");
  const { article, loading, next, prev, page} = useFetchTopHeadlines(query !== "" ? query : slug);
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

  console.log(filterSource);

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
            className="outline-none cursor-pointer text-dark font-semibold text-sm focus:ring-2 py-2 px-4 w-full rounded-lg md:w-1/4"
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
        {domain !== '' ?
            <h1 className="font-medium text-center text-gray-400 opacity-70">{filterSource.length} results</h1>
            : ""
         }
        {filterSource.length > 0 ? 
            filterSource.map((e, i) =>
            e.title !== "[Removed]" ? <TopHeadlinesCard e={e} key={i} /> : ""
            ) : 
            <h1 className="error">news is not available yet</h1>
        }
        {loading ? <TopHeadlinesLoading/> : ""}
        <div className="row items-center w-full justify-end">
            <button type="submit" onClick={prev} disabled={page === 1} className="rounded-lg px-4 py-2 text-dark font-semibold disabled:text-gray-300">prev</button>
            <button type="submit" onClick={next} className="rounded-lg px-4 py-2 text-dark font-semibold">next</button>
          </div>
      </div>
    </Layout>
  );
};

export default ArticleByCategory;
