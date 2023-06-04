import TextBox from "./TextBox";
import styles from "./PostFormSelects.module.css";
import { useState } from "react";
// const mongoose=require('mongoose')

// mongoose.connect("mongodb://localhost:27017/createPost")
// .then(()=>{
// console.log("connected to db")
// })
// .catch(()=>{
// console.log("connection failed to db")
// })
function PostFormSelects(props) {
  const {
    headingBoxValue,setHeadingBoxValue,textBoxValue,setTextBoxValue, categoryValue, setCategoryValue
  } = props;


  const [categoryDropdownRequired, setCategoryDropdownRequired] = useState(
    false
  );

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    setCategoryValue(categoryValue);
  };



  return (
    <div className={styles.postform}>
      <div className={styles.subHeading}>POST</div>
      <select
        className={styles.categorydropdown}
        required={categoryDropdownRequired}
        onChange={handleCategoryChange}
        value={categoryValue}
      >
        <option value="1">Art</option>
        <option value="2">Business</option>
        <option value="3">Comedy</option>
        <option value="4">Politics</option>
        <option value="5">Movies</option>
        <option value="6">Songs</option>
        <option value="7">Travel</option>
      </select>
      <input
        className={styles.headingbox}
        type="text"
        placeholder="Heading"
        onChange={(e)=>{
          setHeadingBoxValue(e.target.value)}}
        value={headingBoxValue}
      />
      <TextBox textBoxValue={textBoxValue} 
          setTextBoxValue={setTextBoxValue}  />
    </div>
  );
};

export default PostFormSelects;
