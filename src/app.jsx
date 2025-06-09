// App.js
import React from "react";
import { createRoot } from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
import DoaComponent from "./DoaComponent";
import GroomBridesComponent from "./GroomBridesComponent";
import TimeDataComponent from "./TimeDateComponent";
import ResepsiAkadComponent from "./ResepsiAkadComponent";
import { getMissionData } from "./dummy-data/mission-data";
import { getWishData } from "./dummy-data/wish-data";
import QrComponent from "./QrComponent";
import OurStoryComponent from "./OurStoryComponent";
import PotraitOfUseComponent from "./PotraitOfUseComponent";
import axios from "axios";
import GiftComponent from "./GiftComponent";
import FilterComponent from "./FilterComponent";
import WishComponent from "./WishComponent";
import FinishComponent from "./FinishComponent";
import AudioPlayer from "./AudioPlayer";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      missionData: getMissionData(),
      isOpened: false,
      slug: this.getSlugFromUrl(),
      // guestData: null,
      // loading: true,
      wishData: getWishData(),
    };
  }
  handleOpenInvitation = () => {
    this.setState({ isOpened: true });
  };

  getSlugFromUrl = () => {
    const url = window.location.href;
    const match = url.match(/mengundang=([^&]+)/);
    console.log("slug match", match);
    return match ? decodeURIComponent(match[1]) : null;
  };

  componentDidMount() {
    const { slug } = this.state;

    if (!slug) return;

    axios
      .get(
        `https://doa-backend.my.id/invitation/api/wedding/v1/guests/slug/${slug}`
      )
      .then((response) => {
        this.setState({ guestData: response.data, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching guest data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { guestData, loading, isOpened } = this.state;
    if (loading) return <div>Loading...</div>;
    const { missionData } = this.state;
    const { wishData } = this.state;

    return (
      <div className="render_about">
        <HeaderComponent
          guestData={guestData}
          onOpen={this.handleOpenInvitation}
          isOpened={isOpened}
        />
        <AudioPlayer />
        {isOpened && (
          <div className="animate__animated animate__fadeIn animate__slow">
            <DoaComponent />
            <GroomBridesComponent />
            <OurStoryComponent data={getMissionData()} />
            <TimeDataComponent />
            <ResepsiAkadComponent />
            <QrComponent />
            <PotraitOfUseComponent data={missionData} />
            <GiftComponent />
            <FilterComponent />
            <WishComponent data={wishData} />
            <FinishComponent />
          </div>
        )}
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

export default MyComponent;
