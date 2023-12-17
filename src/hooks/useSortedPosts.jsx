import { useState, useEffect } from "react";

const useSortedPosts = (posts, sort, query) => {
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    if (!posts) {
      // Обработка случая, когда posts равен undefined или null
      setSortedPosts([]);
      return;
    }

    // Пример фильтрации и сортировки
    const sortedAndFilteredPosts = posts
      .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => {
        if (sort === "asc") {
          return a.title.localeCompare(b.title);
        } else if (sort === "desc") {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });

    setSortedPosts(sortedAndFilteredPosts);
  }, [posts, sort, query]);

  return sortedPosts;
};

export default useSortedPosts;
