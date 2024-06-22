NotifiHub - Notification - Service

Introduction

Purpose
The purpose of this project is to create a robust notification system that can effectively manage and deliver notifications to customers. By analyzing customer data and behavior, the service aims to send personalized notifications that are relevant and engaging.

Features
* Personalized Notifications: Utilizes customer data to send targeted notifications.
* Engagement Tracking: Tracks customer engagement with notifications for analytics.
* Scalable Architecture: Built to handle large volumes of notifications efficiently.
* Customizable Templates: Supports customizable notification templates for various channels (e.g., email, SMS).

Technologies Used
* Node.js: Backend server environment.
* Express.js: Web application framework for Node.js.
* MongoDB: Database for storing customer data and notification history.
* Redis: In-memory data store for caching and improving performance.
* BullMQ: Message queuing used for sending notifications.

Getting Started

Prerequisites
Node.js installed
MongoDB installed and running
Redis installed and running
BullMQ installed and running
Docker (if available)

Installation

Clone the repository:

git clone https://github.com/adminshivam/NotifiHub-Notification-Service.git

Install dependencies:

cd NotifiHub-Notification-Service
npm install

Set up environment variables:

Create a .env file in the root directory and add the following:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/notification-service
REDIS_URL=redis://localhost:6379
SECERT_USER=adminshivam
SECERT_PASSWORD=adminshivam

Start the server:

npm start

Usage
* Register customers and their notification preferences.
* Create and schedule notifications based on customer data.
* Monitor engagement metrics to optimize notification strategies.

Contributing
Contributions are welcome! Please submit pull requests or open issues for any new features, enhancements, or bug fixes.

License
This is free software: you can redistribute it and/or modify it under the terms.

Acknowledgements
Thnaks for node libraries support and documentation.
Inspired by AWS SNS