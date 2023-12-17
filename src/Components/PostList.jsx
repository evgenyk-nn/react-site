import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  // Добавим проверку на наличие постов
  if (!posts || !posts.length) {
    return (
      <h1 style={{ textAlign: "center", color: "teal" }}>Посты не найдены!</h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;

// import React from "react";
// import PostItem from "./PostItem";

// const PostList = ({ posts, title }) => {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>{title}</h1>
//       {posts.map((post, index) => (
//         <PostItem number={index + 1} post={post} key={post.id} />
//       ))}
//     </div>
//   );
// };

// export default PostList;
