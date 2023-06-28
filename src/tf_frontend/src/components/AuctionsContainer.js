import { useMemo } from "react";
import styles from "./AuctionsContainer.module.css";
const AuctionsContainer = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  image58Opacity,
  frame34323Opacity,
  image29,
  image29Top,
  image29Right,
  image29Bottom,
  image29Left,
  image291,
  image29Top1,
  image29Right1,
  image29Bottom1,
  image29Left1,
  image292,
  image29Top2,
  image29Right2,
  image29Bottom2,
  image29Left2,
  image293,
  image29Top3,
  image29Right3,
  image29Bottom3,
  image29Left3,
  image294,
  image29Top4,
  image29Right4,
  image29Bottom4,
  image29Left4,
  verified2,
  frame34288Opacity,
  rectangle3320Top,
  rectangle3320Left,
  rectangle3320Width,
  rectangle3320Height,
  iconlyBoldGraph,
  group34290Opacity,
  timeGainedTop,
  propTop,
}) => {
  const image58IconStyle = useMemo(() => {
    return {
      opacity: image58Opacity,
    };
  }, [image58Opacity]);

  const frameDivStyle = useMemo(() => {
    return {
      opacity: frame34323Opacity,
    };
  }, [frame34323Opacity]);

  const image29IconStyle = useMemo(() => {
    return {
      top: image29Top,
      right: image29Right,
      bottom: image29Bottom,
      left: image29Left,
    };
  }, [image29Top, image29Right, image29Bottom, image29Left]);

  const image29Icon1Style = useMemo(() => {
    return {
      top: image29Top1,
      right: image29Right1,
      bottom: image29Bottom1,
      left: image29Left1,
    };
  }, [image29Top1, image29Right1, image29Bottom1, image29Left1]);

  const image29Icon2Style = useMemo(() => {
    return {
      top: image29Top2,
      right: image29Right2,
      bottom: image29Bottom2,
      left: image29Left2,
    };
  }, [image29Top2, image29Right2, image29Bottom2, image29Left2]);

  const image29Icon3Style = useMemo(() => {
    return {
      top: image29Top3,
      right: image29Right3,
      bottom: image29Bottom3,
      left: image29Left3,
    };
  }, [image29Top3, image29Right3, image29Bottom3, image29Left3]);

  const image29Icon4Style = useMemo(() => {
    return {
      top: image29Top4,
      right: image29Right4,
      bottom: image29Bottom4,
      left: image29Left4,
    };
  }, [image29Top4, image29Right4, image29Bottom4, image29Left4]);

  const frameDiv1Style = useMemo(() => {
    return {
      opacity: frame34288Opacity,
    };
  }, [frame34288Opacity]);

  const rectangleIconStyle = useMemo(() => {
    return {
      top: rectangle3320Top,
      left: rectangle3320Left,
      width: rectangle3320Width,
      height: rectangle3320Height,
    };
  }, [
    rectangle3320Top,
    rectangle3320Left,
    rectangle3320Width,
    rectangle3320Height,
  ]);

  const groupIconStyle = useMemo(() => {
    return {
      opacity: group34290Opacity,
    };
  }, [group34290Opacity]);

  const timeGainedStyle = useMemo(() => {
    return {
      top: timeGainedTop,
    };
  }, [timeGainedTop]);

  const divStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.auctions}>
      <div className={styles.auctions1}>
        <img
          className={styles.image58Icon}
          alt=""
          src={imageIds}
          style={image58IconStyle}
        />
        <div className={styles.profileParent} style={frameDivStyle}>
          <div className={styles.profile}>
            <img
              className={styles.image29Icon}
              alt=""
              src={image29}
              style={image29IconStyle}
            />
          </div>
          <div className={styles.profile1}>
            <img
              className={styles.image29Icon}
              alt=""
              src={image291}
              style={image29Icon1Style}
            />
          </div>
          <div className={styles.profile2}>
            <img
              className={styles.image29Icon}
              alt=""
              src={image292}
              style={image29Icon2Style}
            />
          </div>
          <div className={styles.profile3}>
            <img
              className={styles.image29Icon}
              alt=""
              src={image293}
              style={image29Icon3Style}
            />
          </div>
          <div className={styles.profile4}>
            <img
              className={styles.image29Icon}
              alt=""
              src={image294}
              style={image29Icon4Style}
            />
          </div>
          <img className={styles.verified2Icon} alt="" src={verified2} />
        </div>
        <div className={styles.rectangleParent} style={frameDiv1Style}>
          <img
            className={styles.frameChild}
            alt=""
            src={smallImageIds}
            style={rectangleIconStyle}
          />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src={iconlyBoldGraph}
            />
            <div className={styles.div}>05:38:40</div>
          </div>
        </div>
        <img
          className={styles.auctionsChild}
          alt=""
          src={mediumImageIds}
          style={groupIconStyle}
        />
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
      <div className={styles.timeGained} style={timeGainedStyle}>
        Category
      </div>
      <div className={styles.div1} style={divStyle}>
        Politics
      </div>
    </div>
  );
};

export default AuctionsContainer;
