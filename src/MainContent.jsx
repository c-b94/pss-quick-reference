import { useState } from "react";
import "./MainContent.css";
import { Route, Routes, Navigate, Link, BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import CategoriesPage from "./CategoriesPage";

function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <div className="heading">
        <div className="forms">
          <form action="">
            <select name="Categories" id="">
              <option value="">speakers</option>
            </select>
            <select name="sub-cat" id="">
              <option value="">cabinet</option>
            </select>
            <select name="sub-cat" id="">
              <option value="item-list">List</option>
            </select>
          </form>
          <form action="" id="search-form">
            <input type="text" />
            <button>search</button>
          </form>
        </div>
      </div>
      <div className="navbar">
        <p>navbar</p>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href={<CategoriesPage />}>Categories</a></li>
          <li><a href="">schedule</a></li>
          <li><a href="">contacts</a></li>
        </ul>
      </div>
      <h1>Hello world...everything is burning</h1>
      <div className="navbar">
        {/* <nav>
          <Link to="">Home</Link>
          <Link to="">Categories</Link>
        </nav> */}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainContent;
