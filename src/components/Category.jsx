import { useLocation } from "react-router-dom";
import { Link } from "../export";

const Category = ({ e, i }) => {
    const path = '/article/category/'
    const location = useLocation().pathname
  return (
    <Link
      to={`${path}${e}`}
      className={`category ${location === `${path}${e}` ? "true" : "false"}`}
      key={i}
    >
      <p
        className={`category-name ${
          location === `${path}${e}` ? "text-white" : "text-dark"
        }`}
      >
        {e}
      </p>
    </Link>
  );
};

export default Category;
