# Portfolio Tracker Application

A full-stack application for tracking stock portfolios with real-time price updates. Built with React, Spring Boot, and MySQL.

![Portfolio Tracker Demo](https://github.com/yourusername/portfolio-tracker/raw/main/docs/demo.png)

## 🌟 Features

- 📈 Real-time stock price tracking
- 📊 Portfolio performance dashboard
- ✏️ CRUD operations for stock holdings
- 📱 Responsive design
- 🔒 Data persistence with MySQL
- 🚀 Real-time updates via Finnhub API

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Vite

### Backend
- Java 17
- Spring Boot 3.2
- Spring Data JPA
- MySQL
- Lombok
- Finnhub API

## 🚀 Live Demo

- Frontend: [Portfolio Tracker App](${process.env.DEPLOY_URL})
- Backend API: [API Documentation](https://your-backend-url.com/swagger-ui.html)

## 🏃‍♂️ Running Locally

### Prerequisites

- Node.js 18+
- Java 17+
- MySQL 8+
- Maven
- Finnhub API Key

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-tracker.git
   cd portfolio-tracker
   ```

2. Create MySQL database:
   ```sql
   CREATE DATABASE portfolio_tracker;
   ```

3. Configure application.properties:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   stock.api.key=your_finnhub_api_key
   ```

4. Run the Spring Boot application:
   ```bash
   cd backend
   mvn spring-boot:run
   ```

The backend will start on http://localhost:8080

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will start on http://localhost:5173

## 📁 Project Structure

```
portfolio-tracker/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API integration
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   └── ...
├── backend/                # Spring Boot backend application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/portfolio/
│   │   │   │       ├── controller/  # REST controllers
│   │   │   │       ├── model/       # JPA entities
│   │   │   │       ├── repository/  # Data access
│   │   │   │       └── service/     # Business logic
│   │   │   └── resources/
│   │   └── test/
│   └── ...
└── README.md
```

## 🔄 API Endpoints

### Stocks API
- GET `/api/stocks?portfolioId={id}` - Get all stocks in a portfolio
- POST `/api/stocks` - Add a new stock
- PUT `/api/stocks/{id}` - Update stock details
- DELETE `/api/stocks/{id}` - Delete a stock

## ⚠️ Limitations and Assumptions

1. **Stock Price Updates**
   - Real-time prices are fetched from Finnhub's free tier API
   - Update frequency is limited by API rate limits
   - Prices may have a slight delay

2. **Portfolio Management**
   - Each user has a single portfolio
   - Stock quantities are assumed to be whole numbers
   - All prices are in USD

3. **Security**
   - Basic CORS configuration for development
   - No authentication implemented
   - API key exposed in frontend (in production, use environment variables)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.