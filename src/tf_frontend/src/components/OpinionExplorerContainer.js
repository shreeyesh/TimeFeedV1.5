import { useState,useCallback, useEffect } from "react";
import styles from "./OpinionExplorerContainer.module.css";
import { useNavigate } from "react-router-dom";
import CreatePostPop from "./CreatePostPop";
import PortalPopup from "./PortalPopup";

const OpinionExplorerContainer = () => {

  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);


  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }
    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onExploreTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onExploreMoreAboutClick = useCallback(() => {
    window.open(
      "https://timefeed.notion.site/abdc61bc18d24190b22f5f40adeb5327?v=1a403d1fae724e87bf7c2a0beb65b901"
    );
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.exploreAndFightForOpinionsParent}>
        <div className={styles.exploreAndFight}>
          Explore and fight for opinions
        </div>
        <div className={styles.joinOurMailing}>
          Join our mailing list to stay in the loop with our newest events
          happening.
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          autoFocus
          onClick={onButtonClick}
          data-animate-on-scroll
        >
          <div className={styles.explore} onClick={onExploreTextClick}>
            Explore
          </div>
        </button>
        <button className={styles.button1} onClick={openCreatePostPopPopup} autoFocus data-animate-on-scroll>
          <div className={styles.create}>Post</div>
        </button>
      </div>
      <div className={styles.cta}>
        <img
          className={styles.playCircleFilledBlack24dpIcon}
          alt=""
          src="/play-circle-filled-black-24dp-1-1.svg"
        />
        <button
          className={styles.exploreMoreAbout}
          onClick={onExploreMoreAboutClick}
        >
          Explore More about TimeFeed
        </button>
      </div>
      {isCreatePostPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCreatePostPopPopup}
        >
          <CreatePostPop onClose={closeCreatePostPopPopup} />
        </PortalPopup>
      )}
    </div>
  );
};

export default OpinionExplorerContainer;
