import { Link } from "react-router-dom";
import styles from "./Auctions1.module.css";
const Auctions1 = ({
  postPicture,
  mutualpfp1,
  mutualpfp2,
  mutualpfp3,
  mutualpfp4,
  mutualpfp5,
  timerValue,
  heading,
  description,
  desc2,
  gainTime,
}) => {
  return (
    <Link className={styles.auctions} to="/view-post">
      <div className={styles.auctions1}>
        <img className={styles.image49Icon} alt="" src={postPicture} />
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src={mutualpfp1} />
          </div>
          <div className={styles.profile1}>
            <img className={styles.image29Icon} alt="" src={mutualpfp2} />
          </div>
          <div className={styles.profile2}>
            <img className={styles.image29Icon} alt="" src={mutualpfp3} />
          </div>
          <div className={styles.profile3}>
            <img className={styles.image29Icon} alt="" src={mutualpfp4} />
          </div>
          <div className={styles.profile4}>
            <img className={styles.image29Icon} alt="" src={mutualpfp5} />
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="/verified-2@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src="/blurText@2x.png" />
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
          <div className={styles.rectangleGroup}>
            <input className={styles.frameItem} type="checkbox" />
            <img
              className={styles.vuesaxlinearheartSlashIcon}
              alt=""
              src="/vuesaxlinearheartslash.svg"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <input className={styles.frameInner} type="checkbox" / >
            <img
              className={styles.vuesaxboldheartIcon}
              alt=""
              src="/vuesaxboldheart.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.formationOfUseParent}>
            <div className={styles.formationOfUse}>{heading}</div>
            <img
              className={styles.image29Icon5}
              alt=""
              src="/image-2917@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>
                <p className={styles.iFeelLike}>{description}</p>
                <p className={styles.iFeelLike}>{desc2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timeGainedParent}>
          <div className={styles.timeGained}>Time Gained</div>
          <div className={styles.div1}>{gainTime}</div>
        </div>
      </div>
    </Link>
  );
};

export default Auctions1;
