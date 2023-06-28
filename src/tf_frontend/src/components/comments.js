import React from "react";
import styles from "./Comments.module.css";

const Comments = ({ content, author, handleIconClick, imgSrc }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.textPlaceholderWrapper}>
        <div className={styles.textPlaceholder1}>
          {content}
        </div>
      </div>
      <div className={styles.image41Parent}>
        <img
          className={styles.image29Icon11}
          alt=""
          src={imgSrc}
        />
        <div className={styles.inputleftaddon1}>
          <p className={styles.iFeelLike}>{author.name}</p>
          <p className={styles.iFeelLike}>{author.username}</p>
        </div>
      </div>
      <div className={styles.property1defaultInner}>
        <button className={styles.vectorParent} onClick={handleIconClick}>
          <img
            className={styles.vectorIcon5}
            alt=""
            src="/vector3.svg"
          />
          <button className={styles.vuesaxlinearheartSlash2}>
            <img
              className={styles.refreshIcon}
              alt=""
              src="/vuesaxlinearheartslash2.svg"
            />
          </button>
        </button>
      </div>
    </div>
  );
};

export default Comments;
