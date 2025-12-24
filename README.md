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
  - **Tailwind CSS v4**: Utility-first CSS framework with a new high-speed engine.
  - **TypeScript**: Static typing for robust and maintainable code.

- **Architecture:**
  - **Lazy Loading**: Automatic route-based code splitting using `React.lazy` and `Suspense`.
  - **Auth Guards**: Declarative layout-based authentication protection using `Navigate` and `Outlet`.
  - **Centralized Routing**: All application paths managed from a single `paths.ts` constant.

- **State Management:**
  - **Redux Toolkit**: Standardized and efficient Redux logic.
  - **Redux Persist**: Secure state persistence with **Encryption** support.

- **UI & Experience:**
  - **Lucide React**: Beautiful & consistent icon set.
  - **Page Loader**: Integrated branded loading screen for better UX.
  - **Ubuntu Font**: Modern typography pre-configured via Google Fonts.

- **Security:**
  - **Environment Variables**: Robust configuration using `.env` files.
  - **Encrypted State**: Sensitive state data is encrypted before being stored in session storage.

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alikvkli/react-boilerpalette.git
   cd react-boilerpalette
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your secret keys
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
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
├── components/   # Reusable UI components (e.g., PageLoader)
├── features/     # Feature-based logic and slices (app, etc.)
├── hooks/        # Custom React hooks (including typed store hooks)
├── layouts/      # Auth-guarded Layout components (Private/Public)
├── lib/          # Utilities and Axios configuration
├── pages/        # Route-level components
├── routes/       # Router config, paths.ts, and root outlet
└── store/        # Redux store and persistence setup
```

## 🎨 Styling & Theme

This project uses **Tailwind CSS v4** with a CSS-first configuration approach.
- **Font**: Ubuntu (configured in `src/index.css` via `@theme`).
- **Path**: Configuration managed in `src/index.css` using modern CSS variables.

```css
@theme {
  --font-sans: "Ubuntu", sans-serif;
}
```

## 📄 License

MIT License © 2026 [React Boilerpalette](https://github.com/alikvkli)
