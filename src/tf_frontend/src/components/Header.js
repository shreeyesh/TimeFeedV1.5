import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostPop from "./CreatePostPop";
import PortalPopup from "./PortalPopup";
import styles from "./Header1.module.css";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor,HttpAgent } from "@dfinity/agent";



  const Header = ({ setSearchTerm }) => {
  const navigate = useNavigate();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const [isWalletPopPopupOpen, setWalletPopPopupOpen] = useState(false);
  const [username, setUsername] = useState(null); // Add a new state for username
  const [isEditingUsername, setIsEditingUsername] = useState(false); // State for editing username
  const [principal, setPrincipal] = useState(null); // State for editing username
  let canisterId
  switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
   canisterId = "bh5vh-sqaaa-aaaap-abekq-cai";
  break;
    default:
  canisterId = "bd3sg-teaaa-aaaaa-qaaba-cai";
  break;
  }
  let agent;
  console.log("env : ",process.env.REACT_APP_NODE_ENV);

switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
        agent = new HttpAgent({ host: "https://ic0.app" }); // mainnet
        break;
    default:
        agent = new HttpAgent({host : "http://127.0.0.1:8000"}); // local
        // agent = new HttpAgent({ host: "http://127.0.0.1:4943/" }); // local
        break;
}

  agent.fetchRootKey();
  const canister = Actor.createActor(canisterIdlFactory, {
    agent,
    canisterId,
  });


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

  console.log("canister : ",canister);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check login status on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      const authClient = await AuthClient.create();
      const isAuthenticated = await authClient.isAuthenticated();
      if (isAuthenticated) {
        const identity = authClient.getIdentity();
        const principal = Principal.fromText(identity.getPrincipal().toString());
        const usernameFromPrincipal = await canister.getUsername({ caller: principal });
        setPrincipal(principal);
        setUsername(usernameFromPrincipal);
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  const login = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const principal = Principal.fromText(identity.getPrincipal().toString());
        console.log("principal : ",principal);
        let usernameFromPrincipal = await canister.getUsername({ caller: principal }); 
        setPrincipal(principal);
        console.log("usernameFromPrincipal : ",usernameFromPrincipal);
        if (!usernameFromPrincipal || usernameFromPrincipal.length === 0) {
          // If the username is null or an empty array, it means that the user is logging in for the first time
          // So you should show a popup to ask the user to set a username
          const newUsername = "Anonymous";
          await canister.setUsername( principal ,newUsername);
          usernameFromPrincipal = await canister.getUsername({ caller: principal }); 
          setUsername(newUsername);
          setIsEditingUsername(false);
        }
        setUsername(usernameFromPrincipal);
        setIsLoggedIn(true); // set login status after successful login
      },
    });
  };
  

   const handleEditUsername = () => {
    // Switch to editing mode
    setIsEditingUsername(true);
  };

  const handleUsernameChange = async (newUsername) => {
    // Make sure that the username is not empty
    if (newUsername.trim() !== "") {
      // Here you should save the username back to the principal
      await canister.setUsername( principal ,newUsername);
      // Then update the state with the new username
      setUsername(newUsername);
      setIsEditingUsername(false);
    } else {
      alert("Username must contain at least one character.");
    }
  };

const logout = async () => {
  const authClient = await AuthClient.create();
  await authClient.logout();
  setWalletPopPopupOpen(false);
  console.log("logged out");
  setIsLoggedIn(false); // set login status after successful logout
  // The user is now logged out
};

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
  
  {isLoggedIn ? (
    <div className={styles.menus}>
      <button className={styles.accountBalanceWalletBlack2Icon} onClick={logout}>Log Out</button>
      {isEditingUsername ? (
        <div className={styles.username}>
        <input className={styles.usernameInput}
          type="text"
          defaultValue={username}
          onBlur={(e) => handleUsernameChange(e.target.value)}
          minLength={1}
        />
        </div>
      ) : (
        <div className={styles.username}>
        <div className={styles.username} onClick={handleEditUsername}>{username || 'edit username'}</div>
        <button onClick={handleEditUsername}>Edit</button>
        </div>
      )}
    </div>
  ) : (
    <button onClick={onWalletClick} >
      <img
        className={styles.accountBalanceWalletBlack2Icon}
        alt=""
        src="/account-balance-wallet-black-24dp-5-1.svg"
      />
    </button>
  )}
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
