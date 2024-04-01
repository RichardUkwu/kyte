import { Divider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/Profile/Profile";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Divider />
        <div className="layout-div">
          <Leftbar  />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />}/>
          <Route path="/profile/:id" element={<Profile />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
