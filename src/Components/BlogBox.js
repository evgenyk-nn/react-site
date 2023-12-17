//Работало норм (Добавлена сортировка)
import React, { Component } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import PostList from "../Components/PostList";
import MyInput from "../Components/UI/input/MyInput";
import PostFilter from "../Components/PostFilter";
// import MyModal from "../Components/UI/MyModal/MyModal";
// import { useSortedPosts } from "../hooks/usePosts";
// import Loader from "../Components/UI/Loader/Loader";

export default class BlogBox extends Component {
  state = {
    posts: [
      { id: 1, title: "Javascript", body: "description" },
      { id: 2, title: "Javascript 2", body: "a-description" },
      { id: 3, title: "Javascript 3", body: "b-description" },
      { id: 4, title: "Javascript 4", body: "z-description" },
    ],
    title: "",
    body: "",
    filter: "", // состояние для фильтрации
  };

  addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: this.state.title,
      body: this.state.body,
    };
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
      title: "",
      body: "",
    }));
  };

  render() {
    const { title, body, posts, filter } = this.state;
    const filteredPosts = posts.filter((post) => {
      const query = filter && filter.query ? filter.query.toLowerCase() : "";
      return (
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
      );
    });

    return (
      <div className="App">
        <Form>
          <Row>
            <Col md={12}>
              <div style={{ marginTop: "10px" }}></div>
              <MyInput
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
                type="text"
                placeholder="Название поста"
              />

              <MyInput
                value={body}
                onChange={(e) => this.setState({ body: e.target.value })}
                type="text"
                placeholder="Описание поста"
              />

              <hr style={{ margin: "15px 0" }} />
              <PostFilter
                filter={filter}
                setFilter={(value) => this.setState({ filter: value })}
              />
              <hr style={{ margin: "15px 0" }} />

              {/* <Loader /> */}
              <PostList posts={filteredPosts} title="Список постов" />

              <hr style={{ margin: "10px 0" }} />
            </Col>

            <Col md={6}></Col>
          </Row>

          <Row>
            <Col md={12}>
              <Button onClick={this.addNewPost}>Создать пост</Button>
            </Col>
          </Row>
        </Form>

        {/* <Row>
          <Col md={12}>
            <PostList posts={posts} title="Список постов" />
          </Col>
        </Row> */}
      </div>
    );
  }
}

//======================================================================
// Вариант с удалением постов

// import React, { Component } from "react";
// import { Button, Form, Col, Row } from "react-bootstrap";
// import PostList from "../Components/PostList";
// import MyInput from "../Components/UI/input/MyInput";
// import PostFilter from "../Components/PostFilter";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import PostItem from "../Components/PostItem";

// import "../BlogBox.css";
// import "../Components/PostItem.css";

// export default class BlogBox extends Component {
//   state = {
//     posts: [
//       { id: 1, title: "Javascript", body: "description" },
//       { id: 2, title: "Javascript 2", body: "a-description" },
//       { id: 3, title: "Javascript 3", body: "b-description" },
//       { id: 4, title: "Javascript 4", body: "z-description" },
//     ],
//     title: "",
//     body: "",
//     filter: "", // состояние для фильтрации
//   };

//   addNewPost = (e) => {
//     e.preventDefault();
//     const newPost = {
//       id: Date.now(),
//       title: this.state.title,
//       body: this.state.body,
//     };
//     this.setState((prevState) => ({
//       posts: [...prevState.posts, newPost],
//       title: "",
//       body: "",
//     }));
//   };

//   render() {
//     const { title, body, posts, filter } = this.state;
//     const filteredPosts = posts.filter((post) => {
//       const query = filter && filter.query ? filter.query.toLowerCase() : "";
//       return (
//         post.title.toLowerCase().includes(query) ||
//         post.body.toLowerCase().includes(query)
//       );
//     });

//     return (
//       <div className="App">
//         <Form>
//           <Row>
//             <Col md={12}>
//               <MyInput
//                 value={title}
//                 onChange={(e) => this.setState({ title: e.target.value })}
//                 type="text"
//                 placeholder="Название поста"
//               />

//               <MyInput
//                 value={body}
//                 onChange={(e) => this.setState({ body: e.target.value })}
//                 type="text"
//                 placeholder="Описание поста"
//               />

