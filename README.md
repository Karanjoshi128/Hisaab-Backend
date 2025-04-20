

```markdown
# Hisaab Backend

Hisaab Backend is a Node.js-based backend application for managing users, transactions, and balances. It is built using Express.js, MongoDB, and Mongoose, and supports user authentication and transaction management.

## Features

- User registration and login with hashed passwords.
- Cookie-based authentication.
- CRUD operations for users and transactions.
- Balance management with transaction history.
- Database connection using MongoDB.
- Environment variable support using `dotenv`.

## Project Structure

```
.
├── .env
├── .gitignore
├── app.js
├── constants.js
├── index.js
├── package.json
├── src/
│   ├── controllers/
│   │   ├── transaction.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── dbConnect.js
│   ├── extras/
│   │   └── controller.txt
│   ├── middlewares/
│   │   └── checkCookiePresent.js
│   ├── models/
│   │   ├── transaction.model.js
│   │   └── User.model.js
│   ├── routes/
│   │   └── user.routes.js
│   └── utils/
```

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/hisaab-backend.git
   cd hisaab-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The server will run at `http://localhost:5000`.

## API Endpoints

### User Routes

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| POST   | `/api/users/v1/register`          | Register a new user             |
| POST   | `/api/users/v1/login`             | Log in a user                   |
| POST   | `/api/users/v1/logout`            | Log out a user                  |
| GET    | `/api/users/v1/getallusers`       | Get all users                   |

### Transaction Routes

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| GET    | `/api/users/v1/getalltransactions`| Get all transactions            |
| POST   | `/api/users/v1/transactionaddbal1`| Add balance to balance1         |
| POST   | `/api/users/v1/transactionaddbal2`| Add balance to balance2         |
| POST   | `/api/users/v1/transactionsubtractbal1` | Subtract balance from balance1 |
| POST   | `/api/users/v1/transactionsubtractbal2` | Subtract balance from balance2 |
| POST   | `/api/users/v1/saveandcreatetransaction` | Save and create a transaction |

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.
- **bcryptjs**: Password hashing.
- **cookie-parser**: Middleware for parsing cookies.
- **dotenv**: Environment variable management.

## Development

To run the project in development mode:

```bash
npm run dev
```

## Production

To run the project in production mode:

```bash
npm start
```

## License

This project is licensed under the ISC License.

## Author

Developed by [Your Name].
```

Replace `[Your Name]` with your name and `https://github.com/your-repo/hisaab-backend.git` with the actual repository URL if applicable.
