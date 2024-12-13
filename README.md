# Real Estate Platform with AI Recommendations

## Project Overview
This project is a full-stack real estate platform that provides:
- User authentication (login/logout).
- A property listings page where users can view detailed property data.
- AI-driven property recommendations based on user preferences.

The platform is built with modern technologies, including React, Node.js, MongoDB, and Python for the recommendation engine.

---

## Features
1. **User Authentication**
   - Login and logout functionality.
   - Authentication tokens stored securely in `localStorage`.

2. **Property Listings Page**
   - Fetches and displays properties from the backend.
   - Shows property details, including name, description, and price.

3. **AI Recommendations**
   - Recommends properties based on user preferences using a Python-based recommendation engine.
   - Employs cosine similarity for recommendation logic.

4. **Responsive Design**
   - Ensures usability across desktop and mobile devices.

---

## Technologies Used
### Frontend
- **React**: UI framework.
- **React Router**: For client-side routing.
- **Axios**: HTTP requests to the backend.

### Backend
- **Node.js**: Server runtime.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing user data and property information.
- **Mongoose**: ORM for MongoDB.

### AI/ML
- **Python**: For recommendation engine.
- **scikit-learn**: For cosine similarity calculations.
- **pandas**: For data handling.

---

## Project Structure
```plaintext
|-- src/
|   |-- index.js                # React entry point
|   |-- pages/
|       |-- LoginPage.js        # Login page component
|       |-- PropertyListings.js # Property listings page component
|       |-- Recommendations.js  # Recommendations page component
|   |-- index.css               # Global CSS styles
|-- backend/
|   |-- server.js               # Node.js server
|   |-- routes/
|       |-- auth.js             # Authentication routes
|       |-- properties.js       # Property routes
|   |-- recommendation_engine.py # Python recommendation engine
|-- .env                        # Environment variables
|-- seed.js                     # Script to seed the database
```

---

## Setup Instructions

### Prerequisites
1. **Node.js** (v16 or later)
2. **MongoDB**
3. **Python** (v3.7 or later)
4. **npm** or **yarn**

### Steps
#### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

#### 2. Install Dependencies
- **Frontend**:
  ```bash
  cd src
  npm install
  ```

- **Backend**:
  ```bash
  cd backend
  npm install
  ```

#### 3. Set Up Environment Variables
Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=<your_mongo_connection_string>
PORT=5000
```

#### 4. Seed the Database
Run the seed script to populate the MongoDB database:
```bash
node backend/seed.js
```

#### 5. Start the Backend Server
```bash
node backend/server.js
```

#### 6. Start the Frontend
```bash
cd src
npm start
```

---

## API Endpoints
### Authentication
- `POST /api/auth/login`: Login user.

### Properties
- `GET /api/properties`: Fetch all properties.

### Recommendations
- `GET /api/recommendations?userId=<user_id>`: Fetch property recommendations for a user.

---

## AI Recommendation Engine
The recommendation engine:
- Reads user preferences and property tags.
- Uses `cosine_similarity` to calculate similarity between user preferences and property tags.
- Returns the top 3 most relevant properties.

---

## Deployment
- Deploy the backend using services like Heroku or AWS.
- Host the frontend using Vercel, Netlify, or GitHub Pages.

---

## Screenshots
- **Login Page**: ![Login Page](./screenshots/login.png)
- **Property Listings**: ![Property Listings](./screenshots/listings.png)
- **Recommendations**: ![Recommendations](./screenshots/recommendations.png)

---

## Future Enhancements
1. Add user registration and profile management.
2. Improve recommendation engine with advanced ML models.
3. Enhance UI/UX for better user engagement.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributors
- [Your Name]
- [Your Team]

Feel free to raise issues or suggest improvements!

