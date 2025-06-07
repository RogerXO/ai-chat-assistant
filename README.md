# AI Chat Assistant

A simple web application that allows users to chat with an AI assistant using OpenAI's GPT-3.5 Turbo model. The application includes a configurable system context (system prompt) that helps guide the AI's responses.

# IMPORTANT!!!!
This is a project just to train some functionalities with IA. It has no implementation with backend or database, therefore, it has many security flaws and a super simples layout. 

## Features

- Basic UI built with React and Tailwind CSS
- Real-time chat interface with message history
- Configurable system context for AI responses
- Settings page for managing API key and context
- Local storage for persisting settings (super secure lol)
- Loading states and error handling

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- OpenAI API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Navigate to the Settings page
2. Enter your OpenAI API key
3. Configure the system context (instructions for the AI)
4. Go to the Chat page to start conversing with the AI

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios
- OpenRouter API

## Security Note

The application stores the API key in the browser's sessionStorage. While this is convenient for development and personal use, for production environments, you should consider implementing a backend service to handle API key management more securely.
