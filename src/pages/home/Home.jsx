import React from 'react';
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart';
import { userData } from "../../dummyData";
import WidgetsSm from '../../components/widgetsSm/WidgetsSm';
import WidgetsLg from '../../components/widgetsLg/WidgetsLg';
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetsSm/>
        <WidgetsLg/>
      </div>
    </div>
  );
};

export default Home;