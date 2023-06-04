import { useMemo } from "react";
import styles from "./AuctionTimeContainer.module.css";
const AuctionTimeContainer = ({
  imageDimensions,
  smallImageDimensions,
  propBorderRadius,
}) => {
  const image57IconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.auctions}>
      <img
        className={styles.image57Icon}
        alt=""
        src={imageDimensions}
        style={image57IconStyle}
      />
      <img className={styles.auctionsChild} alt="" src="/group-342901.svg" />
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src="/image-2912@2x.png" />
        </div>
        <div className={styles.profile1}>
          <img className={styles.image29Icon} alt="" src="/image-2913@2x.png" />
        </div>
        <div className={styles.profile2}>
          <img className={styles.image29Icon} alt="" src="/image-2914@2x.png" />
        </div>
        <div className={styles.profile3}>
          <img className={styles.image29Icon} alt="" src="/image-2915@2x.png" />
        </div>
        <div className={styles.profile4}>
          <img className={styles.image29Icon} alt="" src="/image-2916@2x.png" />
        </div>
        <img className={styles.verified2Icon} alt="" src="/verified-2@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src={smallImageDimensions} />
        <div className={styles.iconlyboldgraphParent}>
          <img
            className={styles.iconlyboldgraph}
            alt=""
            src="/iconlyboldgraph.svg"
          />
          <div className={styles.div}>05:38:40</div>
        </div>
      </div>
    </div>
  );
};

export default AuctionTimeContainer;
