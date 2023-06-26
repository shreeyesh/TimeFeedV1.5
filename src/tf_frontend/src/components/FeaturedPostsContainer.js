import { useCallback,useState } from "react";
import AuctionRow from "./AuctionRow";
import AuctionContainer from "./AuctionContainer";
import FormationContainer from "./FormationContainer";
import AuctionsContainer from "./AuctionsContainer";
import AuctionTimeContainer from "./AuctionTimeContainer";
import AuctionBox from "./AuctionBox";
import styles from "./FeaturedPostsContainer.module.css";
const FeaturedPostsContainer = () => {
  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const [showRecent, setShowRecent] = useState(false);

  const handleButtonClick = useCallback(() => {
    setShowRecent(prevShowRecent => {
        console.log("Toggled  :", !prevShowRecent);
        return !prevShowRecent;
    });
}, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup} data-scroll-to="frameContainer1">
            <button className={styles.seeAll} onClick={onButton2Click}>See All</button>
          <div className={styles.button} >
          </div>
        </div>
        <div className={styles.frameContainer}>
        <AuctionRow handleButtonClick={handleButtonClick} />
          <div className={styles.auctionsParent}>
            <div className={styles.auctions}>
              <AuctionContainer
                imageDimensions="/image-562@2x.png"
                imageIds="/blurText5@2x.png"
                imageDimensionIds="/group-34242.svg"
                propHeight="330px"
                propBorderRadius="8px"
              />
              <FormationContainer />
              <div className={styles.timeGainedParent}>
                <div className={styles.timeGained}>Time Gained</div>
                <div className={styles.div}>1:28</div>
              </div>
            </div>
            <AuctionsContainer
              imageIds="/image-58@2x.png"
              smallImageIds="/blurText6@2x.png"
              mediumImageIds="/group-342901.svg"
              image29="/image-2912@2x.png"
              image291="/image-2913@2x.png"
              image292="/image-2914@2x.png"
              image293="/image-2915@2x.png"
              image294="/image-2916@2x.png"
              verified2="/verified-2@2x.png"
              iconlyBoldGraph="/iconlyboldgraph.svg"
            />
            <div className={styles.auctions1}>
              <AuctionTimeContainer
                imageDimensions="/image-57@2x.png"
                smallImageDimensions="/blurText7@2x.png"
              />
              <FormationContainer />
            </div>
            <div className={styles.auctions2}>
              <AuctionTimeContainer
                imageDimensions="/image-60@2x.png"
                smallImageDimensions="/blurText8@2x.png"
                propBorderRadius="12px"
              />
              <FormationContainer />
              <div className={styles.timeGained1}>Time Gained</div>
              <div className={styles.div1}>1:28</div>
            </div>
          </div>
          <div className={styles.auctionsGroup}>
            <AuctionsContainer
              imageIds="/image-64@2x.png"
              smallImageIds="/blurText9@2x.png"
              mediumImageIds="/group-342902.svg"
              image58Opacity="unset"
              frame34323Opacity="unset"
              image29="/image-2912@2x.png"
              image29Top="0%"
              image29Right="-15.38%"
              image29Bottom="-15.38%"
              image29Left="0%"
              image291="/image-2913@2x.png"
              image29Top1="0%"
              image29Right1="-15.38%"
              image29Bottom1="-15.38%"
              image29Left1="0%"
              image292="/image-2914@2x.png"
              image29Top2="0%"
              image29Right2="-15.38%"
              image29Bottom2="-15.38%"
              image29Left2="0%"
              image293="/image-2915@2x.png"
              image29Top3="0%"
              image29Right3="-15.38%"
              image29Bottom3="-15.38%"
              image29Left3="0%"
              image294="/image-2916@2x.png"
              image29Top4="0%"
              image29Right4="-15.38%"
              image29Bottom4="-15.38%"
              image29Left4="0%"
              verified2="/verified-2@2x.png"
              frame34288Opacity="unset"
              rectangle3320Top="0px"
              rectangle3320Left="0px"
              rectangle3320Width="124px"
              rectangle3320Height="48px"
              iconlyBoldGraph="/iconlyboldgraph.svg"
              group34290Opacity="unset"
              timeGainedTop="473px"
              propTop="473px"
            />
            <AuctionBox
              imageDimensions="/image-63@2x.png"
              imageDimensionIds="/blurText10@2x.png"
              imageDimensionValues="/iconlyboldgraph.svg"
            />
            <AuctionBox
              imageDimensions="/image-62@2x.png"
              imageDimensionIds="/blurText11@2x.png"
              imageDimensionValues="/iconlyboldgraph.svg"
            />
            <div className={styles.auctions3}>
              <div className={styles.auctions4}>
                <img
                  className={styles.image65Icon}
                  alt=""
                  src="/image-65@2x.png"
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
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/blurText12@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="/iconlyboldgraph.svg"
                    />
                    <div className={styles.div2}>05:38:40</div>
                  </div>
                </div>
                <img
                  className={styles.auctionsChild}
                  alt=""
                  src="/group-342891.svg"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.gunControlStrikingTheBalaParent}>
                    <div className={styles.gunControlStriking}>
                      Gun Control: Striking the Balance
                    </div>
                    <img
                      className={styles.image29Icon5}
                      alt=""
                      src="/image-2917@2x.png"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.descriptionWrapper}>
                      <div className={styles.description}>
                        Gun control laws vary widely around the world, with some
                        countries having...
                      </div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
              <div className={styles.timeGained2}>Time Gained</div>
              <div className={styles.div3}>1:28</div>
            </div>
          </div>
          <div className={styles.auctionsGroup}>
          <AuctionBox
              imageDimensions="/image-711@2x.png"
              imageDimensionIds="/blurText14@2x.png"
              imageDimensionValues="/iconlyboldgraph1.svg"
            />
            <AuctionBox
              imageDimensions="/image-72@2x.png"
              imageDimensionIds="/blurText14@2x.png"
              imageDimensionValues="/iconlyboldgraph1.svg"
            />
            <AuctionBox
              imageDimensions="/image-621@2x.png"
              imageDimensionIds="/blurText15@2x.png"
              imageDimensionValues="/iconlyboldgraph1.svg"
            />
            <AuctionBox
              imageDimensions="/image-651@2x.png"
              imageDimensionIds="/blurText16@2x.png"
              imageDimensionValues="/iconlyboldgraph1.svg"
            />
          </div>
        </div>
      </div>
            <button className={styles.featuredPosts}>Featured Posts</button>
      <button className={styles.vuesaxlineararrowRight}>
        <div className={styles.arrowRight}>
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
          <button className={styles.vuesaxlinearrefresh}>
            <img className={styles.refreshIcon} alt="" src="/refresh.svg" />
          </button>
          <img className={styles.vectorIcon1} alt="" />
        </div>
      </button>
    </div>
  );
};

export default FeaturedPostsContainer;
