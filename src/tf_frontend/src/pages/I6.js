import AuctionCard from "../components/AuctionCard";
import styles from "./I6.module.css";
const I6 = () => {
  return (
    <div className={styles.i6}>
      <div className={styles.i61}>
        <div className={styles.property1default}>
          <AuctionCard
            imageDimensions="/image-583@2x.png"
            imageIds="/TransperentText7@2x.png"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.formationOfUseParent}>
                <div className={styles.formationOfUse}>Formation of USE</div>
                <img
                  className={styles.image29Icon}
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
          <div className={styles.timeGained}>Category</div>
          <div className={styles.div}>Politics</div>
        </div>
      </div>
    </div>
  );
};

export default I6;
