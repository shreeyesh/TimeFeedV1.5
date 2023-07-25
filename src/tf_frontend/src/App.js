import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import I8 from "./pages/I8";
import HomePage from "./pages/HomePage";
import ViewPost from "./pages/ViewPost";
import UserProfile from "./pages/UserProfile";
import PostCardAsset from "./pages/PostCardAsset";
import I4 from "./pages/I4";
import I5 from "./pages/I5";
import I6 from "./pages/I6";
import I7 from "./pages/I7";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/view-post":
        title = "";
        metaDescription = "";
        break;
      case "/userprofile":
        title = "";
        metaDescription = "";
        break;
      case "/postcardasset":
        title = "";
        metaDescription = "";
        break;
      case "/i4":
        title = "";
        metaDescription = "";
        break;
      case "/i5":
        title = "";
        metaDescription = "";
        break;
      case "/i6":
        title = "";
        metaDescription = "";
        break;
      case "/i7":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/view-post/:postId/:pictureId" element={<ViewPost />} />
      <Route path="/userprofile/:caller" element={<UserProfile />} />
      <Route path="/postcardasset" element={<PostCardAsset />} />
      <Route path="/i4" element={<I4 />} />
      <Route path="/i5" element={<I5 />} />
      <Route path="/i6" element={<I6 />} />
      <Route path="/i7" element={<I7 />} />
    </Routes>
  );
}
export default App;
