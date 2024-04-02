import { useState } from "react";
import Home from "/assets/home.png";
import Popular from "/assets/fire.png";
import All from "/assets/graph.png";
import react from "/assets/react.png";
import add from "/assets/add.png";
import movies from "/assets/movies.png";
import "./Leftbar.scss";
import web from "/assets/web.png"

export default function Leftbar() {
  const [communitiesOpen, setCommunitiesOpen] = useState(true);
  const [resourcesOpen, setResourcesOpen] = useState(true);

  const toggleCommunities = () => {
    setCommunitiesOpen(!communitiesOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Home} alt="" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src={Popular} alt="" />
            <span>Popular</span>
          </div>
          <div className="item">
            <img src={All} alt="" />
            <span>All</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="dropdown">
            <span className="dropdown-text" onClick={toggleCommunities}>
              communities
            </span>
            <div
              className={`dropdown-content ${communitiesOpen ? "open" : ""}`}
            >
              <div className="item">
                <img src={add} alt="" />
                <span>create community</span>
              </div>
              <div className="item">
                <img src={react} alt="" />
                <span>k/react-devs</span>
              </div>
              <div className="item">
                <img src={web} alt="" />
                <span>k/frontendsimplified</span>
              </div>
              <div className="item">
                <img src={movies} alt="" />
                <span>k/mvoies</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="dropdown">
            <span className="dropdown-text" onClick={toggleResources}>
              resources
            </span>
            <div
              className={`dropdown-content ${resourcesOpen ? "open" : ""}`}
            >
              <div className="item">
                <img src={add} alt="" />
                <span>create community</span>
              </div>
              <div className="item">
                <img src={react} alt="" />
                <span>k/react-devs</span>
              </div>
              <div className="item">
                <img src={All} alt="" />
                <span>k/frontendsimplified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
