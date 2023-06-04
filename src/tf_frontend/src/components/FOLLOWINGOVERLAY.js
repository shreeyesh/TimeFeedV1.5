import styles from "./FOLLOWINGOVERLAY.module.css";
const FOLLOWINGOVERLAY = ({ onClose }) => {
  return (
    <div className={styles.followingOverlay}>
      <div className={styles.text}>FOLLOWING</div>
    </div>
  );
};

export default FOLLOWINGOVERLAY;
