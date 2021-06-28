import React from 'react';
import './WidgetsLg.css'
const WidgetsLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLg_btn " + type}>{ type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLg_title">
        Latest transactions
        <table className="widgetLg_tabel">
          <tr className="widgetLg_tr">
            <th className="widgetLg_th">Customer</th>
            <th className="widgetLg_th">Date</th>
            <th className="widgetLg_th">Amount</th>
            <th className="widgetLg_th">Status</th>
          </tr>
          <tr className="widgetLg_tr">
            <td className="widgetLg_User">
              <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" className="widgetLg_img" />
              <span className="widgetLg_name"> Nihar</span>
            </td>
            <td className="widgetLg_date">2 June 2021</td>
            <td className="widgetLg_amount">$136.00</td>
            <td className="widgetLg_status"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLg_tr">
            <td className="widgetLg_User">
              <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" className="widgetLg_img" />
              <span className="widgetLg_name"> Nihar</span>
            </td>
            <td className="widgetLg_date">2 June 2021</td>
            <td className="widgetLg_amount">$136.00</td>
            <td className="widgetLg_status"><Button type="Declined"/></td>
          </tr>
          <tr className="widgetLg_tr">
            <td className="widgetLg_User">
              <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" className="widgetLg_img" />
              <span className="widgetLg_name"> Nihar</span>
            </td>
            <td className="widgetLg_date">2 June 2021</td>
            <td className="widgetLg_amount">$136.00</td>
            <td className="widgetLg_status"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetLg_tr">
            <td className="widgetLg_User">
              <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" className="widgetLg_img" />
              <span className="widgetLg_name"> Nihar</span>
            </td>
            <td className="widgetLg_date">2 June 2021</td>
            <td className="widgetLg_amount">$136.00</td>
            <td className="widgetLg_status"><Button type="Approved"/></td>
          </tr>
          
        </table>
      </h3>
    </div>
  );
};

export default WidgetsLg;