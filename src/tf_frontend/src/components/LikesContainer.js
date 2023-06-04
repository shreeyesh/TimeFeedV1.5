import { useMemo } from "react";
import styles from "./LikesContainer.module.css";
const LikesContainer = ({
  itemId,
  itemStatus,
  likesCount,
  propObjectFit,
  propTextAlign,
}) => {
  const lineIconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const labelStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.div}>
      <img
        className={styles.lineIcon}
        alt=""
        src={itemId}
        style={lineIconStyle}
      />
      <div className={styles.details}>
        <b className={styles.number}>{itemStatus}</b>
        <div className={styles.label} style={labelStyle}>
          {likesCount}
        </div>
      </div>
    </div>
  );
};

export default LikesContainer;
