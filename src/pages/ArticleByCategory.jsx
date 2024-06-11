import { Layout, Link, useFetchTopHeadlines, useParams, useState } from '../export'

const ArticleByCategory = () => {
    const slug = useParams().slug
    const [query, setQuery] = useState(slug)
    const {article} = useFetchTopHeadlines(query)
    const [domain, setDomain] = useState('')

    const uniqueNames = new Set();
    const uniqueArticles = article.filter(e => {
        if (uniqueNames.has(e.source.name)) {
        return false;
        } else {
        uniqueNames.add(e.source.name);
        return true;
        }
    });

    const filterSource = article.filter(e => {
        if (domain !== '') {
            return e.source.name === domain;
        }else{
            return article
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.value
        setDomain(value)
    }

  return (
    <Layout setQuery={setQuery}>
            <div className="w-full gap-3 flex flex-col">
            <select name="" id="" onChange={handleSubmit}>
                <option value="">pilih sumber berita</option>
                {uniqueArticles.map((e, i) => (
                    e.source.name !== '[Removed]' ?
                <option value={e.source.name} key={i}>{e.source.name}</option>
                : ""
                ))}
            </select>
           
            <h1 className="text-2xl font-bold text-slate-900">
            {query !== "technology" ? 
            `hasil untuk '${query}'` : 'berita terbaru'}
            </h1>
            {filterSource.map((e, i) => (
            e.title !== "[Removed]" ?
            <Link to={e.url}
                className="flex flex-col gap-8 rounded-xl overflow-hidden bg-white shadow-sm p-5 shadow-light-grey"
                key={i}
            >
                <div className="flex flex-col gap-3 p-3">
                <p className="text-xs bg-red-500/10 text-red-600 w-max rounded-full p-2 font-semibold">
                    {e.source.name}
                </p>
                <p className="text-2xl font-bold text-slate-900">{e.title}</p>
                <p className="text-sm text-slate-500 font-normal">
                    {e.author}, {new Date(e.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-slate-500 font-normal">
                    {e.content
                    ? e.content.split("[+")[0].trim()
                    : "No content available"}
                </p>
                </div>
                {e.urlToImage ? 
                <img src={e.urlToImage} alt={e.title} className="rounded-lg max-h-72 object-cover"/> 
                : ""}
            </Link> : ""
            ))}
        </div>
    </Layout>
  )
}

export default ArticleByCategory
