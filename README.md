# ALX Listing App

## 📌 Project Description

A modern property listing platform built with React, TypeScript, and Tailwind CSS. This application provides a beautiful and intuitive interface for browsing and managing property listings, similar to Airbnb.

## Features

- Responsive property listing grid
- Beautiful property cards with images, pricing, and details
- Reusable UI components (buttons, cards)
- Type-safe development with TypeScript
- Modern styling with Tailwind CSS
- Consistent design system with custom theme

## 🧱 Project Structure

```
├── components/ # Reusable UI components (e.g., Card, Button)
│ └── common/ # Commonly shared components like Card.tsx
├── interfaces/ # TypeScript interfaces (e.g., CardProps, ButtonProps)
├── constants/ # Reusable data or settings (API URLs, UI text)
├── public/
│ └── assets/ # Static assets (images, SVGs, icons)
├── pages/ # Application routes (Next.js structure if applicable)
├── styles/ # Global styles if needed
├── README.md # Project documentatio

```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Development

### Key Components

- **Card Component**: Displays property information with images, pricing, and details
- **Button Component**: Customizable button with various styles and states
- **Theme Configuration**: Consistent color scheme and design tokens
- **TypeScript Interfaces**: Type definitions for components and data structures

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Assets

All reusable images, icons, and SVGs are placed in the public/assets directory.

## 🛠 Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- ESLint

## 📜 License

This project is part of the ALX Software Engineering Program and is intended for educational purposes only.