//               <hr style={{ margin: "15px 0" }} />
//               <PostFilter
//                 filter={filter}
//                 setFilter={(value) => this.setState({ filter: value })}
//               />
//               <hr style={{ margin: "15px 0" }} />

//               <TransitionGroup>
//                 {filteredPosts.map((post) => (
//                   <CSSTransition key={post.id} timeout={500} classNames="post">
//                     <PostItem post={post} remove={this.removePost} />
//                   </CSSTransition>
//                 ))}
//               </TransitionGroup>

//               <hr style={{ margin: "10px 0" }} />
//             </Col>

//             <Col md={6}></Col>
//           </Row>

//           <Row>
//             <Col md={12}>
//               <Button onClick={this.addNewPost}>Создать пост</Button>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//     );
//   }
// }

// =======================================================

// import React, { Component, useState, useEffect, useMemo, useRef } from "react";
// import { Button, Form, Col, Row } from "react-bootstrap";
// import PostList from "../Components/PostList";
// import MyInput from "../Components/UI/input/MyInput";

// import PostFilter from "../Components/PostFilter";
// import "./styles/App.css";

// import PostItem from "../Components/PostItem";
// import MyButton from "../Components/UI/button/MyButton";

// import PostForm from "../Components/PostForm";
// // import MySelect from "../Components/UI/select/MySelect";
// import MyModal from "../Components/UI/MyModal/MyModal";
// import { useSortedPosts } from "../hooks/usePosts";
// import axios from "axios";
// import PostService from "../API/PosrService";
// import Loader from "../Components/UI/Loader/Loader";

// export default class BlogBox extends Component {
//   state = {
//     posts: [
//       { id: 1, title: "Javascript", body: "description" },
//       { id: 2, title: "Javascript 2", body: "a-description" },
//       { id: 3, title: "Javascript 3", body: "b-description" },
//       { id: 4, title: "Javascript 4", body: "z-description" },
//     ],
//     title: "",
//     body: "",
//     filter: "", // состояние для фильтрации
//   };

//   function () {
//     const [posts, setPosts] = useState([]);
//     const [filter, setfilter] = useState({ sort: "", query: "" });
//     const [modal, setModal] = useState(false);
//     const sortedAndSearchedPosts = useSortedPosts(
//       posts,
//       filter.sort,
//       filter.query
//     );
//     const [isPostLoading, setIsPostLoading] = useState(false);

//   addNewPost = (e) => {
//     e.preventDefault();
//     const newPost = {
//       id: Date.now(),
//       title: this.state.title,
//       body: this.state.body,
//     };
//     this.setState((prevState) => ({
//       posts: [...prevState.posts, newPost],
//       title: "",
//       body: "",
//     }));
//   };

//   render() {
//     const { title, body, posts, filter } = this.state;
//     const filteredPosts = posts.filter(
//       (post) =>
//         post.title.toLowerCase().includes(filter.toLowerCase()) ||
//         post.body.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div className="App">
//         <Form>
//           <Row>
//             <Col md={12}>
//               <MyInput
//                 value={title}
//                 onChange={(e) => this.setState({ title: e.target.value })}
//                 type="text"
//                 placeholder="Название поста"
//               />

//               <MyInput
//                 value={body}
//                 onChange={(e) => this.setState({ body: e.target.value })}
//                 type="text"
//                 placeholder="Описание поста"
//               />

//               <hr style={{ margin: "10px 0" }} />

//               {/* <MyInput
//                 value={filter}
//                 onChange={(e) => this.setState({ filter: e.target.value })}
//                 type="text"
//                 placeholder="Фильтр постов"
//               /> */}

//               <hr style={{ margin: "15px 0" }} />
//               <PostFilter filter={filter} setFilter={setfilter} />
//               {isPostLoading ? (
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginTop: 50,
//                   }}
//                 >
//                   <Loader />
//                 </div>
//               ) : (
//                 <PostList
//                   remove={removePost}
//                   posts={sortedAndSearchedPosts}
//                   title="Список постов про JS"
//                 />
//               )}

//               <hr style={{ margin: "10px 0" }} />
//             </Col>

//             <Col md={6}></Col>
//           </Row>

//           <Row>
//             <Col md={12}>
//               <Button onClick={this.addNewPost}>Создать пост</Button>
//             </Col>
//           </Row>
//         </Form>

