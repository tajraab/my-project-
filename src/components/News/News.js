import { React } from "react";
import "../News/News";
import PostCards from "./PostCards/PostCards";

const News = () => {
  return (
    <div className="container">
      <div className="news">
        <PostCards />
      </div>
    </div>
  );
};

export default News;
