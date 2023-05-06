import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./home.scss";

const Home = () => {
  const [list, setList] = useState([]);
  const [tags, setTags] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const getList = () => {
    let getList = window.localStorage.getItem("myblog");
    if (getList !== "undefined") {
      getList = JSON.parse(getList);
      setList(getList);
    }
  };
  const getTags = () => {
   
    let getList = window.localStorage.getItem("myblog");
    let tags = {};
    if (getList !== "undefined") {
      getList = JSON.parse(getList);
      getList.forEach((item) => {
        item.tags.forEach((tag) => {
          tags[tag] = 1;
        });
      });
      setTags(Object.keys(tags));
    }
  };

  const getRecentPosts = () => {
    let getList = window.localStorage.getItem("myblog");
    let title = [];
    if (getList !== "undefined") {
      getList = JSON.parse(getList);
      getList.forEach((post) => {
        title.push(post.title);
      });
    }
    setRecentPosts(title);
  };

  useEffect(() => {
    let list = window.localStorage.getItem("myblog");
    if (list !== null) {
      getList();
      getTags();
      getRecentPosts();
    }
  }, []);

  const handleFilter = (selectedValue) => {
  
    let getList = window.localStorage.getItem("myblog");
    if (getList !== "undefined") {
      getList = JSON.parse(getList);
      let filteredArray = [];
      getList.forEach((item) => {
        if (item.tags.includes(selectedValue)) filteredArray.push(item);
      });
      setList(filteredArray);
      setShowFilter(true);
    }
  };

  const handleResetFilter = () => {
    setShowFilter(!showFilter);
    getList();
  };

  return (
    <section>
      {showFilter && (
        <div className="filter-alert" onClick={handleResetFilter}>
          {" "}
          Filter has been applied, click to reset{" "}
        </div>
      )}
      <div className="tags-box">
        <h2>Tags related to post</h2>
        <div className="tag-container">
          {tags?.map((item) => {
            return (
              <p className="post-tag" onClick={() => handleFilter(item)}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="posts">
        {list?.map((item) => {
          return <Card item={item} />;
        })}
      </div>
      <div className="recent-posts">
        <h2>Recent Posts</h2>
        {recentPosts?.map((item) => {
          return <p className="post-title">{item}</p>;
        })}
      </div>
    </section>
  );
};

export default Home;
