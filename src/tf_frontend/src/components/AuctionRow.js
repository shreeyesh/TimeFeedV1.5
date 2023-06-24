import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Auctions1 from "./Auctions1";
// import AuctionContainer from "./AuctionContainer";
// import Auctions from "./Auctions";
import styles from "./AuctionRow.module.css";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
// import { canisterId } from "@dfinity/candid";
import { Actor,HttpAgent } from "@dfinity/agent";

const AuctionRow = () => {
  const [content, setContent] = useState("");
  const [post, setPost] = useState(null); // Initialize post as null
  const [posts, setPosts] = useState(Array(5).fill(null)); // Initialize an array of 11 null posts
  const [postId, setPostId] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [downvotes, setDownvotes] = useState(0);
  const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
  // const agent = new HttpAgent({ host: "https://ic0.app" });
  const agent = new HttpAgent({ host: "http://127.0.0.1:4943/" });
  agent.fetchRootKey();
  const canister = Actor.createActor(canisterIdlFactory, {
    agent,
    canisterId,
  });

  // Function to get total posts count
  const fetchPostCount = async () => {
    try {
      const response = await canister.get_post_count();
      const postCount = response; 
      console.log("Post count:", postCount);
      setPostCount(postCount); // Update the post state
    } catch (error) {
      console.error("Error fetching post count:", error);
      return {}; // Default value in case of an error
    }
  };
  
  const fetchPostDetails = async (postId) => {
    try {
      const response = await canister.get_post(BigInt(postId));
      const post = response[0]; // get the first item of the response
      console.log("Post details:", post);
      setPost(post); // Update the post state
      let timer = await post.timer;
      console.log("Post timer:", timer);
      setTimer(timer);
      let content = await post.content;
      console.log("content:", content);
      setContent(content);
      console.log("title:", await post.title);
      console.log("id:", await post.id);
    } catch (error) {
      console.error("Error fetching post details:", error);
      return {}; // Default value in case of an error

    }
  };

  const fetchAllPosts = async () => {
    try {
      const promises = [];
      for (let i = postCount - BigInt(1); i >= 0; i--) {
        promises.push(canister.get_post(BigInt(i)));
      }
      const postsData = await Promise.all(promises);
      const posts = postsData.map((response) => response[0]);
      // Sort the posts in descending order of timer value
      posts.sort((postA, postB) => (postB.timer > postA.timer) ? 1 : ((postB.timer < postA.timer) ? -1 : 0));
      console.log("All posts:", posts);
      setPosts(posts);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };
  
  
  useEffect(() => {
    fetchPostCount();
  }, []);
  
  useEffect(() => {
    fetchAllPosts();
    const intervalId = setInterval(fetchAllPosts, 5000); // fetch every 5 seconds
     // cleanup function
  return () => clearInterval(intervalId);
  }, [postCount]);  // Add postCount as a dependency

  // useEffect(() => {
  //   fetchPostCount().then(() => {
  //   const postId =BigInt(postCount)-BigInt(1) // Replace with the desired post ID
  //   // const postId = 0; // Replace with the desired post ID
  //   fetchPostDetails(postId);
  //   });
  // }, []);
  
  return (
    <div className={styles.auctionsParent} >
{/*  All posts mapping */}
{posts.map((post, index) => (
  <Auctions1
      key={post.id}
      postId={post ? post.id : null} // Pass postId as prop
        postPicture="/image-45@2x.png"
        mutualpfp1="/image-2912@2x.png"
        mutualpfp2="/image-2913@2x.png"
        mutualpfp3="/image-2914@2x.png"
        mutualpfp4="/image-2915@2x.png"
        mutualpfp5="/image-2916@2x.png"
        timerValue={post ? post.timer.toString() : "100"}
        heading={post ? post.title : "Loading..."}
        description={post ? post.content : "Loading..."}
        desc2={post ? post.desc2 : "Europe led by Germany is needed..."}
        gainTime={"1:28"}
      />
      ))} 
    </div>
  );
};

export default AuctionRow;
