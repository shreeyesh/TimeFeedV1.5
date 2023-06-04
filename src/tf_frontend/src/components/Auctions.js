import styles from "./Auctions.module.css";
const Auctions = ({ heading, description, gainTimeValue, timerValue }) => {
  return (
    <div className={styles.auctions}>
      <div className={styles.auctions1}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src="/blurText2@2x.png" />
          <img className={styles.image46Icon} alt="" src="/image-462@2x.png" />
          <div className={styles.rectangleGroup}>
            <img className={styles.frameItem} alt="" src="/blurText3@2x.png" />
            <div className={styles.iconlyboldgraphParent}>
              <img
                className={styles.iconlyboldgraph}
                alt=""
                src="/iconlyboldgraph.svg"
              />
              <div className={styles.div}>{timerValue}</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.climateChangeAGlobalCrisiParent}>
                <div className={styles.climateChangeA}>{heading}</div>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2917@2x.png"
                />
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.description}>{description}</div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <img className={styles.auctionsChild} alt="" src="/group-34290.svg" />
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img
              className={styles.image29Icon1}
              alt=""
              src="/image-2912@2x.png"
            />
          </div>
          <div className={styles.profile1}>
            <img
              className={styles.image29Icon1}
              alt=""
              src="/image-2913@2x.png"
            />
          </div>
          <div className={styles.profile2}>
            <img
              className={styles.image29Icon1}
              alt=""
              src="/image-2914@2x.png"
            />
          </div>
          <div className={styles.profile3}>
            <img
              className={styles.image29Icon1}
              alt=""
              src="/image-2915@2x.png"
            />
          </div>
          <div className={styles.profile4}>
            <img
              className={styles.image29Icon1}
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
      </div>
      <div className={styles.timeGained}>Time Gained</div>
      <div className={styles.div1}>{gainTimeValue}</div>
    </div>
  );
};

export default Auctions;
