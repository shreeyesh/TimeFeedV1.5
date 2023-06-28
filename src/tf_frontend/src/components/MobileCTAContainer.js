import { useCallback } from "react";
import styles from "./MobileCTAContainer.module.css";
const MobileCTAContainer = () => {
  const onDownloadBadgeAppStoreBadClick = useCallback(() => {
    window.open(
      "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAiA8OmdBhAgEiwAShr40_H9ceIl6gs0t6_Bf07j8qQPi3LqjeaiOz9bL_Ha5u61LSwm9hlMLRoCPyMQAvD_BwE&gclsrc=aw.ds&pli=1"
    );
  }, []);

  return (
    <div className={styles.cta9}>
      <div className={styles.content}>
        <div className={styles.ctaMessage}>
          <div className={styles.sectionHeading}>
            <div className={styles.ctaMessage}>
              <div className={styles.sectionTitle}>Enjoy from your mobile</div>
            </div>
            <div className={styles.description}>
              Download the app to never miss out on amazing battles, TimeFeed is
              available on both Android and iOS.
              Built using Internet Computer.
              Welcome to the future of social media.
              Welcome to TimeFeed.
            </div>
          </div>
        </div>
        <div className={styles.getTheApp}>
          <div className={styles.getTheApp1}>Get the App soon on</div>
          <div className={styles.badges}>
            <button className={styles.downloadBadgeGooglePlayB}>
              <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
            </button>
            <button
              className={styles.downloadBadgeGooglePlayB}
              onClick={onDownloadBadgeAppStoreBadClick}
            >
              <img className={styles.layer2Icon} alt="" src="/group1.svg" />
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.phoneMockup1}
        alt=""
        src="/phone-mockup-1@2x.png"
      />
      <img
        className={styles.phoneMockup2}
        alt=""
        src="/phone-mockup-1@2x.png"
      />
    </div>
  );
};

export default MobileCTAContainer;
