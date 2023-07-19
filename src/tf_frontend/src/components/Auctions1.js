import { useNavigate } from "react-router-dom";
import styles from "./Auctions1.module.css";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor, HttpAgent } from "@dfinity/agent";
import React, { useState, useCallback, useEffect } from "react";

const Auctions1 = ({
  postPicture,
  mutualpfp1,
  mutualpfp2,
  mutualpfp3,
  mutualpfp4,
  mutualpfp5,
  timerValue,
  heading,
  description,
  desc2,
  category,
  postId,
  pictureId,
  creator = "Anonymous",  // set default value
}) => {

  const navigate = useNavigate();
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

   // New state variable for voting status
   const [voteStatus, setVoteStatus] = useState(null); // null - no vote, 1 - upvoted, -1 - downvoted
   // New state variable for timer
   const [timer, setTimer] = useState(timerValue); // Initialize with the prop timerValue
  
   const [Author, setAuthor] = useState(null);
  //  Function to open user profile
  const userProfileClick = useCallback(() => {
    console.log("Opening user profile");
    // history.push("/profile");
    navigate("/userprofile");
  }, [navigate]);


   // Function to handle upvote
   const handleUpvote = async (postId) => {
    try {
      // const postId = 0;
      await canister.upvote(BigInt(postId));
      console.log("Upvoted post with ID:", postId);
      // fetchPostDetails(postId);
      const upvote = await canister.get_upvotes(BigInt(postId));
      console.log("Upvotes:", upvote);
      const timer = await canister.get_timer(BigInt(postId));
      console.log("Timer:", timer);
       // Set the state variables
       setVoteStatus(1);
       setTimer(timer.toString());
    } catch (error) {
      console.error("Error upvoting post:", error);
    }
  };

  // Function to handle downvote
  const handleDownvote = async (postId) => {
    try {
      // const postId = 0;
      await canister.downvote(BigInt(postId));
      console.log("Downvoted post with ID:", postId);
      // fetchPostDetails(postId);
      const downvote = await canister.get_downvotes(BigInt(postId));
      console.log("Downvotes:", downvote);
      const timer = await canister.get_timer(BigInt(postId));
      console.log("Timer:", timer);
       // Set the state variables
       setVoteStatus(-1);
       setTimer(timer.toString());
    } catch (error) {
      console.error("Error downvoting post:", error);
    }
  };


  // const history = useHistory();
const onAuctionClick = useCallback(() => {
  console.log("Auction clicked");
  console.log("pic id:", pictureId);
  console.log("Auction clicked, navigating to", `/view-post/${postId}/${pictureId}`);
  navigate(`/view-post/${postId}/${pictureId}`);}, [navigate, postId, pictureId]);


  return (
    <div className={styles.auctions} >
      <div className={styles.auctions1} >
        <img className={styles.image49Icon} alt="" src={postPicture} onClick={onAuctionClick} />
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src={mutualpfp1} />
          </div>
          <div className={styles.profile1}>
            <img className={styles.image29Icon} alt="" src={mutualpfp2} />
          </div>
          <div className={styles.profile2}>
            <img className={styles.image29Icon} alt="" src={mutualpfp3} />
          </div>
          <div className={styles.profile3}>
            <img className={styles.image29Icon} alt="" src={mutualpfp4} />
          </div>
          <div className={styles.profile4}>
            <img className={styles.image29Icon} alt="" src={mutualpfp5} />
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="/verified-2@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src="/blurText@2x.png" />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src="/iconlyboldgraph.svg"
            />
            <div className={styles.div}>{timer}</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <button className={`${styles.frameItem} ${voteStatus === -1 ? styles.frameItemChecked : ''}`} disabled={voteStatus === -1}  onClick={() => handleDownvote(postId)} />
            <img
              className={styles.vuesaxlinearheartSlashIcon}
              alt=""
              src="/vuesaxlinearheartslash.svg"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <button  className={`${styles.frameInner} ${voteStatus === 1 ? styles.frameInnerchecked : ''}`}  onClick={() => handleUpvote(postId)}  / >
            <img
              className={styles.vuesaxboldheartIcon}
              alt=""
              src="/vuesaxboldheart.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.formationOfUseParent}>
            <div className={styles.formationOfUse} onClick={onAuctionClick}>{heading}</div>
            <div className={styles.userprofile}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-565@2x.png"
              onClick={userProfileClick}
              // src/tf_frontend/public/timefeedlowresolutionlogoblackonwhitebackground-2@2x.png
            />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>
                <p className={styles.iFeelLike}>{description}</p>
                <p className={styles.iFeelLike}>{desc2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timeGainedParent}>
          <div className={styles.timeGained} onClick={userProfileClick}>{creator}</div>
          <div className={styles.div1} >{category}</div>
        </div>
      </div>
    </div>
  );
};

export default Auctions1;
