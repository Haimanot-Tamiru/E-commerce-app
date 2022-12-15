import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="main_footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="title__name">Get to Know Us</h4>
              <ul className="list-unstyled">
                <li>Careers</li>
                <li>Blog</li>
                <li>Sustainability</li>
                <li>Press Center</li>
                <li>Investor Relations</li>
              </ul>
            </div>
            {/* colu2 */}
            <div className="col">
              <h4 className="title__name">Make Money with Us</h4>
              <ul className="list-unstyled">
                <li>Sell products on online shop</li>

                <li>Become an Affiliate</li>
                <li>Become a Delivery Driver</li>
                <li>Start a package delivery businness</li>
                <li>Advertise Your products</li>
                <li>Self-Publish with Us</li>

                <li>See More Ways to Make Money</li>
              </ul>
            </div>
            {/* colu3 */}
            <div className="col">
              <h3 className="title__name">online Shop Payment Products</h3>
              <ul className="list-unstyled">
                <li>Rewards Visa Signature Cards</li>
                <li>Store Card</li>
                <li>Secured Card</li>
                <li>Bussiness Card</li>
                <li>Business Line of Credit</li>
                <li>Shop with Points</li>
                <li>Credit Card Marketplace</li>
                <li>Reload Your Balance</li>
              </ul>
            </div>
            {/* colu4 */}
            <div className="col">
              <h4 className="title__name">Let Us Help You</h4>
              <ul className="list-unstyled">
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__credit">
          <h3>Developed By: Haimanot Tamiru</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
