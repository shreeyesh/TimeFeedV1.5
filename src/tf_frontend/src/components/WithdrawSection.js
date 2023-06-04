import LikesContainer from "./LikesContainer";
import styles from "./WithdrawSection.module.css";
const WithdrawSection = () => {
  return (
    <section className={styles.cta7}>
      <div className={styles.cta}>
        <div className={styles.bgMask}>
          <div className={styles.bg} />
          <img className={styles.bgMaskChild} alt="" src="/vector-1.svg" />
          <img className={styles.bgMaskItem} alt="" src="/withdrawTIme.svg" />
        </div>
        <div className={styles.withdrawtime}>
          <div className={styles.withdrawcta}>
            <div className={styles.withdrawTimeWrapper}>
              <b className={styles.withdrawTime}>Withdraw $Time</b>
            </div>
            <div className={styles.joinOurMailing}>
              Enter the amount of $TIME you want to withdraw, withdrawal of 1
              $TIME reduces one minute from your post.
            </div>
            <button className={styles.button} autoFocus>
              <button className={styles.withdraw}>Withdraw</button>
            </button>
          </div>
          <div className={styles.withdrawdata}>
            <div className={styles.frameParent}>
              <div className={styles.parent}>
                <LikesContainer
                  itemId="/line@2x.png"
                  itemStatus="704"
                  likesCount="Likes"
                />
                <LikesContainer
                  itemId="/line1.svg"
                  itemStatus="403"
                  likesCount="$Time Left"
                  propObjectFit="unset"
                  propTextAlign="left"
                />
              </div>
              <div className={styles.wrapper}>
                <LikesContainer
                  itemId="/line1.svg"
                  itemStatus="301"
                  likesCount="Dislikes"
                  propObjectFit="unset"
                  propTextAlign="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawSection;
