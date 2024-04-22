import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <br />
      <ul>
        <li>
          <Link to="/about">소개 페이지</Link>
        </li>
        <li>
          <Link to="/profiles/ironman">ironman의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/thor">Thor의 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>

      {/* <Link to="/profiles/void">존재하지 않는 프로필</Link> */}
    </div>
  );
};

export default Home;
