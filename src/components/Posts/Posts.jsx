import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import postService from '../../services/posts';
import styles from './posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [wrapper, setWrapper] = useState("wrapper-grid")

  useEffect(() => {
    postService.get().then((res) => {
      setPosts(res.data);
    });
  }, []);

  const addPost = (event) => {
    event.preventDefault();
    const postObject = {
      title: newPost,
      published: Math.random() > 0.5,
    };
    postService
      .create(postObject)
      .then((res) => setPosts(posts.concat(res.data)));
    setNewPost('');
  };

  const togglePublished = (id, published) => {
    const editedInfo = {
      published: !published,
    };
    postService
      .edit(id, editedInfo)
      .then((res) => {
        setPosts(posts.map((post) => (post.id === id ? res.data : post)));
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id) => {
    postService
      .delete(id)
      .then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  const postsToShow = showAll ? posts : posts.filter((post) => post.published);

  return (
    <div>
      <div>
        <button onClick={() => setWrapper("wrapper-list")}>
          Список
        </button>
        <button onClick={() => setWrapper("wrapper-grid")}>
          Сетка
        </button>
        <button onClick={() => setShowAll(!showAll)}>
          Показать {showAll ? 'опубликованные' : 'все'}
        </button>
      </div>
      <div className={styles[wrapper]}>
        {postsToShow.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              togglePublished={togglePublished}
              deletePost={deletePost}
            />
          );
        })}
      </div>
      
      <form onSubmit={addPost}>
        <input
          className={styles.textInput}
          type='text'
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        />
        <input className={styles.submit} type='submit' value='Создать пост' />
      </form>
    </div>
  );
};


export default Posts;
