import React, { Component } from "react";
import axios from "./Postorder";
import styles from "./styles.modules.css"
import Form from "./Form";


class Mural extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts.json")
      .then(res => {
        const fetchedOrder = [];
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({
          posts: fetchedOrder
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <Form />
        <div>
          {this.state.posts.map(post => {
            return (
              <div className={styles.card_mural}>
                <div className={styles.titulo_mural}>{post.title}</div>
                <div className={styles.corpo_mural}>{post.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mural;


 