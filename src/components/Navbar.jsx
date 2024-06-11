import { Link, Category, useLocation } from "../export";


const Navbar = ({setQuery}) => {
  
  const topic = ["business","entertainment","general", "health", "science", "sports", "technology"]
  const location = useLocation().pathname
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const val = e.target.querySelector('input').value
    setQuery(val)
  }

  return (
    <div className="navbar">
      <form onSubmit={handleSubmit} className="form-navbar">
        <img src="/img/NEWS.svg" alt="logo" className="w-1/5 md:w-28" />
        <input type="search" name="search" id="search" className="search" placeholder="find the topic here..." />
      </form>
      <div className="category-container">
          <Link to={"/"} className={`category ${location === '/' ? 'true' : 'false'}`}>
            <p className={`category-name ${location === '/' ? 'text-white' : 'text-dark'}`}>Home</p>
          </Link>
        {topic.map((e, i) => (
          <Category e={e} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
