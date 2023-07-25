import { useState, useCallback, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate,useParams } from "react-router-dom";
import CreatePostPop from "../components/CreatePostPop";
import PortalPopup from "../components/PortalPopup";
import { idlFactory as canisterIdlFactory } from "../tf_backend.did.js";
import { Actor,HttpAgent } from "@dfinity/agent";
import Header from "../components/Header";
import Auctions1 from "../components/Auctions1";
import USEFormContainer from "../components/USEFormContainer";
import styles from "./ViewPost.module.css";
import UserCard from "../components/UserCard";
import Comments from "../components/comments";
const ViewPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null); // Initialize post as null
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [timer, setTimer] = useState("");
  const [category, setCategory] = useState("");
  const [creatorUsername, setCreatorUsername] = useState("");
  const [replies, setReplies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [identity, setIdentity] = useState(null); // State for editing username
  const [principal, setPrincipal] = useState(null); // State for editing username
  const [username, setUsername] = useState(null); // Add a new state for username
  const [pcaller,setPcaller] = useState(null);


  let { postId, pictureId } = useParams();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const [comment, setComment] = useState("");

  // CHeck for username
//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const authClient = await AuthClient.create();
//       const isAuthenticated = await authClient.isAuthenticated();
//       if (isAuthenticated) {
//         const identity = authClient.getIdentity();
//         setIdentity(identity);
//         const principal = Principal.fromText(identity.getPrincipal().toString());
//         const usernameFromPrincipal = await canister.getUsername( {caller : principal} );
//         setPrincipal(principal);
//         setUsername(usernameFromPrincipal);
//         console.log("usernameFromPrincipal : ",usernameFromPrincipal)
//         setIsLoggedIn(true);
//       }
//       else {
//         setIsLoggedIn(false);
//       }
//     };
//     const interval = setInterval(checkLoginStatus, 5000); // 5000 milliseconds = 5 seconds

//   // clear interval on component unmount
//   return () => clearInterval(interval);
// }, []);


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
        agent = new HttpAgent({ host: "https://ic0.app" , identity:identity}); // mainnet
        break;
    default:
        agent = new HttpAgent({host : "http://127.0.0.1:8000"}); // local
        // agent = new HttpAgent({ host: "http://127.0.0.1:4943/" }); // local
        break;
}  // const agent = new HttpAgent({ host: "https://ic0.app" });
  agent.fetchRootKey();
  const canister = Actor.createActor(canisterIdlFactory, {
    agent,
    canisterId,
  });

  // Function to fetch post details
  const fetchPostDetails = async (postId) => {
    try {
      // const postId = 0;
      const response = await canister.get_post(BigInt(postId));
      const post = response[0]
      console.log("Post:", post);
      if (post) {
        const creatorUsername = await canister.getUsername({ caller: post.creator });
        console.log("creatorUsername:", creatorUsername[0]);
        setHeading(post.title);
        setDescription(post.content);
        setCategory(post.category);
        setTimer(post.timer);
        setPost(post);
        setPcaller(post.creator);
        console.log("post.creator", post.creator)
        console.log("pcaller", pcaller)
        setCreatorUsername(creatorUsername[0]);
      }
      // setPost(post);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect (() => {
    fetchPostDetails(postId);
  }, [postId]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    console.log("comment : ",comment);

  };

// Get replies for a post
// const fetchReplies = async (postId) => {
//   try {
//     const fetchedReplies = await canister.get_replies(BigInt(Number(postId)));
//     console.log("fetched replies:", fetchedReplies);

//     let replies = [];

//     for (const reply of fetchedReplies) {
//       console.log("reply 1:", reply);
//       let i = 0;
//       for (i = 0; i < reply.length; i++) {
//         const r = reply[i];
//         console.log("r",r)
//         console.log("reply 1 creator:", r[1].creator);
//         const username = await canister.getUsername({ caller: r[1].creator });
//         reply[i][1].creator = username[0];
//         console.log("username of reply:", username);
//         replies.push(reply[i]); // Pushing the updated reply to the replies array
//       }
//     }

