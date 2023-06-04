import styles from "./AuctionBox.module.css";
const AuctionBox = ({
  imageDimensions,
  imageDimensionIds,
  imageDimensionValues,
}) => {
  return (
    <div className={styles.auctions}>
      <div className={styles.auctions1}>
        <img className={styles.image63Icon} alt="" src={imageDimensions} />
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-2912@2x.png"
            />
          </div>
          <div className={styles.profile1}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-2913@2x.png"
            />
          </div>
          <div className={styles.profile2}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-2914@2x.png"
            />
          </div>
          <div className={styles.profile3}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-2915@2x.png"
            />
          </div>
          <div className={styles.profile4}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-2916@2x.png"
            />
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="/verified-2@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src={imageDimensionIds} />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src={imageDimensionValues}
            />
            <div className={styles.div}>05:38:40</div>
          </div>
        </div>
        <img className={styles.auctionsChild} alt="" src="/group-342891.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.formationOfUseParent}>
            <div className={styles.formationOfUse}>Formation of USE</div>
            <img
              className={styles.image29Icon5}
              alt=""
              src="/image-2917@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>
                <p className={styles.iFeelLike}>
                  I feel like formation of United States of
                </p>
                <p className={styles.iFeelLike}>
                  {" "}
                  Europe led by Germany is needed...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default AuctionBox;
