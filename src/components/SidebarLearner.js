import React from 'react';
// import '../styling/Sidebar.css';


import { Link } from "react-router-dom";

const SidebarLearner = ({ handleSectionClick, nobilityHubOpen, setNobilityHubOpen, channelsOpen, setChannelsOpen  }) => {
  return (
    <div className="learners-sidebar">
      {/* Nobility Hub Section */}
      <div
        className="learners-nobility-hub"
        onClick={() => handleSectionClick("nobilityHub")}
      >
        <div className="learners-hub-label">
          <span
            className="dropdown-toggle"
            onClick={() => setNobilityHubOpen(!nobilityHubOpen)}
          >
            {nobilityHubOpen ? "-" : "+"}
          </span>{" "}
          <i className="uil uil-estate"></i>
          Nobility Hub
        </div>
        {nobilityHubOpen && (
          <div className="learners-hub-dropdown">
            <ul>
              <li>
                <Link to="/CanvasHome">Canvas</Link>
              </li>
              <li>
                <Link to="/Overall">Overall</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Channels Section */}
      <div
        className="learners-channels-section"
        onClick={() => handleSectionClick("channels")}
      >
        <div className="learners-channels-label">
          <span
            className="dropdown-toggle"
            onClick={() => setChannelsOpen(!channelsOpen)}
          >
            {channelsOpen ? "-" : "+"}
          </span>{" "}
          <i className="uil uil-chat"></i>
          Channels
        </div>
        {channelsOpen && (
          <div className="learners-channels-dropdown">
            <ul>
              <li>Off-Topic</li>
              <li> SDF-FT06-Bravo</li>
              <li>
                <i className="uil uil-align-justify"></i> Town Square
              </li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};

export default SidebarLearner;
