import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { RecoilRoot } from "recoil";
import Home from "./components/Home";
import Comments from "./components/Comments";

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
          </Routes>
        </Router>
        sss
      </RecoilRoot>
    </>
  );
}

export default App;
