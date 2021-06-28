import React from 'react';
import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featured_title">Revenue</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,451</span>
          <span className="money_rate">
            -11.5 <ArrowDownward className="featuredIcon negetive" />{" "}
          </span>
        </div>
        <span className="featured_sub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featured_title">Sales</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,451</span>
          <span className="money_rate">
            -11.5 <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>
        <span className="featured_sub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featured_title">Cost</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,451</span>
          <span className="money_rate">
            -11.5 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featured_sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;