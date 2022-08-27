import React from "react";
import HomeDrawer from "./home-drawer/home-drawer";
import HomeCharts from "./home-charts/home-charts";
import HomeCards from "./home-cards/home-cards";
import HomeHeader from "./home-header/home-header";
import HomeBanner from "./home-banner/home-banner";

function HomeView() {
  return (
    <div className="homeView">
      <HomeHeader />
      <HomeDrawer />
      <HomeCards />
      <HomeBanner />
      <HomeCharts />
    </div>
  );
};

export default HomeView;
