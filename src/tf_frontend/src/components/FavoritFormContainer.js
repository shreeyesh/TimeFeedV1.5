import { useMemo } from "react";
import styles from "./FavoritFormContainer.module.css";
const FavoritFormContainer = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  extraSmallImageIds,
  largeImageIds,
  extraExtraSmallImageIds,
  propTop,
  propLeft,
}) => {
  const image50IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.favorit}>
      <div className={styles.image50Wrapper}>
        <img
          className={styles.image50Icon}
          alt=""
          src={imageIds}
          style={image50IconStyle}
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={smallImageIds} />
        </div>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={mediumImageIds} />
        </div>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={extraSmallImageIds} />
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
          src={extraExtraSmallImageIds}
        />
        <div className={styles.div}>82</div>
      </button>
    </div>
  );
};

export default FavoritFormContainer;
