import { useState, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CreatePostPop from "../components/CreatePostPop";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import USEFormContainer from "../components/USEFormContainer";
import styles from "./ViewPost.module.css";
const ViewPost = () => {
  const navigate = useNavigate();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);

  const onTradeClick = useCallback(() => {
    navigate("/sectionhomepage");
  }, [navigate]);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.viewPost}>
        <div className={styles.viewPostInner}>
          <div className={styles.frameParent}>
            <Header
            />
            <div className={styles.desktop1}>
              <div className={styles.frameGroup}>
                <div />
                <div className={styles.frameWrapper}>
                  <div className={styles.auctionsWrapper}>
                    <div className={styles.auctions}>
                      <div className={styles.auctions1}>
                        <img
                          className={styles.image50Icon}
                          alt=""
                          src="/image-49@2x.png"
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
                            className={styles.frameChild}
                            type="checkbox"
                            autoFocus
                          />
                          <img
                            className={styles.vuesaxboldheartIcon}
                            alt=""
                            src="/vuesaxboldheart.svg"
                          />
                        </div>
                        <input
                          className={styles.auctionsChild}
                          type="checkbox"
                        />
                        <img
                          className={styles.vuesaxlinearheartSlashIcon}
                          alt=""
                          src="/vuesaxlinearheartslash.svg"
                        />
                        <button className={styles.rectangleGroup}>
                          <img
                            className={styles.frameItem}
                            alt=""
                            loading="lazy"
                            src="/TransperentText1@2x.png"
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
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.formationOfUseParent}>
                            <div className={styles.formationOfUse}>
                              Formation of USE
                            </div>
                            <img
                              className={styles.image29Icon5}
                              alt=""
                              src="/image-2917@2x.png"
                            />
                          </div>
                          <div className={styles.frameWrapper1}>
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
                      <div className={styles.timeGained}>Time Gained</div>
                      <div className={styles.div1}>1:28</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.auctions2}>
                <div className={styles.usercard}>
                  <img
                    className={styles.image56Icon}
                    alt=""
                    src="/image-565@2x.png"
                  />
                  <img className={styles.iconlyboldgraph1} alt="" />
                  <button className={styles.rectangleContainer}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/rectangle-3320@2x.png"
                    />
                    <div className={styles.iconlyboldgraphGroup}>
                      <img className={styles.iconlyboldgraph2} alt="" />
                      <img
                        className={styles.vuesaxlinearunlimitedIcon1}
                        alt=""
                        src="/vuesaxlinearunlimited.svg"
                      />
                      <div className={styles.follow}>FOLLOW</div>
                    </div>
                  </button>
                  <button className={styles.frameButton}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      loading="lazy"
                      src="/TransperentText2@2x.png"
                    />
                    <div className={styles.iconlyboldgraphContainer}>
                      <img className={styles.iconlyboldgraph3} alt="" />
                      <img
                        className={styles.vuesaxlinearunlimitedIcon}
                        alt=""
                      />
                      <div className={styles.byach}>BYACH</div>
                    </div>
                  </button>
                  <button className={styles.rectangleParent1}>
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
                      <div className={styles.alexRodriguesAlexir}>
                        Alex Rodrigues @Alexir
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
                          <p className={styles.iFeelLike}>
                            <span className={styles.span}>
                              <span>&nbsp;</span>
                            </span>
                          </p>
                          <p className={styles.followers20kCla}>
                            <span className={styles.span}>
                              <span>{`       `}</span>
                              <span> FOLLOWERS : 20K CLAN</span>
                            </span>
                          </p>
                          <p className={styles.iFeelLike}>
                            <span className={styles.span}>
                              <span>{`                                                   `}</span>
                            </span>
                          </p>
                          <p className={styles.iFeelLike}>
                            <span className={styles.span}>
                              <span>{`       FOLLOWING : 5743         BYACH `}</span>
                            </span>
                          </p>
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
              <button className={styles.vuesaxlineararrowRight}>
                <div className={styles.arrowRight}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                  />
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/arrowright1.svg"
                  />
                  <button className={styles.vuesaxlinearrefresh}>
                    <img
                      className={styles.refreshIcon}
                      alt=""
                      src="/refresh.svg"
                    />
                  </button>
                  <img className={styles.vectorIcon1} alt="" />
                </div>
              </button>
              <div className={styles.desktop1Child} />
              <Button
                className={styles.new}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >{`                                                    NEW `}</Button>
              <Button
                className={styles.trending}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >
                TRENDING
              </Button>
              <Button
                className={styles.related}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >{` RELATED `}</Button>
              <USEFormContainer
                imageIds="/image-553@2x.png"
                smallImageIds="/image-5110@2x.png"
                mediumImageIds="/image-5110@2x.png"
                smallImageIds2="/image-5110@2x.png"
              />
              <USEFormContainer
                imageIds="/image-563@2x.png"
                smallImageIds="/image-524@2x.png"
                mediumImageIds="/image-518@2x.png"
                smallImageIds2="/image-519@2x.png"
                propLeft="0px"
              />
              <div className={styles.image54Parent}>
                <img
                  className={styles.image54Icon}
                  alt=""
                  src="/image-543@2x.png"
                />
                <img
                  className={styles.image55Icon}
                  alt=""
                  src="/image-558@2x.png"
                />
                <img
                  className={styles.image52Icon}
                  alt=""
                  src="/image-5210@2x.png"
                />
                <img
                  className={styles.image51Icon}
                  alt=""
                  src="/image-558@2x.png"
                />
              </div>
              <div className={styles.desktop1Item} />
              <div className={styles.desktop1Inner} />
              <div className={styles.frameParent2}>
                <div className={styles.image29Parent}>
                  <img
                    className={styles.image29Icon11}
                    alt=""
                    src="/image-2927@2x.png"
                  />
                  <div className={styles.inputleftaddon}>
                    <p
                      className={styles.alexRodrigues}
                    >{`Alex Rodrigues     `}</p>
                    <p className={styles.iFeelLike}>@Alexir</p>
                  </div>
                  <div
                    className={styles.textPlaceholder}
                  >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
                </div>
                <button className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector1.svg"
                  />
                  <button className={styles.vuesaxlinearheartSlash}>
                    <div className={styles.heartSlash}>
                      <div className={styles.heartSlash}>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group2.svg"
                        />
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector2.svg"
                        />
                        <img className={styles.vectorIcon4} alt="" />
                      </div>
                    </div>
                  </button>
                </button>
              </div>
              <div className={styles.component19}>
                <div className={styles.property1default}>
                  <div className={styles.textPlaceholderWrapper}>
                    <div className={styles.textPlaceholder1}>
                      I can understand your sentiment, but unity doesn't always
                      guarantee success.
                    </div>
                  </div>
                  <div className={styles.image41Parent}>
                    <img
                      className={styles.image29Icon11}
                      alt=""
                      src="/image-412@2x.png"
                    />
                    <div className={styles.inputleftaddon1}>
                      <p className={styles.iFeelLike}>Emily Wilson</p>
                      <p className={styles.iFeelLike}>@emilywilson</p>
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <button className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector3.svg"
                      />
                      <button className={styles.vuesaxlinearheartSlash2}>
                        <img
                          className={styles.refreshIcon}
                          alt=""
                          src="/vuesaxlinearheartslash2.svg"
                        />
                      </button>
                    </button>
                  </div>
                </div>
                <div className={styles.property1variant2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-413@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Ryan Smith</p>
                        <p className={styles.iFeelLike}>@RyanFeeds</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder2}>
                      Cultural diversity important too
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector4.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-414@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder3}>
                      All countries must be on board.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant4}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-415@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder4}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector5.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash4.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant5}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-416@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder5}>
                      Don't rush without consideration.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon11}
                          alt=""
                          src="/image-417@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Christina Will</p>
                          <p className={styles.iFeelLike}>@ChristinaW</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder6}>
                      Interesting concept, evaluate well.
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector6.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash5.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.verified1Icon}
                    alt=""
                    src="/verified-1@2x.png"
                  />
                </div>
                <div className={styles.property1variant7}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-411@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder7}>
                      Potential drawbacks to consider.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant8}>
                  <div className={styles.frameParent9}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-418@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector7.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant9}>
                  <div className={styles.frameParent9}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-419@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector8.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash7.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.verified1Icon1}
                    alt=""
                    src="/verified-1@2x.png"
                  />
                </div>
                <div className={styles.property1variant10}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4110@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector9.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant11}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4111@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector10.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash9.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant12}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4112@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector11.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant13}>
                  <div className={styles.frameParent9}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4113@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector12.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewMore}>--View More--</div>
              <img
                className={styles.image56Icon1}
                alt=""
                src="/image-566@2x.png"
              />
              <img
                className={styles.verified1Icon2}
                alt=""
                src="/verified-1@2x.png"
              />
              <div className={styles.group481543defaultParent}>
                <form className={styles.group481543default} method="post">
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="/image-302@2x.png"
                  />
                  <textarea className={styles.textPlaceholder14} />
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector13.svg"
                  />
                </form>
                <textarea
                  className={styles.textPlaceholder15}
                  placeholder="Comment Here"
                />
              </div>
              <div className={styles.vuesaxlineartetherUsdt}>
                <div className={styles.rectangleParent2}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/rectangle-6954@2x.png"
                  />
                  <button className={styles.rectangleButton} autoFocus />
                  <div className={styles.div2}>300,000</div>
                  <div className={styles.buyTime}>BUY $TIME</div>
                </div>
              </div>
              <img
                className={styles.vuesaxlineartetherUsdtIcon}
                alt=""
                src="/vuesaxlineartetherusdt.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent15}>
          <div className={styles.frameWrapper4}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon6} alt="" src="/vector3.svg" />
              <img
                className={styles.vuesaxlinearheartSlashIcon2}
                alt=""
                src="/vuesaxlinearheartslash12.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon6} alt="" src="/vector14.svg" />
              <img
                className={styles.vuesaxlinearheartSlashIcon2}
                alt=""
                src="/vuesaxlinearheartslash13.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon6} alt="" src="/vector3.svg" />
              <img
                className={styles.vuesaxlinearheartSlashIcon2}
                alt=""
                src="/vuesaxlinearheartslash12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {isCreatePostPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCreatePostPopPopup}
        >
          <CreatePostPop onClose={closeCreatePostPopPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewPost;
