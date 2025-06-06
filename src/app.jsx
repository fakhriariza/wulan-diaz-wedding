import React from "react";
import { createRoot } from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
import DoaComponent from "./DoaComponent";
import GroomBridesComponent from "./GroomBridesComponent";
import TimeDataComponent from "./TimeDateComponent";
import ResepsiAkadComponent from "./ResepsiAkadComponent";
import { getMissionData } from "./dummy-data/mission-data";
import QrComponent from "./QrComponent";
import OurStoryComponent from "./OurStoryComponent";
import PotraitOfUseComponent from "./PotraitOfUseComponent";

// Define MyComponent first
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missionData: getMissionData(),
    };
  }

  render() {
    const { missionData } = this.state;

    return (
      <div className="render_about">
        <HeaderComponent />
        <DoaComponent />
        <GroomBridesComponent />
        <OurStoryComponent data={missionData} />
        <TimeDataComponent />
        <ResepsiAkadComponent />
        <QrComponent />
        {/* <PotraitOfUseComponent data={missionData} /> */}
      </div>
    );
  }
}

// Then render it
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

export default MyComponent;
