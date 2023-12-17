import React from "react";
import MyButton from "./UI/button/MyButton";
import { CSSTransition } from "react-transition-group";
// import "../PostItem.css";

const PostItem = (props) => {
  // console.log(props);

  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

//=============================================================
// вариант с удалением
// import React from "react";
// import { CSSTransition } from "react-transition-group";
// import "./PostItem.css";

// const PostItem = ({ post, remove }) => {
//   const handleRemove = () => {
//     remove(post);
//   };

//   return (
//     <CSSTransition
//       in={true} // Используйте динамическое условие здесь
//       timeout={500}
//       classNames="post"
//       unmountOnExit
//     >
//       <div className="post">
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//         <button onClick={handleRemove}>Удалить</button>
//       </div>
//     </CSSTransition>
//   );
// };

// export default PostItem;

// ============================================Старое
// import React from "react";

// const PostItem = (props) => {
//   return (
//     <div className="post">
//       <div className="post__content">
//         <strong>
//           {props.number}. {props.post.title}
//         </strong>
//         <div>{props.post.body}</div>
//       </div>
//       <div className="post__btns">
//         <button>Удалить </button>
//       </div>
//     </div>
//   );
// };

// export default PostItem;
