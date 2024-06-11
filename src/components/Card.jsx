import { Link } from "../export";

const TopHeadlinesCard = ({ e, i }) => {
  return (
    <Link to={e.url} className="top-headline-card" key={i}>
      <div className="col gap-3 p-3">
        <p className="source-name bg-sky-500/10 text-sky-600">{e.source.name}</p>
        <h1 className="title">{e.title}</h1>
        <i className="date">
          {e.author}, {new Date(e.publishedAt).toLocaleDateString()}
        </i>
        <p className="desc">
          {e.content ? e.content.split("[+")[0].trim() : "No content available"}
        </p>
      </div>

      {e.urlToImage ? (
        <img src={e.urlToImage} alt={e.title} className="news-img" />
      ) : (
        ""
      )}
    </Link>
  );
};

const PopularNewsCard = ({ e, i }) => {
  return e.title !== "[Removed]" ? (
    <Link to={e.url} className="popular-news-card" key={i}>
      <p className="source-name">{e.source.name}</p>
      {e.urlToImage ? (
        <img src={e.urlToImage} alt={e.title} className="popular-news-img" />
      ) : (
        ""
      )}
      <i className="date">
          {e.author}, {new Date(e.publishedAt).toLocaleDateString()}
        </i>
      <h1 className="popular-news-title">{e.title}</h1>
    </Link>
  ) : (
    ""
  );
};

export { TopHeadlinesCard, PopularNewsCard };
