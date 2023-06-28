import { useCallback,useState } from "react";
import AuctionRow from "./AuctionRow";
import Auctions1 from "./Auctions1";
import styles from "./FeaturedPostsContainer.module.css";
const FeaturedPostsContainer = ({searchTerm}) => {
  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const [refresh, setRefresh] = useState(false); // add this state

  // Function to refresh posts
  const refreshPosts = async () => {
    console.log("Refreshing posts");
    setRefresh(prevRefresh => !prevRefresh); // toggle refresh state whenever this function is called
  };

  const [showRecent, setShowRecent] = useState(false);

  const handleButtonClick = useCallback(() => {
    setShowRecent(prevShowRecent => {
        console.log("Toggled  :", !prevShowRecent);
        return !prevShowRecent;
    });
}, []);
console.log("Search term:", searchTerm);

  return (
    <div className={styles.desktop1}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup} data-scroll-to="frameContainer1">
            <button className={styles.seeAll} onClick={onButton2Click}>See All</button>
          <div className={styles.button} >
          </div>
        </div>
        <div className={styles.frameContainer}>
        <AuctionRow handleButtonClick={handleButtonClick} refresh={refresh} searchTerm={searchTerm}/>
          <div className={styles.auctionsParent}>
            <div className={styles.auctions}>
             <Auctions1         
                        postPicture={`/image-562@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
            </div>
            <Auctions1         
                        postPicture={`/image-58@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-57@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-60@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
          </div>
          <div className={styles.auctionsGroup}>
          <Auctions1         
                        postPicture={`/image-64@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-63@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-62@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
            <Auctions1         
                        postPicture={`/image-65@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
          </div>
          <div className={styles.auctionsGroup}>
          <Auctions1         
                        postPicture={`/image-711@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-72@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-651@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
                    <Auctions1         
                        postPicture={`/image-621@2x.png`} 
                        mutualpfp1="/image-2912@2x.png"
                        mutualpfp2="/image-2913@2x.png"
                        mutualpfp3="/image-2914@2x.png"
                        mutualpfp4="/image-2915@2x.png"
                        mutualpfp5="/image-2916@2x.png"
                        timerValue={"100"}
                        heading={"Formation of USE"}
                        description={"I feel like formation of United States of..."}
                        // desc2={post.desc2 || "Europe led by Germany is needed..."}
                        category={"Politics"}
                    />
          </div>
        </div>
      </div>
            <button className={styles.featuredPosts}>Featured Posts</button>
      <button className={styles.vuesaxlineararrowRight}>
        <div className={styles.arrowRight}>
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
          <button className={styles.vuesaxlinearrefresh}>
            <img className={styles.refreshIcon} onClick={refreshPosts} alt="refresh" src="/refresh.svg" />
          </button>
          <img className={styles.vectorIcon1} alt="" />
        </div>
      </button>
    </div>
  );
};

export default FeaturedPostsContainer;
