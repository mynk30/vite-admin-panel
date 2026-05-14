# Project Structure & Documentation - Admin Panel

This document provides a detailed overview of the project structure and architecture for the **TailAdmin React** project.

## 🚀 Technology Stack
- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Routing:** React Router 7
- **Process Management:** PM2 (for development background execution)

---

## 📂 Directory Structure Overview

```text
3Admin-Panel/
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── auth/           # Login and Registration forms
│   │   ├── charts/         # ApexCharts implementations (Bar, Line)
│   │   ├── common/         # Generic components (Breadcrumbs, Theme Toggle, etc.)
│   │   ├── ecommerce/      # Dashboard-specific metric cards and charts
│   │   ├── form/           # Input field wrappers and form controls
│   │   ├── header/         # Top navigation bar components
│   │   ├── tables/         # Table implementations
│   │   ├── ui/             # Atomic UI elements (Buttons, Badges, Modals, etc.)
│   │   └── UserProfile/    # Profile-related card components
│   ├── context/            # React Context providers (Sidebar, Theme)
│   ├── hooks/              # Custom React hooks
│   ├── icons/              # SVG icons exported as React components
│   ├── layout/             # High-level layout components (AppLayout, Sidebar, etc.)
│   ├── pages/              # Page-level components (Route targets)
│   │   ├── AuthPages/      # SignIn, SignUp
│   │   ├── Customers/      # Customer management pages
│   │   ├── Dashboard/      # Main Ecommerce dashboard
│   │   ├── Forms/          # Form element demonstrations
│   │   ├── Tables/         # Data table demonstrations
│   │   └── UiElements/     # UI kit documentation (Alerts, Buttons, etc.)
│   ├── App.tsx             # Main application component & Routing
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles and Tailwind imports
│   └── vite-env.d.ts       # Vite type definitions
├── .env.development        # Development environment variables (PORT, etc.)
├── ecosystem.dev.config.cjs # PM2 configuration for background execution
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build and server configuration
```

---

## 🏛️ Core Architecture

### 1. Routing (`src/App.tsx`)
The application uses `react-router` for navigation.
- **Protected Layout:** Most pages are wrapped in `AppLayout`, which includes the `AppSidebar` and `AppHeader`.
- **Auth Routes:** Login and Signup pages use a separate layout.
- **Dynamic Port:** The development server port is dynamically loaded from the `.env` file.

### 2. Layout System (`src/layout/`)
- **AppLayout:** The master wrapper that manages the grid layout between the sidebar and main content area.
- **AppSidebar:** A collapsible sidebar controlled via `SidebarContext`. It handles navigation links and submenu nesting.
- **AppHeader:** Contains search, notifications, theme toggling, and user profile dropdown.

### 3. State Management
- **Context API:** Used for global UI state like theme (dark/light mode) and sidebar collapse/expand states.
- **Local State:** Component-specific state is managed via standard `useState` and `useEffect` hooks.

### 4. Styling
- **Tailwind CSS:** Utilizes utility-first styling for all components.
- **Theming:** Supports Dark Mode out-of-the-box via a `ThemeContext` that toggles a `dark` class on the document root.

---

## 🛠️ Key Features implemented
- **Dashboard:** Ecommerce metrics, sales charts, and demographic data.
- **Customer Management:** Dedicated section for managing customer data (`/customers`).
- **UI Kit:** Extensive collection of pre-styled components (Buttons, Alerts, Badges, Avatars, Modals).
- **Forms:** Support for various input types including DatePickers, Multi-select, and File Uploads.
- **Charts:** Interactive data visualization using `react-apexcharts`.

---

## ⚙️ Configuration & Deployment

### Environment Variables (`.env.development`)
Configure the development server port here:
```env
PORT=3011
```

### PM2 Execution (`ecosystem.dev.config.cjs`)
To run the admin panel in the background on Windows:
```bash
pm2 start ecosystem.dev.config.cjs
```
This configuration uses the direct path to the Vite binary to ensure stability across different environments.
