import styles from "./FormationContainer.module.css";
const FormationContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.formationOfUseParent}>
          <div className={styles.formationOfUse}>Formation of USE</div>
          <img className={styles.image29Icon} alt="" src="/image-2917@2x.png" />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <p className={styles.iFeelLike}>
                I feel like formation of United States of
              </p>
              <p className={styles.iFeelLike}>
                {" "}
                Europe led by Germany is needed...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default FormationContainer;
