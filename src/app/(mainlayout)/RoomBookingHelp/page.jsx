"use client";

import React from "react";

const RoomBookingHelp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-6">
      <h1 className="text-3xl font-bold mb-4">Room Booking Help</h1>
      <p className="mb-4">
        Welcome to our Room Booking Help page! Here you'll find information and guidance to assist you with booking a room.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. How to Book a Room</h2>
      <p className="mb-4">
        To book a room, follow these steps:
        <ol className="list-decimal list-inside ml-4">
          <li>Visit the Room Booking section on our website.</li>
          <li>Select the type of room you want to book.</li>
          <li>Choose your check-in and check-out dates.</li>
          <li>Fill out the necessary personal information.</li>
          <li>Submit your booking request.</li>
        </ol>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Cancellation Policy</h2>
      <p className="mb-4">
        We understand that plans can change. Our cancellation policy is as follows:
        <ul className="list-disc list-inside ml-4">
          <li>Free cancellation up to 24 hours before your check-in date.</li>
          <li>Cancellations made less than 24 hours in advance may incur a charge.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Frequently Asked Questions (FAQs)</h2>
      <h3 className="text-xl font-medium mt-4 mb-2">Q1: Can I change my booking after it's confirmed?</h3>
      <p className="mb-4">
        Yes, you can modify your booking details by contacting our customer service.
      </p>

      <h3 className="text-xl font-medium mt-4 mb-2">Q2: What payment methods are accepted?</h3>
      <p className="mb-4">
        We accept major credit cards, debit cards, and online payment services.
      </p>

      <h3 className="text-xl font-medium mt-4 mb-2">Q3: Is there a minimum stay requirement?</h3>
      <p className="mb-4">
        Yes, we have a minimum stay requirement of [insert number] nights for certain room types.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Contact Us</h2>
      <p className="mb-4">
        If you have any further questions or need assistance with your booking, please feel free to reach out to us:
      </p>
      <p className="mb-2">
        <strong>Appartly</strong><br />
      
      </p>
    </div>
  );
};

export default RoomBookingHelp;
