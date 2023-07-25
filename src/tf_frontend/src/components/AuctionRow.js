import React, { useState, useEffect, useCallback } from 'react';
import Auctions1 from "./Auctions1";
import styles from "./AuctionRow.module.css";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor,HttpAgent } from "@dfinity/agent";
import SearchResultPopup from './SearchResultPopup';


// 711,72,651,621
const AuctionRow = ({ handleButtonClick: toggleRecentPosts , searchTerm, refresh}) => {
  const [post, setPost] = useState(null); // Initialize post as null
  const [posts, setPosts] = useState(Array(5).fill(null)); // Initialize an array of 11 null posts
  const [allPosts,setAllPosts] = useState(null)
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

//   const postsDummy = [
//     {title: "Loading...", creator: "Loading...", timer: "Loading...", downvotes: "Loading..."},
//     {title: "Loading...", creator: "Loading...", timer: "Loading...", downvotes: "Loading..."},
// ]


  const [showRecent, setShowRecent] = useState(false);

    const handleButtonClick = () => {
      console.log("Toggling posts");
      setShowRecent(!showRecent);
      toggleRecentPosts(); // Instead of calling setShowRecent(!showRecent);
    }
    
    useEffect(() => {
      fetchPostCount();  
      const timerId = setInterval(() => {
        fetchPostCount();
      }, 5 * 1000); // 5 seconds in milliseconds
    
      // Clean up function
      return () => clearInterval(timerId);
    }, []); 
    
    // Modify the fetchPostCount function to call fetchAllPosts if the post count has increased
    const fetchPostCount = async () => {
      try {
        const response = await canister.get_post_count();
        const newPostCount = Number(response); // Convert BigInt to Number
        console.log("Post count:", newPostCount);
        
        if (newPostCount > postCount) {
          setPostCount(newPostCount); // Update the post count state
          fetchAllPosts(); // Fetch new posts if the post count has increased
        }
        else {
          return;
        }
      } catch (error) {
        console.error("Error fetching post count:", error);
      }
    };
    

    const fetchAllPosts = async () => {
      try {
        const allPostsData = await canister.get_all_posts();
        const allPostsTemp = allPostsData.map((post, index) => ({...post, pictureId: index}));
        console.log("All posts here:", allPostsTemp);
        fetchUsernames(allPostsTemp);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    


    const fetchUsernames = async (allPostsTemp) => {
      const promises = allPostsTemp.map(async (post) => {
        if (post && post.creator && post.creator !== "Loading...") {
          const creatorUsername = await canister.getUsername( {caller : post.creator });
          return creatorUsername && creatorUsername.length ? creatorUsername : "Anonymous";
        } else {
          console.error(`Post ${post.id} does not have a creator.`);
          return "Anonymous";
        }
      });
    
      const usernames = await Promise.all(promises);
    
      const updatedPosts = allPostsTemp.map((post, index) => {
        return {
          ...post,
          creatorUsername: usernames[index],
        };
      });
    
      setAllPosts(updatedPosts); // Update state here
      console.log("All posts:", updatedPosts);
      setLoading(false); 
    // };
    

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

};

useEffect(() => {
  fetchAllPosts();
}, []);



// useEffect(() => {
//   // fetchAllPosts initially
//   fetchAllPosts();
//   // Set up timer to fetch posts every 20 minutes
//   const timerId = setInterval(() => {
//     fetchAllPosts();
//   }, 20 * 60 * 1000); // 20 minutes in milliseconds

//   // Clean up function
//   return () => clearInterval(timerId);
// }, []); 



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
  
  // useEffect(() => {
  //   // fetchAllPosts();
  //   const intervalId = setInterval(fetchAllPosts, 5000); // fetch every 5 seconds
  //    // cleanup function
  // return () => clearInterval(intervalId);
  // }, [postCount]);  // Add postCount as a dependency

  return (
    <div className={styles.auctionsParent}>
      <SearchResultPopup filteredPosts={filteredPosts} isOpen={isPopupOpen} />
      <button className={styles.toggle} onClick={handleButtonClick}>
        {showRecent ? 'TOP' : 'RECENT'}
      </button>
      {loading ? (
        <div className={styles.loader}>Loading posts...</div>
      ) : (
        showRecent ? (
          recentPosts.map((post, index) => (
            post !== null && post.title && post.title.trim() !== "" && post.content && post.content.trim() !== "" && (
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
                  caller={post.creator}
                  creator={post.creatorUsername || "anon"} 
                />
              </div>
            )
          ))
        ) : (
          posts.map((post, index) => (
            post !== null && post.title && post.title.trim() !== "" && post.content && post.content.trim() !== "" && (
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
                  caller={post.creator}
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