//         <Row>
//           <Col md={12}>
//             <PostList posts={posts} title="Список постов" />
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// Вариант - 0
// import React, { useState, useEffect } from "react";
// import { Button, Col, Row, Form } from "react-bootstrap";
// import MyInput from "../Components/UI/input/MyInput";
// import PostList from "../Components/PostList";
// import PostForm from "../Components/PostForm";
// import MyButton from "../Components/UI/button/MyButton";
// import MyModal from "../Components/UI/MyModal/MyModal";
// import PostFilter from "../Components/PostFilter";
// import { useSortedPosts } from "../hooks/usePosts";
// import PostService from "../API/PosrService";
// import Loader from "../Components/UI/Loader/Loader";

// const BlogBox = () => {
//   const [posts, setPosts] = useState([]);
//   const [filter, setFilter] = useState({ sort: "", query: "" });
//   const [modal, setModal] = useState(false);
//   const [isPostLoading, setIsPostLoading] = useState(false);

//   useEffect(() => {
//     fetchPosts();
//   }, []); // Пустой массив зависимостей означает, что useEffect будет вызван только при монтировании

//   const fetchPosts = async () => {
//     setIsPostLoading(true);
//     try {
//       const response = await PostService.getAll();
//       setPosts(response.data);
//     } catch (error) {
//       console.error("Ошибка при получении постов:", error);
//     } finally {
//       setIsPostLoading(false);
//     }
//   };

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost]);
//     setModal(false);
//   };

//   const removePost = (post) => {
//     setPosts(posts.filter((p) => p.id !== post.id));
//   };

//   const sortedAndSearchedPosts = useSortedPosts(
//     posts,
//     filter.sort,
//     filter.query
//   );

//   return (
//     <div className="App">
//       <button onClick={fetchPosts}>ПОЛУЧИТЬ ПОСТЫ</button>
//       <MyButton style={{ marginTop: 25 }} onClick={() => setModal(true)}>
//         Создать пост
//       </MyButton>
//       <MyModal visible={modal} setVisible={(value) => setModal(value)}>
//         <PostForm create={createPost} />
//       </MyModal>

//       <hr style={{ margin: "15px 0" }} />
//       <PostFilter filter={filter} setFilter={setFilter} />
//       {isPostLoading ? (
//         <div
//           style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
//         >
//           <Loader />
//         </div>
//       ) : (
//         <PostList
//           remove={removePost}
//           posts={sortedAndSearchedPosts}
//           title="Список постов про JS"
//         />
//       )}
//     </div>
//   );
// };

// export default BlogBox;

// Рабочий вариант - 17.12.2023
// import React, { Component, useState } from "react";
// import { Button, Form, Col, Row } from "react-bootstrap";
// import PostList from "../Components/PostList";
// import MyInput from "../Components/UI/input/MyInput";

// export default class BlogBox extends Component {
//   state = {
//     posts: [
//       { id: 1, title: "Javascript", body: "description" },
//       { id: 2, title: "Javascript 2", body: "description" },
//       { id: 3, title: "Javascript 3", body: "description" },
//       { id: 4, title: "Javascript 4", body: "description" },
//     ],
//     title: "",
//     body: "",
//   };

//   addNewPost = (e) => {
//     e.preventDefault();
//     const newPost = {
//       id: Date.now(),
//       title: this.state.title,
//       body: this.state.body,
//     };
//     this.setState({
//       posts: [...this.state.posts, newPost],
//       title: "",
//       body: "",
//     });
//   };

//   render() {
//     const { title, body, posts } = this.state;

//     return (
//       <div className="App">
//         <Form>
//           <Row>
//             <Col md={12}>
//               <MyInput
//                 value={title}
//                 onChange={(e) => this.setState({ title: e.target.value })}
//                 type="text"
//                 placeholder="Название поста"
//               />

//               <MyInput
//                 value={body}
//                 onChange={(e) => this.setState({ body: e.target.value })}
//                 type="text"
//                 placeholder="Описание поста"
//               />
//             </Col>
//             <Col md={6}></Col>
//           </Row>

//           <Row>
//             <Col md={12}>
//               <Button onClick={this.addNewPost}>Создать пост</Button>
//             </Col>
//           </Row>
//         </Form>

//         <Row>
//           <Col md={12}>
//             <PostList posts={posts} title="Список постов" />
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }
