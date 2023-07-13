"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardHandler = ({ data, hanldePromptClick }) => (
  <div className="mt-5 max-sm:mt-0 prompt_layout">
    {data.map((post) => (
      <PromptCard
        key={post._id}
        post={post}
        hanldePromptClick={hanldePromptClick}
      />
    ))}
  </div>
);

const Feed = () => {
  const [PostPrompt, setPostPrompt] = useState([]);

  // Search State
  const [searchText, setSearchText] = useState("");
  const [searchTimeOut, setSearchTimeOut] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      // check if data is an array
      if (Array.isArray(data)) {
        setPostPrompt(data);
      }
    };
    fetchPost();
  }, []);

  const handleSearchFilter = (search) => {
    const RegEx = new RegExp(search, "i"); // 'i' flag for case-insensitive search

    return PostPrompt.filter(
      (items) =>
        RegEx.test(items.creator.username) ||
        RegEx.test(items.prompt) ||
        RegEx.test(items.tag)
    );
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    clearTimeout(searchTimeOut);

    // Debounce function
    setSearchTimeOut(
      setTimeout(() => {
        const filterPrompt = handleSearchFilter(e.target.value);
        setSearchResult(filterPrompt);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = handleSearchFilter(tagName);
    setSearchResult(searchResult);
  };

  return (
    <div className="mt-[30px] text-center">
      <form>
        <input
          value={searchText}
          name={searchText}
          type="text"
          placeholder="Search for surname or prompt..."
          required
          onChange={handleSearchChange}
          className="w-[60%] p-7 shadow-lg glassmorphism max-sm:bg-white max-sm:w-[90%] focus:border-blue-500"
        />
      </form>
      <section>
        {searchText ? (
          <PromptCardHandler
            data={searchResult}
            hanldePromptClick={() => {
              handleTagClick;
            }}
          />
        ) : (
          <PromptCardHandler
            data={PostPrompt}
            hanldePromptClick={handleTagClick}
          />
        )}
      </section>
    </div>
  );
};

export default Feed;