//     console.log("resolved replies:", replies);
//     setReplies(replies);
//   } catch (error) {
//     console.error("Error fetching replies:", error);
//   }
// };

// Get replies for a post
const fetchReplies = async (postId) => {
  try {
    const fetchedReplies = await canister.get_replies(BigInt(Number(postId)));
    console.log("fetched replies:", fetchedReplies);

    let repliesPromises = fetchedReplies.map(async (reply) => {
      let replyWithUsername = await Promise.all(reply.map(async (r) => {
        const username = await canister.getUsername({ caller: r[1].creator });
        r[1].creator = username[0];
        console.log("username of reply:", username);
        return r; // Returning the updated reply
      }));

      return replyWithUsername;
    });

    let replies = await Promise.all(repliesPromises);

    console.log("resolved replies:", replies[0]);
    setReplies(replies[0]);
  } catch (error) {
    console.error("Error fetching replies:", error);
  }
};


useEffect(() => {
  fetchReplies(postId);
}, [postId]);



// useEffect(() => {
//   console.log('Replies Updated: ', replies);
// }, [replies]);





const handleCommentSubmit = async (event) => {
  event.preventDefault();
  if (!isLoggedIn) {
    console.log("User must be logged in to reply to a post.", isLoggedIn);
    alert("User must be logged in to reply to a post.");
    return;
  }
  console.log("here");

  // Create an optimistic reply
  const optimisticReply = {
    content: comment,
    creator: username, // Use the username from state
    // Add other required properties with default or actual values
  };

  // Add the optimistic reply to state
  setReplies((prevReplies) => [...prevReplies, optimisticReply]);

  // Now send the reply to server
  try {
    // if (isAuthenticated) {
    // const identity = authClient.getIdentity();
    // setIdentity(identity);
    const reply = await canister.createReply(BigInt(Number(postId)), comment);
    console.log("reply : ",reply);
    // }
    // On successful server response, refresh the replies
    console.log("about to fetch")
    fetchReplies(postId);
    console.log("fetched")
    alert('Reply submitted successfully.');
  } catch (error) {
    // On error, remove the optimistic reply and show error
    setReplies((prevReplies) => prevReplies.filter((r) => r !== optimisticReply));
    console.error(error);
    alert('Failed to submit reply.');
  }
};



  const onTradeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  

  return (
    <>
      <div className={styles.viewPost}>
        <div className={styles.viewPostInner}>
          <div className={styles.frameParent}>
            <div className={styles.desktop1}>
              <div className={styles.frameGroup}>
                <div />
                <div className={styles.frameWrapper}>
                  <div className={styles.auctionsWrapper}>
                  {post && (
                  <Auctions1         
                        key={post.id}
                        postId={post ? post.id : null} // Pass postId as prop
                        postPicture={`/image-${45 + Number(pictureId)}@2x.png`} 
                        // postPicture={`/timefeedlowresolutionlogoblackonwhitebackground3.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={timer.toString()}
                        heading={heading}
                        description={description}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={category}
                        caller={post.creator}
                        creator={creatorUsername} 
                    />
                    )}
                  </div>
                </div>
              </div>
              <UserCard  creatorUsername={creatorUsername} pcaller={pcaller}/>
              <button className={styles.vuesaxlineararrowRight}>
                <div className={styles.arrowRight}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                  />
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/arrowright1.svg"
                  />
                  <button className={styles.vuesaxlinearrefresh}>
                    <img
                      className={styles.refreshIcon}
                      alt=""
                      src="/refresh.svg"
                    />
                  </button>
                  <img className={styles.vectorIcon1} alt="" />
                </div>
              </button>
              <div className={styles.desktop1Child} />
              <Button
                className={styles.new}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >                                                
              </Button>
              <Button
                className={styles.trending}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >
                TRENDING
              </Button>
              <Button
                className={styles.related}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >{` RELATED `}</Button>
              <USEFormContainer
                imageIds="/image-553@2x.png"
                smallImageIds="/image-5110@2x.png"
                mediumImageIds="/image-5110@2x.png"
                smallImageIds2="/image-5110@2x.png"
              />
              <USEFormContainer
                imageIds="/image-563@2x.png"
                smallImageIds="/image-524@2x.png"
                mediumImageIds="/image-518@2x.png"
                smallImageIds2="/image-519@2x.png"
                propLeft="0px"
              />
              <div className={styles.image54Parent}>
                <img
                  className={styles.image54Icon}
                  alt=""
                  src="/image-543@2x.png"
                />
                <img
                  className={styles.image55Icon}
                  alt=""
                  src="/image-558@2x.png"
                />
                <img
                  className={styles.image52Icon}
                  alt=""
                  src="/image-5210@2x.png"
                />
                <img
                  className={styles.image51Icon}
                  alt=""
                  src="/image-558@2x.png"
                />
              </div>
              <div className={styles.desktop1Item} />
              <div className={styles.desktop1Inner} />
              <div className={styles.frameParent2}>
                <div className={styles.image29Parent}>
                  <img
                    className={styles.image29Icon11}
                    alt=""
                    src="/image-2927@2x.png"
                  />
                  <div className={styles.inputleftaddon}>
                    <p
                      className={styles.alexRodrigues}
                    >{creatorUsername} </p>
                    <p className={styles.iFeelLike}>@{creatorUsername} </p>
                  </div>
                  <div
                    className={styles.textPlaceholder}
                  >{post &&(post.content)}</div>
                </div>
                {/* <button className={styles.vectorParent}> */}
                 <div className={styles.vectorIcon2}>
                  <img
                    alt=""
                    src="/vector1.svg"
                  />
                  <p className={styles.likes} >100</p>
                  </div>
                  <button className={styles.vuesaxlinearheartSlash}>
                    <div className={styles.heartSlash}>
                      <div className={styles.heartSlash}>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group2.svg"
                        />
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector2.svg"
                        />
                        <p className={styles.dislikes} >100</p>
                        <img className={styles.vectorIcon4} alt="" />
                      </div>
                    </div>
                  </button>
                {/* </button> */}
              </div>
              <div className={styles.component19}>
  <div className={styles.commentMargin}>
  {replies.map((reply, index) => (
   reply && reply.length > 1 && reply[1] !== undefined ? (
    <Comments className={styles.commentMargin}
      key={index}
      content={reply[1].content}
      author={{name: `${reply[1].creator}`, username: `@${reply[1].creator}`}}
      imgSrc="/image-413@2x.png"
      handleIconClick={() => console.log('Icon clicked!')}
    />
  ) : null
))}
  </div>
  <div className={styles.replyWrapper}>
    <Comments 
      content="Cultural diversity important too"
      author={{name: 'Riley Smith', username: '@RileyFeeds'}}
      imgSrc="/image-412@2x.png"
      handleIconClick={() => console.log('Icon clicked!')}
    />
  </div>
  <div className={styles.commentWrapper}>
    <Comments 
      content="Cultural diversity important too"
      author={{name: 'Ryan Smith', username: '@RyanFeeds'}}
      imgSrc="/image-4113@2x.png"
      handleIconClick={() => console.log('Icon clicked!')}
    />
  </div>
  <div className={styles.commentWrapper}>
      <Comments
        className={styles.comment}
        content="All countries must be on board."
        author={{ name: "John Doe", username: "@johndoe" }}
        imgSrc="/image-414@2x.png"
        handleIconClick={() => console.log("Icon clicked!")}
      />
            </div>

      <div className={styles.replyWrapper}>
        <Comments
          className={styles.reply}
          content="Cultural diversity important too"
          author={{ name: "Ryan Smith", username: "@RyanFeeds" }}
          imgSrc="/image-4112@2x.png"
          handleIconClick={() => console.log("Icon clicked!")}
        />
    </div>
    <div className={styles.commentWrapper}>
      <Comments
        className={styles.comment}
        content="No I dont think so"
        author={{ name: "Jane Smith", username: "@janesmith" }}
        imgSrc="/image-415@2x.png"
        handleIconClick={() => console.log("Icon clicked!")}
      />
        </div>
      <div className={styles.replyWrapper}>
        <Comments
          className={styles.reply}
          content="Interesting concept, evaluate well."
          author={{ name: "Sarah Davis", username: "@sarahdavis" }}
          imgSrc="/image-417@2x.png"
          handleIconClick={() => console.log("Icon clicked!")}
        />
    </div>
    <div className={styles.commentWrapper}>
      <Comments
        className={styles.comment}
        content="Brexit was perfect"
        author={{ name: "Jane Smith", username: "@janesmith" }}
        imgSrc="/image-415@2x.png"
        handleIconClick={() => console.log("Icon clicked!")}
      />
        </div>
      <div className={styles.replyWrapper}>
        <Comments
          className={styles.reply}
          content="Interesting concept, evaluate well."
          author={{ name: "Sarah Davis", username: "@sarahdavis" }}
          imgSrc="/image-4111@2x.png"
          handleIconClick={() => console.log("Icon clicked!")}
        />
    </div>
    <div className={styles.commentWrapper}>
      <Comments
        className={styles.comment}
        content="No I dont think so"
        author={{ name: "Jane Smith", username: "@janesmith" }}
        imgSrc="/image-419@2x.png"
        handleIconClick={() => console.log("Icon clicked!")}
      />
        </div>
      <div className={styles.replyWrapper}>
        <Comments
          className={styles.reply}
          content="Interesting concept, evaluate well."
          author={{ name: "Serena Lewis", username: "@serenaL" }}
          imgSrc="/image-418@2x.png"
          handleIconClick={() => console.log("Icon clicked!")}
        />
    </div>
    <div className={styles.commentWrapper}>
      <Comments
        className={styles.comment}
        content="Yeah right"
        author={{ name: "Smith Steve", username: "@smithS" }}
        imgSrc="/image-416@2x.png"
        handleIconClick={() => console.log("Icon clicked!")}
      />
        </div>
      <div className={styles.replyWrapper}>
        <Comments
          className={styles.reply}
          content="Interesting concept, evaluate well."
          author={{ name: "Sarah Davis", username: "@sarahdavis" }}
          imgSrc="/image-417@2x.png"
          handleIconClick={() => console.log("Icon clicked!")}
        />
    </div>
    <div className={styles.commentWrapper}>
      <Comments
        className={styles.comment}
        content="No I dont think so"
        author={{ name: "Jane Smith", username: "@janesmith" }}
        imgSrc="/image-415@2x.png"
        handleIconClick={() => console.log("Icon clicked!")}
      />
        </div>
</div>

            
              <div className={styles.viewMore}>--View More--</div>
              <img
                className={styles.image56Icon1}
                alt=""
                src="/image-566@2x.png"
              />
              <img
                className={styles.verified1Icon2}
                alt=""
                src="/verified-1@2x.png"
              />
              <div className={styles.group481543defaultParent}>
                <form className={styles.group481543default} method="post">
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="/image-413@2x.png"
                  />
                  <p>{username}</p>
                  <textarea className={styles.textPlaceholder14} />
                  <svg data-testid="ArrowCircleRightIcon"></svg>
                  {/* <ArrowCircleRightIcon /> */}
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    // src="/vector13.svg" 
                    src="/arrowright.svg"
                    onClick={handleCommentSubmit}
                  />
                </form>
                <textarea
                  className={styles.textPlaceholder15}
                  placeholder="Comment Here"
                  // value={newComment}
                  onChange={handleCommentChange}                />
              </div>
              <div className={styles.vuesaxlineartetherUsdt}>
                <div className={styles.rectangleParent2}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/rectangle-6954@2x.png"
                  />
                  <button className={styles.rectangleButton} autoFocus />
                  <div className={styles.div2}>300,000</div>
                  <div className={styles.buyTime}>BUY $TIME</div>
                </div>
              </div>
              <img
                className={styles.vuesaxlineartetherUsdtIcon}
                alt=""
                src="/vuesaxlineartetherusdt.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUsername={setUsername} username={username} identity={identity} setIdentity={setIdentity}/>
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

export default ViewPost;
