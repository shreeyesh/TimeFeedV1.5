import styles from "./RankContainer.module.css";
const RankContainer = ({
  playerName,
  playerScore,
  playerImageUrl,
  playerScoreDifference,
  playerRoundNumber,
  playerImageId,
  playerName2,
  playerScore2,
  playerName3,
  playerImageId2,
  playerName4,
  playerScore2Difference,
}) => {
  return (
    <div className={styles.rankrow}>
      <div className={styles.userrank}>
        <b className={styles.b}>{playerName}</b>
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img
              className={styles.image29Icon}
              alt=""
              loading="eager"
              src={playerScore}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{playerImageUrl}</div>
            <div className={styles.descriptionParent}>
              <div className={styles.description}>Best Run</div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>15m 24s</div>
              </div>
            </div>
          </div>
          <img
            className={styles.verified1Icon}
            alt=""
            src="/verified-1@2x.png"
          />
        </div>
        <div className={styles.info1}>
          <div className={styles.label1}>+ 45,23%</div>
          <div className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.description}>{playerScoreDifference}</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
      </div>
      <div className={styles.userrank}>
        <b className={styles.b}>{playerRoundNumber}</b>
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src={playerImageId} />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{playerName2}</div>
            <div className={styles.descriptionParent}>
              <div className={styles.description}>Best Run</div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>15m 24s</div>
              </div>
            </div>
          </div>
          <img
            className={styles.verified1Icon}
            alt=""
            src="/verified-1@2x.png"
          />
        </div>
        <div className={styles.info1}>
          <div className={styles.label1}>+ 45,23%</div>
          <div className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.description}>{playerScore2}</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
      </div>
      <div className={styles.userrank}>
        <b className={styles.b}>{playerName3}</b>
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src={playerImageId2} />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{playerName4}</div>
            <div className={styles.descriptionParent}>
              <div className={styles.description}>Best Run</div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>15m 24s</div>
              </div>
            </div>
          </div>
          <img
            className={styles.verified1Icon}
            alt=""
            src="/verified-1@2x.png"
          />
        </div>
        <div className={styles.info1}>
          <div className={styles.label1}>+ 45,23%</div>
          <div className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.description}>{playerScore2Difference}</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
      </div>
    </div>
  );
};

export default RankContainer;
