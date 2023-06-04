import styles from "./AuctionCard.module.css";
const AuctionCard = ({ imageDimensions, imageIds }) => {
  return (
    <div className={styles.auctions}>
      <img className={styles.image58Icon} alt="" src={imageDimensions} />
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src="/image-2912@2x.png" />
        </div>
        <div className={styles.profile1}>
          <img className={styles.image29Icon} alt="" src="/image-2925@2x.png" />
        </div>
        <div className={styles.profile2}>
          <img className={styles.image29Icon} alt="" src="/image-2926@2x.png" />
        </div>
        <div className={styles.profile3}>
          <img className={styles.image29Icon} alt="" src="/image-2915@2x.png" />
          <img className={styles.image29Icon} alt="" src="/image-411@2x.png" />
        </div>
        <div className={styles.profile4}>
          <img className={styles.image29Icon} alt="" src="/image-2916@2x.png" />
          <img className={styles.image29Icon} alt="" src="/image-412@2x.png" />
        </div>
        <img className={styles.verified2Icon} alt="" src="/verified-2@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <input className={styles.groupChild} type="checkbox" autoFocus />
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src="/vuesaxboldheart3.svg"
        />
      </div>
      <input className={styles.auctionsChild} type="checkbox" />
      <img
        className={styles.vuesaxlinearheartSlashIcon}
        alt=""
        src="/vuesaxlinearheartslash1.svg"
      />
      <button className={styles.rectangleGroup}>
        <img
          className={styles.groupItem}
          alt=""
          loading="lazy"
          src={imageIds}
        />
        <div className={styles.iconlyboldgraphParent}>
          <img className={styles.iconlyboldgraph} alt="" />
          <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
          <img className={styles.path33909Icon} alt="" src="/path-33909.svg" />
          <div className={styles.div}>05:02:00</div>
        </div>
      </button>
    </div>
  );
};

export default AuctionCard;
