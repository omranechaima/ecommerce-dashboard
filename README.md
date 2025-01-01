# EcommerceDashboard

This project is an e-commerce platform built with Angular and NgZorro. It includes features such as adding products to the cart, searching products, sorting, and managing cart items.

## Prerequisites

Before you can run this project locally, you need to have the following tools installed on your system:

- Node.js (LTS version recommended)
  
Download Node.js

- Angular CLI
You can install Angular CLI globally using npm:


npm install -g @angular/cli

- Git
  
Download Git

- json-server (For mocking the backend API)
  
You can install json-server globally by running:


npm install -g json-server

## Setup Instructions

1. Clone the repository
Clone the project repository to your local machine using Git.


git clone https://github.com/omranechaima/ecommerce-app.git

cd ecommerce-app

2. Install dependencies
Install the required dependencies for the project by running the following command in your project folder:

npm install

3. Run json-server (Mock API)
   
To simulate a backend API, run json-server to serve the db.json file (which holds your mock data):


json-server --watch db.json --port 3000

This will start a mock API server on http://localhost:3000 for the products and other resources defined in db.json


## Running the Application
Once the setup is complete, you can run the Angular development server.

Start the Angular server:


ng serve

By default, the application will be available at http://localhost:4200.
