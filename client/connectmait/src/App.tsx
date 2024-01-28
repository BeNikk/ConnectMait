import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { RecoilRoot } from "recoil";
import Home from "./components/Home";
import Comments from "./components/Comments";
import SearchPage from "./components/SearchPage";
import Notifications from "./components/Notifications";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/comment/:id" element={<Comments />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
        sss
      </RecoilRoot>
    </>
  );
}

export default App;
