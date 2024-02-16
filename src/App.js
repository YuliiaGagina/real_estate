import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";

import Contacts from "./pages/Contacts";
import Faq from "./pages/Faq";

import Search from "./pages/Search";
import Blog from "./pages/Blog";

import Error from "./components/Error";

import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="aboutus" element={<AboutUs />} />
            <Route path="blog" element={<Blog />} />

            <Route path="contacts" element={<Contacts />} />

            <Route path="faq" element={<Faq />} />

            <Route path="search" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
