import { useCallback } from "react";
import OpinionExplorerContainer from "../components/OpinionExplorerContainer";
import Header1 from "../components/Header1";
import HallOfFameContainer from "../components/HallOfFameContainer";
import FeaturedPostsContainer from "../components/FeaturedPostsContainer";
import TrendingPostsSection from "../components/TrendingPostsSection";
import TrendingCreatorsContainer from "../components/TrendingCreatorsContainer";
import WithdrawSection from "../components/WithdrawSection";
import MobileCTAContainer from "../components/MobileCTAContainer";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.sectionhomepageWrapper}>
        <div className={styles.sectionhomepage}>
          <div className={styles.component5Parent}>
            <div className={styles.component5}>
              <div className={styles.imageParent}>
                <div className={styles.image}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-48@2x.png"
                  />
                </div>
                <div className={styles.image1}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-47@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-46@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-50@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-55@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-56@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component10}>
              <div className={styles.imageGroup}>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-75@2x.png"
                  />
                </div>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-751@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-752@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image75Icon3}
                    alt=""
                    src="/image-753@2x.png"
                  />
                </div>
                <div className={styles.image10}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-754@2x.png"
                  />
                </div>
                <div className={styles.image11}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-755@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component9}>
              <div className={styles.imageParent}>
                <div className={styles.image}>
                  <img
                    className={styles.image48Icon1}
                    alt=""
                    src="/image-481@2x.png"
                  />
                </div>
                <div className={styles.image1}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-471@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-461@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-501@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-551@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-561@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component11}>
              <div className={styles.imageGroup}>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-756@2x.png"
                  />
                </div>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-757@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-758@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image75Icon9}
                    alt=""
                    src="/image-759@2x.png"
                  />
                </div>
                <div className={styles.image10}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-7510@2x.png"
                  />
                </div>
                <div className={styles.image11}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-755@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <OpinionExplorerContainer />
          <div className={styles.fading} />
          <Header1 />
          <img
            className={styles.timefeedLowResolutionLogoBIcon}
            alt=""
            src="/timefeedlowresolutionlogoblackonwhitebackground-2@2x.png"
          />
          <img
            className={styles.notificationBingIcon}
            alt=""
            src="/notificationbing.svg"
          />
        </div>
      </div>
      <div className={styles.logoClouds1Parent} data-scroll-to="frameContainer">
        <div className={styles.logoClouds1}>
          <div className={styles.logosSection}>
            <img className={styles.dividerIcon} alt="" src="/divider.svg" />
            <div className={styles.logos}>
              <img
                className={styles.image36Icon}
                alt=""
                src="/image-36@2x.png"
              />
              <img
                className={styles.image37Icon}
                alt=""
                src="/image-37@2x.png"
              />
              <button className={styles.image38} />
              <img
                className={styles.image39Icon}
                alt=""
                src="/image-39@2x.png"
              />
              <img
                className={styles.image41Icon}
                alt=""
                src="/image-41@2x.png"
              />
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider.svg" />
          </div>
        </div>
        <HallOfFameContainer />
        <div className={styles.fading1} />
        <FeaturedPostsContainer />
      </div>
      <div className={styles.desktop3}>
        <div className={styles.frameParent}>
          <TrendingPostsSection />
          <TrendingCreatorsContainer />
        </div>
      </div>
      <WithdrawSection />
      <div className={styles.postDropdownWrapper}>
        <select className={styles.postDropdown}>
          <option value="02:21">Formation of USE</option>
          <option value="01:15">Abortion: A Growing Debate</option>
        </select>
      </div>
      <MobileCTAContainer />
      <div className={styles.vuesaxlineararrowRight} />
      <div className={styles.vuesaxlinearrefresh} />
      <div className={styles.timeGained}>Time Gained</div>
      <div className={styles.div}>1:28</div>
      <div className={styles.timeGained1}>Time Gained</div>
      <div className={styles.div1}>1:28</div>
      <div className={styles.timeGained2}>Time Gained</div>
      <div className={styles.div2}>1:28</div>
      <div className={styles.timeGained3}>Time Gained</div>
      <div className={styles.div3}>1:28</div>
      <div className={styles.timeGained4}>Time Gained</div>
      <div className={styles.div4}>1:28</div>
      <div className={styles.timeGained5}>Time Gained</div>
      <div className={styles.div5}>1:28</div>
      <input
        className={styles.withdrawfield}
        type="number"
        placeholder="20"
        min={0.1}
        required
      />
      <button
        className={styles.chevronRightBlack24dp15Wrapper}
        onClick={onFrameButtonClick}
      >
        <img
          className={styles.chevronRightBlack24dp15}
          alt=""
          src="/chevron-right-black-24dp-15-1.svg"
        />
      </button>
    </div>
  );
};

export default HomePage;
