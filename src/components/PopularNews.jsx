import { Link, useFetchTopHeadlines, PopularNewsCard, PopularNewsLoading } from '../export';

const PopularNews = () => {
  const {article, loading} = useFetchTopHeadlines('politic','popularity,publishedAt' )

  return (
    <div className='w-full md:w-1/4 col gap-8 order-first md:order-last'>
    <div className="flex items-center justify-between w-full">
      <h1 className='header'>Berita populer 🔥</h1>
        <Link className='text-xs text-sky-500'>see more</Link>
    </div>
    <div className="row md:col w-full overflow-x-scroll gap-3">
    {!loading ? 
      article.slice(0,5).map((e, i) => (
        <PopularNewsCard e={e} key={i}/>
      ))
    : 
    <PopularNewsLoading/>
    }
    </div>
    </div>
  )
}

export default PopularNews
