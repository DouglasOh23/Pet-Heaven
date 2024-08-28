import React from 'react';
import "./DonateForm.css"

const DonateForm = () => (
  <div>
    <h1>Donate Now</h1>
    <form>
    <span>Donation Amount:</span>
        <label>
            <input type="radio" name="amount" value="10"/>
            <span>$10</span>
        </label>
        <label>
            <input type="radio" name="amount" value="20"/>
            <span>$20</span>
        </label>
        <label>
            <input type="radio" name="amount" value="50"/>
            <span>$50</span>
        </label>
        <label>
            <input type="radio" name="amount" value="other"/>
            <span>Other (please specify)</span>
        </label>

        <label>
            <span>Donation Frequency:</span>
            <input type="radio" name="frequency" value="one-time"/> One-time
            <input type="radio" name="frequency" value="monthly"/> Monthly
        </label>

        <label>
            <span>Payment Method:</span>
            <input type="radio" name="paymentMethod" value="creditCard"/> Credit Card
            <input type="radio" name="paymentMethod" value="paypal"/> PayPal
        </label>

        <label>
            <span>Name:</span>
            <input type="text" name="name"/>
        </label>

        <label>
            <span>Email:</span>
            <input type="email" name="email"/>
        </label>

        <label>
            <span>Phone Number:</span>
            <input type="tel" name="phoneNumber"/>
        </label>
        <button type="submit">Donate Now</button>
    </form>
  </div>
);

export default DonateForm;