import styles from "./FavoritFormContainer1.module.css";
const FavoritFormContainer1 = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  thumbnailImageIds,
  largeImageIds,
  extraSmallImageIds,
}) => {
  return (
    <div className={styles.favorit}>
      <div className={styles.image55Wrapper}>
        <img className={styles.image55Icon} alt="" src={imageIds} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={smallImageIds} />
        </div>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={mediumImageIds} />
        </div>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={thumbnailImageIds} />
        </div>
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src={largeImageIds} />
        </div>
        <img
          className={styles.verified2Icon}
          alt=""
          src="/verified-22@2x.png"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.r66VoldWrapper}>
          <div className={styles.r66Vold}>Formation of USE</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>Mark Zuckerberg</div>
          </div>
        </div>
      </div>
      <button className={styles.like}>
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src={extraSmallImageIds}
        />
        <div className={styles.div}>82</div>
      </button>
    </div>
  );
};

export default FavoritFormContainer1;
