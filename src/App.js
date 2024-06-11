import { Router, Routes, Route, lazy, Suspense } from "./export";

const Home = lazy(() => import("./pages/Home"));
const ArticleByCategory = lazy(() => import("./pages/ArticleByCategory"));

function App() {
  return (
    <Router>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/category/:slug" element={<ArticleByCategory />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
