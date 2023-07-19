import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostPop from "../components/CreatePostPop";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import PostsContainer from "../components/PostsContainer";
import FOLLOWINGOVERLAY from "../components/FOLLOWINGOVERLAY";
import styles from "./UserProfile.module.css";
import Header1 from "../components/Header1";
import Auctions1 from "../components/Auctions1";
import AuctionRow from "../components/AuctionRow";
const UserProfile = () => {
  const navigate = useNavigate();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const [isFOLLOWINGOVERLAYOpen, setFOLLOWINGOVERLAYOpen] = useState(false);

  const onTradeClick = useCallback(() => {
    navigate("/sectionhomepage");
  }, [navigate]);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  const openFOLLOWINGOVERLAY = useCallback(() => {
    setFOLLOWINGOVERLAYOpen(true);
  }, []);

  const closeFOLLOWINGOVERLAY = useCallback(() => {
    setFOLLOWINGOVERLAYOpen(false);
  }, []);
  
  const [showRecent, setShowRecent] = useState(false);

  const handleButtonClick = () => {
    console.log("Toggling posts");
    setShowRecent(!showRecent);
    toggleRecentPosts(); // Instead of calling setShowRecent(!showRecent);
  }

  const posts = [ 
    { id: 1, title: 'title1', content: 'content1' },
    { id: 2, title: 'title2', content: 'content2' },
    { id: 3, title: 'title3', content: 'content3' },
    { id: 4, title: 'title4', content: 'content4' },
    { id: 5, title: 'title5', content: 'content5' },
    { id: 6, title: 'title6', content: 'content6' },
  ]

  return (
    <>
      <div className={styles.userprofile}>
        <Header
          productIds="/account-circle-black-24dp-2-12.svg"
          onTradeClick={onTradeClick}
          openCreatePostPopPopup={openCreatePostPopPopup}
        />
        <div className={styles.usersection}>
          <div className={styles.frameParent}>
            <div />
            <div className={styles.frameWrapper}>
              <div className={styles.image56Wrapper}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-565@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="/verified-24@2x.png"
          />
          <div className={styles.usersectionChild} />
          <div className={styles.group481543defaultWrapper}>
            <form className={styles.group481543default} method="post">
              <img
                className={styles.image30Icon}
                alt=""
                src="/image-302@2x.png"
              />
              <textarea className={styles.textPlaceholder} />
              <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
            </form>
          </div>
          <div className={styles.vuesaxlineartetherUsdt}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-6954@2x.png"
              />
              <button className={styles.frameItem} autoFocus />
              <div className={styles.div}>300,000</div>
              <div className={styles.buyTime}>BUY $TIME</div>
            </div>
          </div>
          <img
            className={styles.vuesaxlineartetherUsdtIcon}
            alt=""
            src="/vuesaxlineartetherusdt.svg"
          />
          <PostsContainer />
          <div className={styles.alexRodrigues}>Alex Rodrigues</div>
          <div className={styles.posts}>
            <div className={styles.posts1}>POSTS</div>
            <div className={styles.div1}>15</div>
          </div>
          <div className={styles.followers}>
            <div className={styles.posts1}>FOLLOWERS</div>
            <div className={styles.k}>20k</div>
          </div>
          <div className={styles.following}>
            <div className={styles.posts1}>FOLLOWING</div>
            <div className={styles.k}>20k</div>
          </div>
          <div className={styles.badges}>
            <div className={styles.posts1}>BADGES</div>
            <div className={styles.k}>15</div>
          </div>
          <div className={styles.carpediemvirgoImNotContainer}>
            <p className={styles.carpediemvirgo}>Carpediem/Virgo</p>
            <p className={styles.carpediemvirgo}>&nbsp;</p>
            <p
              className={styles.carpediemvirgo}
            >{`I’m not a mind reader, but I can tell what `}</p>
            <p className={styles.carpediemvirgo}>&nbsp;</p>
            <p className={styles.carpediemvirgo}>you’re thinking.</p>
          </div>
          {isFOLLOWINGOVERLAYOpen == false && (
          <button
            className={styles.followButton}
            autoFocus
            onClick={openFOLLOWINGOVERLAY}
          >
            <div className={styles.text}>FOLLOW</div>
          </button>
            )}
          {isFOLLOWINGOVERLAYOpen == true && (
          <button
            className={styles.followButton}
            autoFocus
            onClick={closeFOLLOWINGOVERLAY}
          >
            <div className={styles.text}>FOLLOWING</div>
          </button>
            )}
          <div className={styles.postfilter}>
            <button className={styles.recent}>
              <div className={styles.recent1}>RECENT</div>
            </button>
            <button className={styles.recent}>
              <div className={styles.recent1}>TOP</div>
            </button>
            <button className={styles.recent}>
              <div className={styles.recent1}>MERCH POST</div>
            </button>
          </div>
          <button className={styles.diary}>DIARY</button>
          <button className={styles.badges2}>BADGES</button>
          <img
            className={styles.diaryrowdownIcon}
            alt=""
            src="/diaryrowdown.svg"
          />
          <img className={styles.diaryrowupIcon} alt="" src="/diaryrowup.svg" />
          <div className={styles.mutuals}>
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
              className={styles.verified2Icon1}
              alt=""
              src="/verified-2@2x.png"
            />
          </div>
          <img className={styles.badgesIcon} alt="" src="/badges.svg" />
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

export default UserProfile;
