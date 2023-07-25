import styles from "./UserCard.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState,useCallback } from "react";
const UserCard = ({creatorUsername, pcaller}) => {
    const navigate = useNavigate();
    const [isFOLLOWINGOVERLAYOpen, setFOLLOWINGOVERLAYOpen] = useState(false);
    console.log("creatorUsername : ",creatorUsername);
    console.log("pcaller : ",pcaller);
    const profileClick = useCallback(() => {
      navigate(`/userprofile/${pcaller}`);}, [navigate, pcaller]);
      const openFOLLOWINGOVERLAY = useCallback(() => {
        setFOLLOWINGOVERLAYOpen(true);
      }, []);
    
      const closeFOLLOWINGOVERLAY = useCallback(() => {
        setFOLLOWINGOVERLAYOpen(false);
      }, []);
    return (
<div className={styles.auctions2}>
                <div className={styles.usercard}>
                  <img
                    className={styles.image56Icon}
                    alt=""
                    src="/image-565@2x.png"
                  />
                  <img className={styles.iconlyboldgraph1} alt="" />
                  {isFOLLOWINGOVERLAYOpen == false && (
                  <button className={styles.rectangleContainer}  onClick={openFOLLOWINGOVERLAY}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/rectangle-3320@2x.png"
                    />
                    <div className={styles.iconlyboldgraphGroup}>
                      <img
                        className={styles.vuesaxlinearunlimitedIcon1}
                        alt=""
                        src="/vuesaxlinearunlimited.svg"
                      />
                      <div className={styles.follow}>FOLLOW</div>
                    </div>
                  </button>
                   )}
                   {isFOLLOWINGOVERLAYOpen == true && (
                     <button className={styles.rectangleContainer}  onClick={closeFOLLOWINGOVERLAY}>
                     <img
                       className={styles.frameInner}
                       alt=""
                       src="/rectangle-3320@2x.png"
                     />
                     <div className={styles.iconlyboldgraphGroup}>
                       <img
                         className={styles.vuesaxlinearunlimitedIcon1}
                         alt=""
                         src="/vuesaxlinearunlimited.svg"
                       />
                       <div className={styles.following}>FOLLOWING</div>
                     </div>
                   </button>
                     )}
                  <button className={styles.frameButton}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      loading="lazy"
                      src="/TransperentText2@2x.png"
                    />
                    <div className={styles.iconlyboldgraphContainer}>
                      <div className={styles.byach}>BYACH</div>
                    </div>
                  </button>
                  <button className={styles.rectangleParent1} onClick = {profileClick}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      loading="lazy"
                      src="/blurText17@2x.png"
                    />
                    <div className={styles.frameChild2} />
                  </button>
                  <img
                    className={styles.vuesaxlinearpeopleIcon}
                    alt=""
                    src="/vuesaxlinearpeople.svg"
                  />
                  <img
                    className={styles.vuesaxlinearuserSquareIcon}
                    alt=""
                    src="/vuesaxlinearusersquare.svg"
                  />
                  <div className={styles.profile5}>PROFILE</div>
                </div>
                <img
                  className={styles.verified2Icon1}
                  alt=""
                  src="/verified-24@2x.png"
                />
                <div className={styles.auctionsInner}>
                  <div className={styles.frameDiv}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.name}>
                        {creatorUsername}
                      </div>
                      <div className={styles.username}>
                        @{creatorUsername}
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description1}>
                          <p className={styles.iFeelLike}>
                            <span>
                              <span>Carpediem/Virgo</span>
                            </span>
                          </p>
                          <p className={styles.iFeelLike}>
                            <span>
                              <span>{`I’m not a mind reader, but I can tell what `}</span>
                            </span>
                          </p>
                          <p className={styles.iFeelLike}>
                            <span>
                              <span>you’re thinking.</span>
                            </span>
                          </p>
                          <div className={styles.description2}>
                            FOLLOWERS
                            </div>
                          <div className={styles.description2}>
                            FOLLOWING
                            </div>
                          <div className={styles.amount}>
                            20k
                            </div>
                          <div className={styles.amount2}>
                            2.1k
                            </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mutualFollowers}>MUTUAL FOLLOWERS</div>
                <div className={styles.profileGroup}>
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
              </div>
)};
export default UserCard;
