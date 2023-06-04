import { useMemo } from "react";
import styles from "./USEFormContainer.module.css";
const USEFormContainer = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  smallImageIds2,
  propLeft,
}) => {
  const favoritStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.favorit} style={favoritStyle}>
      <div className={styles.image55Wrapper}>
        <img className={styles.image55Icon} alt="" src={imageIds} />
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src={smallImageIds} />
        <img className={styles.frameChild} alt="" src={mediumImageIds} />
        <img className={styles.frameChild} alt="" src={smallImageIds2} />
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src="/image-2920@2x.png" />
        </div>
        <img
          className={styles.verified2Icon}
          alt=""
          src="/verified-22@2x.png"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.formationOfUseWrapper}>
          <div className={styles.formationOfUse}>Formation of USE</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>Mark Zuckerberg</div>
          </div>
        </div>
      </div>
      <div className={styles.like}>
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src="/vuesaxboldheart2.svg"
        />
        <div className={styles.div}>82</div>
      </div>
    </div>
  );
};

export default USEFormContainer;
