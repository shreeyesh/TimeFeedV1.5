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
  const [loading, setLoading] = useState(true);
  

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

  const postsDummy = {
    post : {title: "Loading...", creator: "Loading...", timer: "Loading...", downvotes: "Loading..."},
    post : {title: "Loading...", creator: "Loading...", timer: "Loading...", downvotes: "Loading..."},
  }

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

      const allPosts = postsData.map((response, index) => {
        if (response[0] === null) {
          console.log("Null post:", index);
          return{...postsDummy[0], pictureId: index};
        }
        const post = response[0];
        return {...post, pictureId: index, creatorUsername: "Loading..."};
      });

      // Fetch usernames right after getting the posts
      fetchUsernames(allPosts);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
};

const fetchUsernames = async (allPosts) => {
  const promises = allPosts.map(async (post) => {
    if (post !== null) {
      const creatorUsername = await canister.getUsername({ caller: post.creator });
      console.log(`Post ${post.id} has creator username: ${creatorUsername}`);
      return creatorUsername && creatorUsername.length ? creatorUsername : "Anonymous";
    } else {
      return "Anonymous";
    }
  });

  const usernames = await Promise.all(promises);

  const updatedPosts = allPosts.map((post, index) => {
    return {
      ...post,
      creatorUsername: usernames[index],
    };
  });

  // Sort posts by id in descending order and set recentPosts
  const sortedByIdPosts = [...updatedPosts];
  sortedByIdPosts.sort((postA, postB) => (postB.id > postA.id) ? 1 : ((postB.id < postA.id) ? -1 : 0));
  setRecentPosts(sortedByIdPosts);
  console.log("Recent posts:", sortedByIdPosts);

  // Sort the posts in descending order of timer value and set posts
  const sortedByTimerPosts = [...updatedPosts];
  sortedByTimerPosts.sort((postA, postB) => (postB.timer > postA.timer) ? 1 : ((postB.timer < postA.timer) ? -1 : 0));
  setPosts(sortedByTimerPosts);
  console.log("All posts:", sortedByTimerPosts);

  setLoading(false); // Set loading to false once all usernames are fetched
};



// UseEffect to fetch usernames
useEffect(() => {
  // fetchUsernames();
  // Set up timer to fetch usernames every 20 minutes
  const timerId = setInterval(() => {
    fetchUsernames();
  }, 20 * 60 * 1000); // 20 minutes in milliseconds

  // Clean up function
  return () => clearInterval(timerId);
}, []); 


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
  
  
  
  useEffect(() => {
    fetchPostCount();
  }, []);
  
  useEffect(() => {
    // fetchAllPosts();
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
      {loading ? (
        <div>Loading posts...</div>
      ) : (
        showRecent ? (
          recentPosts.map((post, index) => (
            post !== null && (
              <div key={post.id}>
                <Auctions1
                  post = {post}
                  postId={post.id}
                  pictureId={post.pictureId}
                  postPicture={`/image-${45 + post.pictureId}@2x.png`}
                  mutualpfp1="/image-2912@2x.png"
                  mutualpfp2="/image-2913@2x.png"
                  mutualpfp3="/image-2914@2x.png"
                  mutualpfp4="/image-2915@2x.png"
                  mutualpfp5="/image-2916@2x.png"
                  timerValue={post.timer ? post.timer.toString() : ''}
                  heading={post.title}
                  description={post.content}
                  category={post.category}
                  creator={post.creatorUsername || "anon"} 
                />
              </div>
            )
          ))
        ) : (
          posts.map((post, index) => (
            post !== null && (
              <div key={post.id}>
                <Auctions1
                  postId={post.id}
                  pictureId={post.pictureId}
                  postPicture={`/image-${45 + post.pictureId}@2x.png`}
                  mutualpfp1="/image-2912@2x.png"
                  mutualpfp2="/image-2913@2x.png"
                  mutualpfp3="/image-2914@2x.png"
                  mutualpfp4="/image-2915@2x.png"
                  mutualpfp5="/image-2916@2x.png"
                  timerValue={post.timer ? post.timer.toString() : ''}
                  heading={post.title}
                  description={post.content}
                  category={post.category}
                  creator={post.creatorUsername || "anon"} 
                />
              </div>
            )
          ))
        )
      )}
    </div>
  );
  

};

export default AuctionRow;
