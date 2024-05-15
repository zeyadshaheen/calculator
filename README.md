# Calculator Project

This project is a simple calculator application with a backend to perform calculations and a frontend to provide a user interface.

## Project Structure

Calculator/
│
├── calculator-backend/
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── evaluateExpression.js
│   ├── package.json
│   └── package-lock.json
│
├── calculator-frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── Calc.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
└── README.md

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

## Setup Instructions

### Clone the Repository

1. Open your terminal.
2. Clone the repository from GitHub.

   ```sh
   git clone https://github.com/zeyadshaheen/calculator.git


3. Navigate to the project directory.
   
   ```sh
   cd calculator

## Setup Backend
1. Navigate to the backend directory.

   ```sh
   cd calculator-backend

2. Install the dependencies.
   
   ```sh
   npm install

3. Create a `.env` file in the `calculator-backend` directory and add the following content:

   ```sh
   PORT=3000

4. Start the backend server.
   
   ```sh
   npm start

## Setup Frontend
1. Open a new terminal window or tab.


2. Navigate to the frontend directory.
   
   ```sh
   cd ../calculator-frontend

3. Install the dependencies.
   
   ```sh
   npm install

4. Create a `.env` file in the `calculator-frontend` directory and add the following content:
   
   ```sh
   REACT_APP_API_URL=http://localhost:3001

5. Start the frontend application.
   
   ```sh
   npm start

## Running the Application
1. Ensure the backend server is running.
2. Ensure the frontend application is running.
3. Open your web browser and navigate to http://localhost:3001 (or the port number displayed in your terminal) to use the calculator.

## API Endpoints
### Calculate Endpoint

- **URL**: `/calculate`
- **Method**: `POST`
- **Payload**: `{ "expression": "5 + 3 - 2 * 4 / 2" }`
- **Response**: `{ "result": 12 }`
## Technologies Used

- Node.js
- Express.js
- React.js

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
