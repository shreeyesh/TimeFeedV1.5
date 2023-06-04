import styles from "./TextBox.module.css";
function TextBox(props) {
  const {
    textBoxValue,setTextBoxValue
  } = props;
  return <textarea className={styles.textbox} placeholder="Text" onChange={(e)=>{
    setTextBoxValue(e.target.value)}}
  value={textBoxValue} />;
};

export default TextBox;
