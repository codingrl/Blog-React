import React, { useState } from 'react';
import styles from './post.module.css';

const Post = (props) => {

  return (
    <div className={styles.post}>
        <p className={styles.title}>{props.post.title}</p>
      <p className={styles.published}>
        {props.post.published ? 'Опубликовано' : 'Не опубликовано'}
      </p>
      <button className={styles.btn}
        onClick={() =>
          props.togglePublished(props.post.id, props.post.published)
        }>
        {props.post.published ? 'В ожидании' : 'Опубликовать'}
      </button>
      <button className={styles.btn} onClick={() => props.deletePost(props.post.id)}>Удалить</button>
    </div>
  );
};

export default Post;
