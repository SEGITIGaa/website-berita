import {TopHeadlinesCard} from "../components/Card";
import { Layout, Link, PopularNews, useFetchTopHeadlines, useState } from "../export";

const Home = () => {
  const [query, setQuery] = useState('technology')
  const {article} = useFetchTopHeadlines(query)

  return (
    <Layout setQuery={setQuery}>
      <div className="col md:row gap-20">
     <PopularNews/>
        <div className="w-full md:w-3/4 gap-8 col order-last md:order-first">
          <h1 className="header">
            {query !== "technology" ? 
            `hasil untuk '${query}'` : 'berita terbaru'}
          </h1>

          {article.map((e, i) => (
            e.title !== "[Removed]" ?
            <TopHeadlinesCard e={e} key={i}/>
             : ""
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
