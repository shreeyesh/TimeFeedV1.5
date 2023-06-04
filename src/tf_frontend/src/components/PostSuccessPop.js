import styles from "./PostSuccessPop.module.css";
const PostSuccessPop = ({ onClose }) => {
  return (
    <div className={styles.postsuccesspop}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupWrapper}>
          <div className={styles.shareThisArticleParent}>
            <div className={styles.shareThisArticle}>Share this article</div>
            <div className={styles.ifYouLike}>
              If you like this article share it with your friends.
            </div>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <img className={styles.groupItem} alt="" src="/ellipse-2.svg" />
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/polygon-1.svg"
                />
                <div className={styles.facebook}>Facebook</div>
                <img className={styles.vectorIcon} alt="" src="/vector16.svg" />
              </div>
              <div className={styles.ellipseGroup}>
                <img className={styles.groupItem} alt="" src="/ellipse-4.svg" />
                <img
                  className={styles.polygonIcon}
                  alt=""
                  src="/polygon-11.svg"
                />
                <div className={styles.whatsapp}>WhatsApp</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector17.svg"
                />
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/ellipse-41.svg"
                />
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/polygon-12.svg"
                />
                <div className={styles.reddit}>Reddit</div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector18.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/ellipse-11.svg"
                />
                <img
                  className={styles.groupChild4}
                  alt=""
                  src="/polygon-13.svg"
                />
                <div className={styles.twitter}>Twitter</div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector19.svg"
                />
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.link}>https://timefeed.space/post</div>
                <img className={styles.groupIcon} alt="" src="/group-9.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.groupFrame}>
            <div className={styles.shareThisArticleParent}>
              <div className={styles.shareThisArticle1}>Share this article</div>
              <div className={styles.ifYouLike1}>
                If you like this article share it with your friends.
              </div>
              <div className={styles.groupParent}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/ellipse-2.svg"
                  />
                  <img
                    className={styles.groupInner}
                    alt=""
                    src="/polygon-1.svg"
                  />
                  <div className={styles.facebook}>Facebook</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector16.svg"
                  />
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/ellipse-4.svg"
                  />
                  <img
                    className={styles.polygonIcon}
                    alt=""
                    src="/polygon-11.svg"
                  />
                  <div className={styles.whatsapp}>WhatsApp</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector17.svg"
                  />
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/ellipse-41.svg"
                  />
                  <img
                    className={styles.groupChild2}
                    alt=""
                    src="/polygon-12.svg"
                  />
                  <div className={styles.reddit}>Reddit</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector18.svg"
                  />
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <img
                    className={styles.groupChild4}
                    alt=""
                    src="/polygon-13.svg"
                  />
                  <div className={styles.twitter}>Twitter</div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector19.svg"
                  />
                </div>
              </div>
              <img className={styles.groupChild13} alt="" src="/group-13.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSuccessPop;
