import { useMemo } from "react";
import styles from "./FollowContainer.module.css";
const FollowContainer = ({
  imageIds,
  smallImageIds,
  largeImageIds,
  smallImageIds2,
  mediumImageIds,
  extraSmallImageIds,
  extraLargeImageIds,
  smallImageIds3,
  propMarginLeft,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.postcardParent}>
        <div className={styles.postcard}>
          <div className={styles.auctions}>
            <img className={styles.image50Icon} alt="" src={imageIds} />
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
                  src="/image-2925@2x.png"
                />
              </div>
              <div className={styles.profile2}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2926@2x.png"
                />
              </div>
              <div className={styles.profile3}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2915@2x.png"
                />
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-411@2x.png"
                />
              </div>
              <div className={styles.profile4}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2916@2x.png"
                />
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-412@2x.png"
                />
              </div>
              <img
                className={styles.verified2Icon}
                alt=""
                src="/verified-2@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <input className={styles.groupChild} type="checkbox" autoFocus />
              <img
                className={styles.vuesaxboldheartIcon}
                alt=""
                src="/vuesaxboldheart.svg"
              />
            </div>
            <input className={styles.auctionsChild} type="checkbox" />
            <img
              className={styles.vuesaxlinearheartSlashIcon}
              alt=""
              src="/vuesaxlinearheartslash.svg"
            />
            <button className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                loading="lazy"
                src={smallImageIds}
              />
              <div className={styles.iconlyboldgraphParent}>
   
                <img
                  className={styles.path33909Icon}
                  alt=""
                  src="/path-33909.svg"
                />
                <div className={styles.div}>05:02:00</div>
              </div>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
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
          <div className={styles.timeGained}>Category</div>
          <div className={styles.div1}>Politics</div>
        </div>
        <div className={styles.postcard1}>
          <div className={styles.postcard}>
            <div className={styles.auctions}>
              <img className={styles.image58Icon} alt="" src={largeImageIds} />
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
                    src="/image-2925@2x.png"
                  />
                </div>
                <div className={styles.profile2}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-2926@2x.png"
                  />
                </div>
                <div className={styles.profile3}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-2915@2x.png"
                  />
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-411@2x.png"
                  />
                </div>
                <div className={styles.profile4}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-2916@2x.png"
                  />
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-412@2x.png"
                  />
                </div>
                <img
                  className={styles.verified2Icon}
                  alt=""
                  src="/verified-2@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <input
                  className={styles.groupChild}
                  type="checkbox"
                  autoFocus
                />
                <img
                  className={styles.vuesaxboldheartIcon}
                  alt=""
                  src="/vuesaxboldheart.svg"
                />
              </div>
              <input className={styles.auctionsChild} type="checkbox" />
              <img
                className={styles.vuesaxlinearheartSlashIcon}
                alt=""
                src="/vuesaxlinearheartslash.svg"
              />
              <button className={styles.rectangleGroup}>
                <img
                  className={styles.groupItem}
                  alt=""
                  loading="lazy"
                  src={smallImageIds2}
                />
                <div className={styles.iconlyboldgraphGroup}>
                  <img
                    className={styles.path33909Icon}
                    alt=""
                    src="/path-33909.svg"
                  />
                  <div className={styles.div}>05:02:00</div>
                </div>
              </button>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
            <div className={styles.timeGained}>Category</div>
            <div className={styles.div1}>Politics</div>
          </div>
        </div>
      </div>
      <div className={styles.postcardGroup}>
        <div className={styles.postcard}>
          <div className={styles.auctions}>
            <img className={styles.image50Icon} alt="" src={mediumImageIds} />
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
                  src="/image-2925@2x.png"
                />
              </div>
              <div className={styles.profile2}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2926@2x.png"
                />
              </div>
              <div className={styles.profile3}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2915@2x.png"
                />
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-411@2x.png"
                />
              </div>
              <div className={styles.profile4}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-2916@2x.png"
                />
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-412@2x.png"
                />
              </div>
              <img
                className={styles.verified2Icon}
                alt=""
                src="/verified-2@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <input className={styles.groupChild} type="checkbox" autoFocus />
              <img
                className={styles.vuesaxboldheartIcon}
                alt=""
                src="/vuesaxboldheart.svg"
              />
            </div>
            <input className={styles.auctionsChild} type="checkbox" />
            <img
              className={styles.vuesaxlinearheartSlashIcon}
              alt=""
              src="/vuesaxlinearheartslash.svg"
            />
            <button className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                loading="lazy"
                src={extraSmallImageIds}
              />
              <div className={styles.iconlyboldgraphParent}>
   
                <img
                  className={styles.path33909Icon}
                  alt=""
                  src="/path-33909.svg"
                />
                <div className={styles.div}>05:02:00</div>
              </div>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
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
          <div className={styles.timeGained}>Category</div>
          <div className={styles.div1}>Politics</div>
        </div>
        <div className={styles.postcard1}>
          <div className={styles.postcard}>
            <div className={styles.auctions}>
              <img
                className={styles.image58Icon}
                alt=""
                src={extraLargeImageIds}
              />
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
                    src="/image-2925@2x.png"
                  />
                </div>
                <div className={styles.profile2}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-2926@2x.png"
                  />
                </div>
                <div className={styles.profile3}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-2915@2x.png"
                  />
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-411@2x.png"
                  />
                </div>
                <div className={styles.profile4}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-2916@2x.png"
                  />
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-412@2x.png"
                  />
                </div>
                <img
                  className={styles.verified2Icon}
                  alt=""
                  src="/verified-2@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <input
                  className={styles.groupChild}
                  type="checkbox"
                  autoFocus
                />
                <img
                  className={styles.vuesaxboldheartIcon}
                  alt=""
                  src="/vuesaxboldheart.svg"
                />
              </div>
              <input className={styles.auctionsChild} type="checkbox" />
              <img
                className={styles.vuesaxlinearheartSlashIcon}
                alt=""
                src="/vuesaxlinearheartslash.svg"
              />
              <button className={styles.rectangleGroup}>
                <img
                  className={styles.groupItem}
                  alt=""
                  loading="lazy"
                  src={smallImageIds3}
                />
                <div className={styles.iconlyboldgraphGroup}>
                  <img
                    className={styles.path33909Icon}
                    alt=""
                    src="/path-33909.svg"
                  />
                  <div className={styles.div}>05:02:00</div>
                </div>
              </button>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
            <div className={styles.timeGained}>Category</div>
            <div className={styles.div1}>Politics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowContainer;
