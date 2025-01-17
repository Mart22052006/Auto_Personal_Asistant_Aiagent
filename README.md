# AI Personal Assistant System

## Project Overview
This project is a comprehensive AI Personal Assistant system that helps users manage their emails, schedule meetings, and generate reports. It features a modern web interface built with React and TypeScript for the frontend, and integrates with n8n for workflow automation and AI-powered assistance.

## Key Features

### AI Email Assistant
- Automated email composition and sending
- Email summarization capabilities
- Natural language processing for email commands
- Integration with n8n for workflow automation

### Meeting Management
- Schedule and manage meetings
- Calendar integration
- Meeting reminders and notifications
- Meeting notes and summaries

### Report Generation
- Automated report creation
- Data analysis and visualization
- Custom report templates
- Export in multiple formats

## System Architecture

### Frontend (React + TypeScript)
- Modern React components with TypeScript
- Tailwind CSS for styling
- Responsive design for all devices
- Real-time AI assistant integration

### Backend
- Flask-based proxy server
- n8n workflow integration
- Webhook-based communication
- Real-time processing

## Setup Instructions

### Prerequisites
- Node.js and pnpm
- Python 3.x
- n8n account for workflow automation

### Frontend Setup
```bash
cd frontend
pnpm install
pnpm run dev
```

### Backend Setup
```bash
cd auto_pa_system
pip install -r requirements.txt
python server.py
```

## Usage Guide

### Email Assistant
1. Navigate to the Email section
2. Use natural language commands:
   - Send emails: "Send email to example@email.com: Your message"
   - Summarize emails: "Summarize email from sender@email.com about Subject"

### Meeting Scheduler
1. Access the Meeting section
2. Create new meetings with AI assistance
3. Get smart suggestions for meeting times
4. Manage existing meetings

### Report Generator
1. Go to the Reports section
2. Select report type and data sources
3. Let AI analyze and generate reports
4. Export in desired format

## API Documentation

### Email Endpoints
- POST `/proxy-webhook` - Process AI assistant commands
- POST `/email/send` - Send emails
- GET `/email/summary` - Get email summaries

### Meeting Endpoints
- POST `/meetings/create` - Create new meetings
- GET `/meetings/list` - List all meetings
- PUT `/meetings/{id}` - Update meeting details

### Report Endpoints
- POST `/reports/generate` - Generate new reports
- GET `/reports/templates` - Get report templates
- GET `/reports/{id}` - Get specific report

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- n8n for workflow automation
- React and TypeScript communities
- OpenAI for AI capabilities
