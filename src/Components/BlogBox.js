import React, { Component, useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import PostList from "../Components/PostList";
import MyInput from "../Components/UI/input/MyInput";

export default class BlogBox extends Component {
  state = {
    posts: [
      { id: 1, title: "Javascript", body: "description" },
      { id: 2, title: "Javascript 2", body: "description" },
      { id: 3, title: "Javascript 3", body: "description" },
      { id: 4, title: "Javascript 4", body: "description" },
    ],
    title: "",
    body: "",
  };

  addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: this.state.title,
      body: this.state.body,
    };
    this.setState({
      posts: [...this.state.posts, newPost],
      title: "",
      body: "",
    });
  };

  render() {
    const { title, body, posts } = this.state;

    return (
      <div className="App">
        <Form>
          <Row>
            <Col md={12}>
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
            </Col>
            <Col md={6}></Col>
          </Row>

          <Row>
            <Col md={12}>
              <Button onClick={this.addNewPost}>Создать пост</Button>
            </Col>
          </Row>
        </Form>

        <Row>
          <Col md={12}>
            <PostList posts={posts} title="Список постов" />
          </Col>
        </Row>
      </div>
    );
  }
}
