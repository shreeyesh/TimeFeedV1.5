import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostPop from "./CreatePostPop";
import PortalPopup from "./PortalPopup";
import styles from "./Header1.module.css";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";


// const Header = ([setSearchTerm]) => {
  const Header = ({ setSearchTerm }) => {
  const navigate = useNavigate();
  // const SearchContext = React.createContext();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const [isWalletPopPopupOpen, setWalletPopPopupOpen] = useState(false);
  const [username, setUsername] = useState(null); // Add a new state for username
  const [isEditingUsername, setIsEditingUsername] = useState(false); // State for editing username



  const onTradeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const onExploreClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const onEarnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  const onAccountCircleBlack24dp2Click = useCallback(() => {
    // login();
    navigate("/userprofile");
  }, [navigate]);
  
  const onWalletClick = useCallback(() => {
    login();
    // check if identity is not null
    setWalletPopPopupOpen(true);
    // navigate("/userprofile");
  }, [navigate]);

  
  const login = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const principal = Principal.fromText(identity.getPrincipal().toString());
        // Assume that you have a function getUsername that gets the username from principal
        const usernameFromPrincipal = await yourCanisterClient.getUsername(principal);
        setUsername(usernameFromPrincipal);
      },
    });
  };

  const handleEditUsername = () => {
    // Switch to editing mode
    setIsEditingUsername(true);
  };

  const handleUsernameChange = (newUsername) => {
    // Here you should save the username back to the principal
    // Then update the state with the new username
    setUsername(newUsername);
    setIsEditingUsername(false);
  };



const logout = async () => {
  const authClient = await AuthClient.create();
  await authClient.logout();
  setWalletPopPopupOpen(false);
  console.log("logged out");
  // The user is now logged out
};


// const checkAuth = async () => {
//   const isAuthenticated = await authClient.isAuthenticated();
//   console.log(isAuthenticated);  // Outputs 'true' if the user is authenticated, 'false' otherwise
// };

  return (
    <>
      <nav className={styles.navbar} data-scroll-to="navbar">
        <div className={styles.timefeedLowResolutionLogoBParent} >
          <button className={styles.timefeedLowResolutionLogoB} onClick={onExploreClick} />
          {/* <SearchContext.Provider value={{ searchTerm, setSearchTerm }}> */}
          <input
            className={styles.frameChild}
            type="text"
            placeholder="Search posts, topics and accounts"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
            {/* </SearchContext.Provider> */}
          <button className={styles.darkMode}>
            <img className={styles.darkModeChild} alt="" src="/ellipse-1.svg" />
          </button>
          <div className={styles.menus}>
            <button className={styles.explore} onClick={onExploreClick}>Explore</button>
            <button className={styles.explore} onClick={onEarnClick}>Earn</button>
            <button className={styles.explore} onClick={onTradeClick}>
              Trade
            </button>
            <button className={styles.explore} onClick={openCreatePostPopPopup}>
              Post
            </button>
          </div>
          <div className={styles.icon}>
            <button
              // className={styles.accountCircleBlack24dp2}
              onClick={onAccountCircleBlack24dp2Click}
            >
               <img
            className={styles.notificationBingIcon}
            alt=""
            src="/notificationbing.svg"
          />
            </button>
            <button
              className={styles.accountCircleBlack24dp2}
              onClick={onAccountCircleBlack24dp2Click}
            >
              <img className={styles.groupIcon1} alt="" src="/group.svg" />
            </button>
            {isWalletPopPopupOpen == true && (
               <div>
                <button className={styles.accountBalanceWalletBlack2Icon} onClick={logout}>Log Out</button>
               {isEditingUsername ? (
                 <input
                   type="text"
                   defaultValue={username}
                   onBlur={(e) => handleUsernameChange(e.target.value)}
                 />
               ) : (
                 <div className={styles.username} onClick={handleEditUsername}>{username}</div>
               )}
              </div>
            )
}
            {isWalletPopPopupOpen == false && (
            <button onClick={onWalletClick} >
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src="/account-balance-wallet-black-24dp-5-1.svg"
            />
            </button>
            )
}
            
            {/* <button onClick={logout}>Log Out</button> */}

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

export default Header;
