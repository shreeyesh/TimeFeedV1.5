import React, { useCallback } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";

const SearchResultPopup = ({ filteredPosts, isOpen }) => {

    const navigate = useNavigate();
    const onsearch = useCallback((postId, pictureId) => {
        console.log("onsearch");
        navigate(`/view-post/${postId}/${pictureId}`);
    }, [navigate]);

    console.log("filteredPosts in pop : ",filteredPosts);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div style={{
            position: "absolute",
            top: "145px",
            left: "560px",
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '1em',
            zIndex: 1000,
        }}>
            {filteredPosts.map(post => (
                 <div 
                 key={post.id} 
                 onClick={() => onsearch(post.id, post.pictureId)} 
                 style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'space-between', 
                     cursor: 'pointer', 
                     width: '350px',
                     padding: '10px',
                     border: '1px solid #ccc',
                     marginBottom: '10px'
                 }}>
                 <img src={`/image-${45 + post.pictureId}@2x.png`} style={{ width: '50px', height: '50px' }}/>
                 <div>
                     <div>{post.title}</div>
                     <div>Category: {post.category}</div>
                 </div>
             </div>
            ))}
        </div>,
        document.body
    );
};

export default SearchResultPopup;
