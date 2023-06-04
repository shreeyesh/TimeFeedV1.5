import { useMemo } from "react";
import styles from "./Header.module.css";
const Header = ({
  productIds,
  navbarJustifyContent,
  navbarPosition,
  navbarTop,
  navbarLeft,
  onTradeClick,
  openCreatePostPopPopup,
}) => {
  const navStyle = useMemo(() => {
    return {
      justifyContent: navbarJustifyContent,
      position: navbarPosition,
      top: navbarTop,
      left: navbarLeft,
    };
  }, [navbarJustifyContent, navbarPosition, navbarTop, navbarLeft]);

  return (
    <div className={styles.nav} style={navStyle}>
      <nav className={styles.navbar}>
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
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src={productIds}
            />
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src="/account-balance-wallet-black-24dp-5-1.svg"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
