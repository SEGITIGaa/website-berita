import { Layout, Link, TopHeadlinesCard, useFetchTopHeadlines, useParams, useState } from '../export'

const ArticleByCategory = () => {
    const slug = useParams().slug
    const [query, setQuery] = useState('')
    const {article} = useFetchTopHeadlines(query !== "" ? query : slug)
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

            <h1 className="text-2xl font-bold text-slate-900">
                {query === "" ? `berita seputar ${slug}` : 'berita terbaru'}
            </h1>

            <select name="" id="" onChange={handleSubmit}>
                <option value="">pilih sumber berita</option>
                {uniqueArticles.map((e, i) => (
                    e.source.name !== '[Removed]' ?
                     <option value={e.source.name} key={i}>{e.source.name}</option>
                : ""
                ))}
            </select>
           
            {filterSource.map((e, i) => (
            e.title !== "[Removed]" ?
            <TopHeadlinesCard e={e} key={i}/> : ""
            ))}
        </div>
    </Layout>
  )
}

export default ArticleByCategory
