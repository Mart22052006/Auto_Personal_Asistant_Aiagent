# iMovie System with AI Email Assistant

## Project Overview
This project combines a movie information system with an AI-powered email assistant. It features a modern web interface built with React and TypeScript for the frontend, Django for the backend, and includes an innovative AI email assistant system.

## Key Features

### Movie Information System
- Trending movies display
- Movie categorization and filtering
- User preference-based recommendations
- Detailed movie information pages

### AI Email Assistant
- Automated email composition and sending
- Email summarization capabilities
- Natural language processing for email commands
- Integration with n8n for workflow automation

## System Architecture

### Frontend (React + TypeScript)
- Modern React components with TypeScript
- Tailwind CSS for styling
- Responsive design for all devices
- Real-time AI assistant integration

### Backend
- Django REST framework
- MySQL database
- Secure authentication system
- API endpoints for movie and user data

### AI Email System
- Flask-based proxy server
- n8n workflow integration
- Webhook-based communication
- Real-time email processing

## Setup Instructions

### Prerequisites
- Node.js and pnpm
- Python 3.x
- MySQL database

### Frontend Setup
```bash
cd frontend
pnpm install
pnpm run dev
```

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py runserver
```

### AI Email Assistant Setup
```bash
cd auto_pa_system
pip install -r requirements.txt
python server.py
```

## Usage Guide

### Movie System
1. Browse trending movies on the homepage
2. Use filters to find movies by category
3. Click on movies for detailed information
4. Save favorites and preferences

### Email Assistant
1. Navigate to the Email section
2. Use natural language commands:
   - Send emails: "Send email to example@email.com: Your message"
   - Summarize emails: "Summarize email from sender@email.com about Subject"

## API Documentation

### Movie Endpoints
- GET `/api/movies/trending/` - Get trending movies
- GET `/api/movies/categories/` - Get movie categories
- GET `/api/movies/{id}/` - Get specific movie details

### User Endpoints
- POST `/api/auth/login/` - User login
- POST `/api/auth/register/` - User registration
- GET `/api/user/preferences/` - Get user preferences

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Team
- Team 15
- Course Project for IT5007

## Acknowledgments
- Movie data provided by external APIs
- n8n for workflow automation
- React and Django communities
