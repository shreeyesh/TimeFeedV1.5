import { useState, useCallback, useEffect } from "react";
import MintNftContainer from "./MintNftContainer";
import PostSuccessPop from "./PostSuccessPop";
import PortalPopup from "./PortalPopup";
import PostFormSelects from "./PostFormSelects";
import { useNavigate } from "react-router-dom";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";
import styles from "./CreatePostPop.module.css";
const CreatePostPop = ({ onClose , isLoggedIn, }) => {
  const [headingBoxValue, setHeadingBoxValue] = useState("");
  const [textBoxValue, setTextBoxValue] = useState("");
  const [categoryValue, setCategoryValue] = useState(0);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null); // Add a new state for username
  const [principal, setPrincipal] = useState(null); // State for editing username
  const [identity, setIdentity] = useState(null); // State for editing username
  // const [descBoxValue, setDescBoxValue] = useState("");
  const [isPostSuccessPopPopupOpen, setPostSuccessPopPopupOpen] =
    useState(false);
  const navigate = useNavigate();
  console.log("isLoggedIn : ",isLoggedIn)
  const openPostSuccessPopPopup = useCallback(() => {
    if (!isLoggedIn) {
      console.log("User must be logged in to create a post.", isLoggedIn);
      alert("User must be logged in to create a post.");
      return;
    }
    if (headingBoxValue.trim().length < 1) {
      alert("Heading should have at least one character");
      return;
    }
    if (textBoxValue.trim().length < 1) {
      alert("Content should have at least one character");
      return;
    }
    setPostSuccessPopPopupOpen(true);
    console.log("headingBoxValue : ",headingBoxValue)
    console.log("textBoxValue : ",textBoxValue)
    console.log("categoryValue : ",categoryValue)

    const content = textBoxValue;
      const title = headingBoxValue;
      const category = getCategoryName(categoryValue);
      // const image = "Hello world!";
      let result = post(title,content, category);
      console.log("Post result:", result);

    // post(headingBoxValue,textBoxValue,categoryValue);
  }, [headingBoxValue, textBoxValue, categoryValue]);

  const closePostSuccessPopPopup = useCallback(() => {
    setPostSuccessPopPopupOpen(false);
  }, []);

  const onTradeClick = useCallback(() => {
    navigate("/sectionhomepage");
  }, [navigate]);

  // Get category name using category id
  const getCategoryName = (categoryValue) => {
    switch (categoryValue) {
      case "1": { return "Art"; }
      case "2": { return "Business"; }
      case "3": { return "Comedy"; }
      case "4": { return "Politics"; }
      case "5": { return "Movies"; }
      case "6": { return "Songs"; }
      case "7": { return "Travel"; }
      default: { return "Art"; }
    }
  };

       // CHeck for username
  useEffect(() => {
    const checkLoginStatus = async () => {
      const authClient = await AuthClient.create();
      const isAuthenticated = await authClient.isAuthenticated();
      if (isAuthenticated) {
        const identity = authClient.getIdentity();
        setIdentity(identity);
        const principal = Principal.fromText(identity.getPrincipal().toString());
        const usernameFromPrincipal = await canister.getUsername( {caller : principal} );
        setPrincipal(principal);
        setUsername(usernameFromPrincipal);
        console.log("usernameFromPrincipal : ",usernameFromPrincipal)
        // setIsLoggedIn(true);
      }
      else {
        // setIsLoggedIn(false);
      }
    };
    const interval = setInterval(checkLoginStatus, 5000); // 5000 milliseconds = 5 seconds

  // clear interval on component unmount
  return () => clearInterval(interval);
}, []);


  // For IC integration
  let canisterId
  switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
   canisterId = "bh5vh-sqaaa-aaaap-abekq-cai";
  break;
    default:
  canisterId = "bd3sg-teaaa-aaaaa-qaaba-cai";
  // canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
  break;
  }
  // const agent = new HttpAgent({ host: "https://ic0.app" });
  // const agent = new HttpAgent({ host: "http://127.0.0.1:4943/" });
  let agent;
  console.log("env : ",process.env.REACT_APP_NODE_ENV);

switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
        agent = new HttpAgent({ host: "https://ic0.app" ,identity: identity }); // mainnet
        break;
    default:
        agent = new HttpAgent({host : "http://127.0.0.1:8000",identity: identity}); // local
        // agent = new HttpAgent({ host: "http://127.0.0.1:4943/" }); // local
        break;
}

  agent.fetchRootKey();
  const canister = Actor.createActor(canisterIdlFactory, {
    agent,
    canisterId,
  });

    let categoryName = getCategoryName(categoryValue)
    // setCategory(categoryName);

    // Post function using the canister
    const post = async (title,content,category) => {
      // const hello = hello.toString();
      try {
        // const image = "https://www.example.com/image.jpg";
        const result = await canister.create_post(title,content,category);
        console.log("Post result:", result);
        let resultNumber = Number(result);
        console.log("resultNumber : ",resultNumber)
        const response = await canister.get_post(resultNumber);
        // const response = await canister.get_post(result); // Removed BigInt()
        console.log("Post response:", response);
        const p = response[0].creator
        console.log("p : ",p) 
        console.log("p matches",p==principal)
        const creator = Principal.fromUint8Array(p);
        console.log("creator matches ",creator==principal)
        console.log("creator : ",creator)
        const author = await canister.getUsername({ caller: p });
        console.log("username : ",author)
        setUsername(author);
      } catch (error) {
        console.error("Error posting:", error);
      }
    };

  return (
    <>
      <div className={styles.createpostpop}>
        <div className={styles.sectionhomepage}>
          <MintNftContainer />
          <button
            className={styles.postButton}
            autoFocus
            onClick={openPostSuccessPopPopup}

          >
            {/* <div className={styles.text}>{username}</div> */}
            <div className={styles.text}>POST</div>
          </button>
          <PostFormSelects
          headingBoxValue={headingBoxValue} 
          setHeadingBoxValue={setHeadingBoxValue}
          textBoxValue={textBoxValue} 
          setTextBoxValue={setTextBoxValue}
          categoryValue={categoryValue} 
          setCategoryValue={setCategoryValue}
          />
          <nav className={styles.navbar}>
            <div className={styles.timefeedLowResolutionLogoBParent}>
              <button className={styles.timefeedLowResolutionLogoB} />
              <input
                className={styles.frameChild}
                type="text"
                placeholder="Search posts, topics and accounts"
              />
              <button className={styles.darkMode}>
                <img
                  className={styles.darkModeChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
              </button>
              <div className={styles.menus}>
                <button className={styles.explore}>Explore</button>
                <button className={styles.explore}>Earn</button>
                <button className={styles.explore} onClick={onTradeClick}>
                  Trade
                </button>
                <button className={styles.explore}>Post</button>
              </div>
              <div className={styles.icon}>
                <img
                  className={styles.accountBalanceWalletBlack2Icon}
                  alt=""
                  src="/account-circle-black-24dp-2-1.svg"
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
      </div>
      {isPostSuccessPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePostSuccessPopPopup}
        >
          <PostSuccessPop onClose={closePostSuccessPopPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreatePostPop;
