# Flirtbate - Adult Video Chat Platform

A modern, responsive web application built with Next.js and React for adult video chat services.

Live Demo: https://nextquest-flirtbate-clone.vercel.app/

## Features

- Real-time video chat capabilities
- Model filtering and search functionality 
- Responsive design that works on mobile and desktop
- User authentication and account management
- Secure payment processing
- Model favoriting system
- Online status indicators

## Tech Stack

- Next.js 13+ with App Router
- React 18
- TypeScript
- Tailwind CSS
- Headless UI Components
- Heroicons

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/flirtbate.git
cd flirtbate
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file and configure the environment variables

```bash
cp .env.example .env.local
```

4. Start the development server

```bash
npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is organized into the following key directories and files:

src/
├── app/
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── ModelGrid.tsx
│   ├── SignupModal.tsx
│   ├── SideMenu.tsx
│   └── ui/
│       └── CustomSelect.tsx
├── constants/
│   ├── models.ts
│   └── filters.ts
└── public/

## Design Patterns

### Component-Based Architecture

The project follows a component-based architecture where reusable components are created and used throughout the application.