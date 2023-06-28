import React, { useState, useEffect, useCallback } from 'react';
import Auctions1 from "./Auctions1";
import styles from "./AuctionRow.module.css";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor,HttpAgent } from "@dfinity/agent";
import { Link } from 'react-router-dom';
import SearchResultPopup from './SearchResultPopup';


// 711,72,651,621
const AuctionRow = ({ handleButtonClick: toggleRecentPosts , searchTerm, refresh}) => {
  const [post, setPost] = useState(null); // Initialize post as null
  const [posts, setPosts] = useState(Array(5).fill(null)); // Initialize an array of 11 null posts
  const [recentPosts, setRecentPosts] = useState(Array(5).fill(null)); // Initialize an array of 11 null posts
  const [postId, setPostId] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [downvotes, setDownvotes] = useState(0);
  let canisterId
  switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
   canisterId = "bh5vh-sqaaa-aaaap-abekq-cai";
  break;
    default:
  canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
  break;
  }
  // const agent = new HttpAgent({ host: "https://ic0.app" });
  // const agent = new HttpAgent({ host: "http://127.0.0.1:4943/" });
  let agent;
  console.log("env : ",process.env.REACT_APP_NODE_ENV);

switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
        agent = new HttpAgent({ host: "https://ic0.app" }); // mainnet
        break;
    default:
        agent = new HttpAgent({ host: "http://127.0.0.1:4943/" }); // local
        break;
}

  agent.fetchRootKey();
  const canister = Actor.createActor(canisterIdlFactory, {
    agent,
    canisterId,
  });

  const [showRecent, setShowRecent] = useState(false);

    const handleButtonClick = () => {
      console.log("Toggling posts");
      setShowRecent(!showRecent);
      toggleRecentPosts(); // Instead of calling setShowRecent(!showRecent);
    }
    
    useEffect(() => {
      const fetchData = async () => {
        await fetchPostCount();
        console.log("Post count post refresh:", postCount);
        await fetchAllPosts();
        console.log("Posts post refresh:", posts);
      };
    
      fetchData();
    }, [refresh]); // depends on refresh state, will run fetchData whenever refresh changes

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

  const fetchAllPosts = async () => {
    try {
      const promises = [];
      if (postCount !== null && postCount !== undefined) {
      for (let i = postCount - BigInt(1); i >= 0; i--) {
        promises.push(canister.get_post(BigInt(i)));
      }
    }
      const postsData = await Promise.all(promises);

      // Add the pictureId here:
      const allPosts = postsData.map((response, index) => {
        const post = response[0];
        return {...post, pictureId: index};
      });

      // const allPosts = postsData.map((response) => response[0]);

      // Sort posts by id in descending order and set recentPosts
      const sortedByIdPosts = [...allPosts];
      sortedByIdPosts.sort((postA, postB) => (postB.id > postA.id) ? 1 : ((postB.id < postA.id) ? -1 : 0));
      setRecentPosts(sortedByIdPosts);
      console.log("Recent posts:", sortedByIdPosts);

      // Sort the posts in descending order of timer value and set posts
      const sortedByTimerPosts = [...allPosts];
      sortedByTimerPosts.sort((postA, postB) => (postB.timer > postA.timer) ? 1 : ((postB.timer < postA.timer) ? -1 : 0));
      setPosts(sortedByTimerPosts);
      console.log("All posts:", sortedByTimerPosts);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }

  };

      // const { searchTerm } = useContext(SearchContext);
      useEffect(() => {
        if (searchTerm && searchTerm.trim() !== '') {
            setPopupOpen(true);
        } else {
            setPopupOpen(false);
        }
    }, [searchTerm]);

      // Filter posts for search term
      const filteredPosts = posts.filter((post) =>
      post &&
      post.title &&
      post.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
    );   
    console.log("Filtered posts:", filteredPosts);  
    console.log("Search term:", searchTerm);
  
  
  
  useEffect(() => {
    fetchPostCount();
  }, []);
  
  useEffect(() => {
    fetchAllPosts();
    const intervalId = setInterval(fetchAllPosts, 5000); // fetch every 5 seconds
     // cleanup function
  return () => clearInterval(intervalId);
  }, [postCount]);  // Add postCount as a dependency

  return (
    <div className={styles.auctionsParent}>
    <SearchResultPopup filteredPosts={filteredPosts} isOpen={isPopupOpen} />
    <button className={styles.toggle} onClick={handleButtonClick}>
      {showRecent ? 'TOP' : 'RECENT'}
    </button>
    {showRecent ? (
      recentPosts.map((post, index) => (
        <div key={post.id}>
          {/* <Link to={`/view-post/${post.id}/${post.pictureId}`}> */}
            <Auctions1
              postId={post.id}
              pictureId={post.pictureId}
              postPicture={`/image-${45 + post.pictureId}@2x.png`}
              mutualpfp1="/image-2912@2x.png"
              mutualpfp2="/image-2913@2x.png"
              mutualpfp3="/image-2914@2x.png"
              mutualpfp4="/image-2915@2x.png"
              mutualpfp5="/image-2916@2x.png"
              timerValue={post.timer.toString()}
              heading={post.title}
              description={post.content}
              category={post.category}
            />
          {/* </Link> */}
        </div>
      ))
    ) : (
      posts.map((post, index) => (
        post !== null ? (
          <div key={post.id}>
            {/* <Link to={`/view-post/${post.id}/${post.pictureId}`}> */}
              <Auctions1
                postId={post.id}
                pictureId={post.pictureId}
                postPicture={`/image-${45 + post.pictureId}@2x.png`}
                mutualpfp1="/image-2912@2x.png"
                mutualpfp2="/image-2913@2x.png"
                mutualpfp3="/image-2914@2x.png"
                mutualpfp4="/image-2915@2x.png"
                mutualpfp5="/image-2916@2x.png"
                timerValue={post.timer.toString()}
                heading={post.title}
                description={post.content}
                category={post.category}
              />
            {/* </Link> */}
          </div>
        ) : null
      ))
    )}
  </div>
  );

};

export default AuctionRow;
