import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Auctions1 from "./Auctions1";
import AuctionContainer from "./AuctionContainer";
import Auctions from "./Auctions";
import styles from "./AuctionRow.module.css";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
// import { canisterId } from "@dfinity/candid";
import { Actor,HttpAgent } from "@dfinity/agent";
// const fs = require('fs');

// import { canisterName } from '../../dfx-generated/main.mo';
// import { idlFactory , canisterId } from "@dfinity/candid";
// src/tf_frontend/node_modules/tf_backend.did.js
// import declarations from 
// import { maketfActor } from "../service/actorDeploy.js";
const AuctionRow = () => {
  const [content, setContent] = useState("");
  const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
  const agent = new HttpAgent({ host: "https://ic0.app" });
  // const agent = new HttpAgent({ host: "http://localhost:34915"});
  const canister = Actor.createActor(canisterIdlFactory, {
    agent,
    canisterId,
  });
  
  const fetchPostDetails = async (postId) => {
    console.log("Canister:", canister);
    try {
      const postDetails = await canister.get_post(BigInt(postId));
      console.log("Post details:", postDetails);
      setContent(postDetails.content);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  useEffect(() => {
    const postId = 0; // Replace with the desired post ID
    fetchPostDetails(postId);
  }, []);

  
  return (
    <div className={styles.auctionsParent} >
      <Auctions1
        postPicture="/image-49@2x.png"
        mutualpfp1="/image-2912@2x.png"
        mutualpfp2="/image-2913@2x.png"
        mutualpfp3="/image-2914@2x.png"
        mutualpfp4="/image-2915@2x.png"
        mutualpfp5="/image-2916@2x.png"
        timerValue="05:38:40"
        // heading={post ? post.title : ""}
        // description={content ? post.content : "Loading..."} /* Display the content if available, otherwise show "Loading..." */
        desc2=" Europe led by Germany is needed..."
        gainTime="1:28"
      />
      <Link className={styles.auctions} to="/view-post">
        <AuctionContainer
          imageDimensions="/image-76@2x.png"
          imageIds="/blurText1@2x.png"
          imageDimensionIds="/group-34290.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.abortionAGrowingDebateParent}>
              <div className={styles.abortionAGrowing}>
                Abortion: A Growing Debate
              </div>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-2917@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                {/* {post.content} */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.timeGainedParent}>
            <div className={styles.timeGained}>Time Gained</div>
            <div className={styles.div}>1:28</div>
          </div>
        </div>
      </Link>
      <Auctions
        heading="Climate Change: A Global Crisis"
        description="Climate change is a major environmental challenge .."
        gainTimeValue="1:28"
        timerValue="05:38:40"
      />
      <div className={styles.auctions1}>
        <div className={styles.auctions2}>
          <img className={styles.image45Icon} alt="" src="/image-45@2x.png" />
          <div className={styles.profileParent}>
            <div className={styles.profile}>
              <img
                className={styles.image29Icon1}
                alt=""
                src="/image-2912@2x.png"
              />
            </div>
            <div className={styles.profile1}>
              <img
                className={styles.image29Icon1}
                alt=""
                src="/image-2913@2x.png"
              />
            </div>
            <div className={styles.profile2}>
              <img
                className={styles.image29Icon1}
                alt=""
                src="/image-2914@2x.png"
              />
            </div>
            <div className={styles.profile3}>
              <img
                className={styles.image29Icon1}
                alt=""
                src="/image-2915@2x.png"
              />
            </div>
            <div className={styles.profile4}>
              <img
                className={styles.image29Icon1}
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
            <img className={styles.frameChild} alt="" src="/blurText4@2x.png" />
            <div className={styles.iconlyboldgraphParent}>
              <img
                className={styles.iconlyboldgraph}
                alt=""
                src="/iconlyboldgraph.svg"
              />
              <div className={styles.div1}>05:38:40</div>
            </div>
          </div>
          <img className={styles.auctionsChild} alt="" src="/group-34289.svg" />
        </div>
        <div className={styles.auctionsInner}>
          <div className={styles.frameGroup}>
            <div className={styles.abortionAGrowingDebateParent}>
              <div className={styles.abortionAGrowing}>
                Immigration: A Divisive Issue
              </div>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-2917@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description1}>
                  Immigration is a highly contentious issue in many countries...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timeGainedGroup}>
          <div className={styles.timeGained}>Time Gained</div>
          <div className={styles.div}>1:28</div>
        </div>
      </div>
    </div>
  );
};

export default AuctionRow;