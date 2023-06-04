import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostPop from "./CreatePostPop";
import PortalPopup from "./PortalPopup";
import styles from "./Header1.module.css";
const Header1 = () => {
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

  const onAccountCircleBlack24dp2Click = useCallback(() => {
    navigate("/userprofile");
  }, [navigate]);

  return (
    <>
      <nav className={styles.navbar} data-scroll-to="navbar">
        <div className={styles.timefeedLowResolutionLogoBParent}>
          <button className={styles.timefeedLowResolutionLogoB} />
          <input
            className={styles.frameChild}
            type="text"
            placeholder="Search posts, topics and accounts"
          />
          <button className={styles.darkMode}>
            <img className={styles.darkModeChild} alt="" src="/ellipse-1.svg" />
          </button>
          <div className={styles.menus}>
            <button className={styles.explore}>Explore</button>
            <button className={styles.explore}>Earn</button>
            <button className={styles.explore} onClick={onTradeClick}>
              Trade
            </button>
            <button className={styles.explore} onClick={openCreatePostPopPopup}>
              Post
            </button>
          </div>
          <div className={styles.icon}>
            <button
              className={styles.accountCircleBlack24dp2}
              onClick={onAccountCircleBlack24dp2Click}
            >
              <img className={styles.groupIcon} alt="" />
              <img className={styles.groupIcon1} alt="" src="/group.svg" />
            </button>
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src="/account-balance-wallet-black-24dp-5-1.svg"
            />
          </div>
        </div>
      </nav>
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

export default Header1;
