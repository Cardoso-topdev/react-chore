import React from 'react'
import Footer from '../../components/footer'
import Navigation from '../../components/navigation'
import SectionTitle from '../../components/section-title'
import "./style.scss"

const Fee = () => <React.Fragment>
  <Navigation isColorWhite={false} />
  <div className="container fee">
    <SectionTitle header="Fees" />
    <div class="primary-border flex-between-space">
      <div class="detail-item">
        <span class="item-title">Monthly Subscription Fee</span>
        <span class="item-value">$0.00</span>
      </div>
      <div class="detail-item">
        <span class="item-title">Per Purchase</span>
        <span class="item-value">$0.00</span>
      </div>
      <div class="detail-item">
        <span class="item-title">ATM Withdrawal</span>
        <span class="item-value">N/A</span>
      </div>
      <div class="detail-item">
        <span class="item-title">Cash Reload</span>
        <span class="item-value">N/A</span>
      </div>
    </div>

    <div class="primary-border flex-between-space">
      <h3 class="fee-item-title">Customer services</h3>
      <h3 class="fee-item-price">$0.00</h3>
    </div>

    <div class="primary-border flex-between-space">
      <h3 class="fee-item-title">Inactivity(after 12 months with no transactions)</h3>
      <h3 class="fee-item-price">$0.00</h3>
    </div>

    <div class="primary-border flex-between-space">
      <h3 class="fee-item-title">We charge 0 other types of fees</h3>
      <h3 class="fee-item-price"> </h3>
    </div>

    <div class="primary-border credit-feature">
      <h3 class="fee-item-title">No overdraft/credit feature</h3>
      <p class="item-content"><br />Your funds are eligible for FDIC insurance. <br /><br />
      For general information about prepaid accounts, visit cfpb.gov/prepaid <br /><br />
      Find details and conditions for all fees and services in the cardholder agreement or call 1-888-377-9776 or visit creditacademy.io.</p>
    </div>

    <div class="extra-content">
      <p>  Issued By: Sunrise Banks, N.A., Member FDIC <br /><br />
      Program Name: Credit Academy Prepaid Mastercard <br /><br />
      Enrollment Fee: $0
      </p>
    </div>
  </div>
  <Footer /> 
</React.Fragment>

export default Fee
