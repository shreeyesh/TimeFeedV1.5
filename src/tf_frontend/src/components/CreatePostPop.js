import { useState, useCallback, useEffect } from "react";
import MintNftContainer from "./MintNftContainer";
import PostSuccessPop from "./PostSuccessPop";
import PortalPopup from "./PortalPopup";
import PostFormSelects from "./PostFormSelects";
import { useNavigate } from "react-router-dom";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor, HttpAgent } from "@dfinity/agent";
import styles from "./CreatePostPop.module.css";
const CreatePostPop = ({ onClose }) => {
  const [headingBoxValue, setHeadingBoxValue] = useState("");
  const [textBoxValue, setTextBoxValue] = useState("");
  const [categoryValue, setCategoryValue] = useState(0);
  // const [descBoxValue, setDescBoxValue] = useState("");
  const [isPostSuccessPopPopupOpen, setPostSuccessPopPopupOpen] =
    useState(false);
  const navigate = useNavigate();
  const openPostSuccessPopPopup = useCallback(() => {
    setPostSuccessPopPopupOpen(true);
  }, []);

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


  // For IC integration
  const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
    // const agent = new HttpAgent();
    const agent = new HttpAgent({ host: "https://ic0.app" });
    const canister = Actor.createActor(canisterIdlFactory, {
      agent,
      canisterId,
    });

    console.log("Canister:", canister);
    console.log("headingBoxValue : ",headingBoxValue)
    console.log("textBoxValue : ",textBoxValue)
    console.log("categoryValue : ",categoryValue)
    console.log("category : ",getCategoryName(categoryValue))

    // Post function using the canister
    const post = async (title,content,category) => {
      // const hello = hello.toString();
      try {
        const image = "https://www.example.com/image.jpg";
        const result = await canister.create_post("title","content",image.toString(),"category");
        console.log("Post result:", result);
      } catch (error) {
        console.error("Error posting:", error);
      }
    };
    // console.log("Post function:", post);
    // image = "https://www.example.com/image.jpg";
    // console.log("result: ",result)

    useEffect(() => {
      const content = textBoxValue;
      const title = headingBoxValue;
      const category = getCategoryName(categoryValue);
      // const image = "Hello world!";
      post(title,content, category);
    }, []);

  return (
    <>
      <div className={styles.createpostpop}>
        <div className={styles.sectionhomepage}>
          <MintNftContainer />
          <button
            className={styles.postButton}
            autoFocus
            onClick={()=>{
              openPostSuccessPopPopup}}
          >
            <div className={styles.text}>POST</div>
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
