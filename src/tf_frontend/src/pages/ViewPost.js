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

  let { postId, pictureId } = useParams();
console.log("postId : ",postId);
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);

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
                        creator={creatorUsername} 
                    />
                    )}
                  </div>
                </div>
              </div>
              <UserCard  creatorUsername={creatorUsername}/>
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
              >                                                 NEW `}</Button>
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
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector1.svg"
                  />
                  <p className={styles.likes} >100</p>
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
  <div className={styles.commentWrapper}>
    <Comments 
      content="I can understand your sentiment, but unity doesn't always guarantee success."
      author={{name: 'Emily Wilson', username: '@emilywilson'}}
      imgSrc="/image-412@2x.png"
      handleIconClick={() => console.log('Icon clicked!')}
    />
  </div>
  <div className={styles.replyWrapper}>
    <Comments 
      content="Cultural diversity important too"
      author={{name: 'Ryan Smith', username: '@RyanFeeds'}}
      imgSrc="/image-413@2x.png"
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

              {/* <div className={styles.component19}>
              <Comments className={styles.comment}
                    content="I can understand your sentiment, but unity doesn't always guarantee success."
                    author={{name: 'Emily Wilson', username: '@emilywilson'}}
                    imgSrc="/image-412@2x.png"
                    handleIconClick={() => console.log('Icon clicked!')}
                />
               <div className={styles.comment}>
    <Comments className={styles.reply}
        content="Cultural diversity important too"
        author={{name: 'Ryan Smith', username: '@RyanFeeds'}}
        imgSrc="/image-413@2x.png"
        handleIconClick={() => console.log('Icon clicked!')}
    />
</div> 
                <div className={styles.property1variant3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-414@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder3}>
                      All countries must be on board.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant4}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-415@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder4}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector5.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash4.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant5}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-416@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder5}>
                      Don't rush without consideration.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon11}
                          alt=""
                          src="/image-417@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Christina Will</p>
                          <p className={styles.iFeelLike}>@ChristinaW</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder6}>
                      Interesting concept, evaluate well.
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector6.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash5.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.verified1Icon}
                    alt=""
                    src="/verified-1@2x.png"
                  />
                </div>
                <div className={styles.property1variant7}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-411@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder7}>
                      Potential drawbacks to consider.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant8}>
                  <div className={styles.frameParent9}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-418@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector7.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant9}>
                  <div className={styles.frameParent9}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-419@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector8.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash7.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.verified1Icon1}
                    alt=""
                    src="/verified-1@2x.png"
                  />
                </div>
                <div className={styles.property1variant10}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4110@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector9.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant11}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4111@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector10.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash9.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant12}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4112@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector11.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant13}>
                  <div className={styles.frameParent9}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image29Icon11}
                        alt=""
                        src="/image-4113@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector12.svg"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon2}
                        alt=""
                        src="/vuesaxlinearheartslash11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
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
                    src="/image-302@2x.png"
                  />
                  <textarea className={styles.textPlaceholder14} />
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector13.svg"
                  />
                </form>
                <textarea
                  className={styles.textPlaceholder15}
                  placeholder="Comment Here"
                />
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
      <Header/>
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
