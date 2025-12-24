# React Boilerpalette 🎨

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

A modern, production-ready React boilerplate built with performance and developer experience in mind. It comes pre-configured with the latest tools and best practices to help you start your next project in seconds.

## 🚀 Features

- **Top-tier Stack:**
  - **React 19**: Leveraging the latest React features and hooks.
  - **Vite 7**: Lightning-fast development server and optimized builds.
  - **Tailwind CSS v4**: Utility-first CSS framework with the latest engine and simplified configuration.
  - **TypeScript**: Static typing for robust and maintainable code.

- **State Management:**
  - **Redux Toolkit**: Standardized and efficient Redux logic.
  - **Redux Persist**: Persist your state across page reloads effortlessly.

- **UI & Experience:**
  - **Lucide React**: Beautiful & consistent icon set.
  - **Headless UI & Radix UI**: Unstyled, accessible UI primitives for building custom components.
  - **Ubuntu Font**: Pre-configured Google Fonts integration.
  - **Responsive Design**: Mobile-first approach.

- **Utilities & Tools:**
  - **React Router v7**: Modern routing for single-page applications.
  - **Axios**: Promise-based HTTP client.
  - **Formik & Yup**: Easy form handling and validation.
  - **Classnames & Tailwind Merge**: Clean conditional class handling without conflicts.
  - **ESLint & Prettier**: Enforced code quality and formatting.

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alikvkli/react-boilerpalette.git
   cd react-boilerpalette
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR. |
| `npm run build` | Compiles the application for production using TypeScript and Vite. |
| `npm run preview` | Locally preview the production build. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## 📂 Project Structure

```bash
src/
├── app/          # App setup (store, providers)
├── components/   # Reusable UI components
├── features/     # Feature-based modules (slices, logic)
├── hooks/        # Custom React hooks
├── layouts/      # Page layout wrapper components
├── lib/          # Utility libraries configuration (axios, utils)
├── pages/        # Application pages/screens
├── routes/       # Route definitions
└── store/        # Redux store configuration
```

## 🎨 Styling

This project uses **Tailwind CSS v4**.
- **Font**: Ubuntu (configured in `src/index.css` via `@theme`).
- **Icons**: [Lucide React](https://lucide.dev/).

To customize the theme, edit `src/index.css` using the new CSS-first configuration approach:

```css
@theme {
  --font-sans: "Ubuntu", sans-serif;
  --color-brand: #4f46e5;
}
```

## 📄 License

MIT License © 2026 [React Boilerpalette](https://github.com/alikvkli)
