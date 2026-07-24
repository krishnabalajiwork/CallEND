```markdown
# 📞 CallEND — Full-Stack Calendar & Meeting Scheduler

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://call-end-krishna.vercel.app/book/user_32luLfRMwAsvebI8veMJFwDfA0N)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js_%7C_Express_%7C_PostgreSQL-blue?style=for-the-badge)](https://github.com/krishnabalajiwork/CallEND)

> **Developer & API Documentation**  
> An automated, full-stack scheduling system featuring real-time Google Calendar API synchronization, Google OAuth2 authentication flows, and PostgreSQL data persistence managed via Drizzle ORM.

---

## 🏗️ System Architecture & Workflow

CallEND operates on a decoupled architecture separating the client-side Next.js frontend from a stateless Express REST API backend.

```text
[ User / Client ]
       │
       ├── (1) Auth Request ──────> [ Google OAuth2 Provider ]
       │                                       │
       │                                 (Token Response)
       │                                       ▼
       ├── (2) Book Slot ──────────> [ Express Backend Server ]
                                               │
                                      (Read/Write Sync)
                                               ├──> [ PostgreSQL DB (Drizzle ORM) ]
                                               └──> [ Google Calendar API ]

```

---

## ⚡ Key Features & Capabilities

* **Google OAuth2 Authentication:** Secure token exchange pipeline supporting session management and offline access scopes for Google Calendar.
* **Bi-Directional Calendar Sync:** Automated creation and conflict checking of schedule entries directly via Google Calendar API.
* **Strict Type Safety:** End-to-end TypeScript interfaces spanning React components down to database models.
* **ORM Schema Management:** Lightweight, type-safe database queries and migration management via Drizzle ORM.
* **Containerized Deployment:** Docker Compose orchestration for unified local testing and seamless platform deployments.

---

## 🔌 API & Route Specifications

| Route / Context | Method | Description | Authentication Required |
| --- | --- | --- | --- |
| `/google/login` | `GET` | Initiates Google OAuth2 handshake and redirects user | No |
| `/google/callback` | `GET` | Handles OAuth code exchange and retrieves authorization tokens | No |
| `/api/events` | `GET` | Fetches available user scheduling slots | Yes (Bearer/Session) |
| `/api/book` | `POST` | Writes new booking entry to DB and dispatches Google Calendar event | Yes (Bearer/Session) |

---

## 📂 Repository Structure

```text
CallEND/
 ├── app/                # Next.js frontend application (React, Tailwind CSS)
 ├── server/             # Express backend server (TypeScript)
 │    ├── google/        # Google OAuth2 & Calendar API integration logic
 │    ├── db/            # Database connection, schemas, & Drizzle ORM models
 │    ├── routes/        # REST API route handlers
 │    └── index.ts       # Express server initialization entrypoint
 ├── docker-compose.yml  # Multi-container Docker orchestration manifest
 ├── package.json        # Dependencies and build scripts
 └── tsconfig.json       # Project-wide TypeScript configurations

```

---

## ⚙️ Environment Configuration

Create a `.env` file in the **root directory** and populate it with your environment keys:

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_REDIRECT_URL="http://localhost:5000/google/callback"

# Database Connection
DATABASE_URL="postgresql://username:password@localhost:5432/callend"

# JWT & Session Security
JWT_SECRET="your_secure_random_jwt_secret"

```

> **Production Note:** On deployment platforms like Vercel or Render, update `GOOGLE_REDIRECT_URL` to point to your live backend domain (e.g., `https://call-end-krishna.vercel.app/api/google/callback`).

---

## 🚀 Quickstart & Local Installation

### Prerequisites

* **Node.js:** v18.x or higher
* **PostgreSQL:** Active instance (Local or hosted via Neon/Supabase)

### 1. Repository Setup & Dependencies

```bash
git clone [https://github.com/krishnabalajiwork/CallEND.git](https://github.com/krishnabalajiwork/CallEND.git)
cd CallEND
npm install

```

### 2. Database Migration

Apply the Drizzle ORM schema directly to your target PostgreSQL database:

```bash
npx drizzle-kit push

```

### 3. Launching Development Servers

In separate terminal sessions, execute:

```bash
# Terminal 1: Launch Next.js Frontend
cd app
npm run dev

# Terminal 2: Launch Express Backend
cd server
npm run dev

```

* **Frontend Client:** `http://localhost:3000`
* **Backend API:** `http://localhost:5000`

---

## 🐳 Docker Deployment

To launch both frontend and backend services inside isolated containers:

```bash
docker-compose up --build

```

---

## 🐛 Troubleshooting & Common Configuration Fixes

#### 1. OAuth Redirect URI Mismatch (`redirect_uri_mismatch`)

* **Cause:** The `GOOGLE_REDIRECT_URL` defined in `.env` does not match the authorized redirect URI registered in the Google Cloud Console.
* **Solution:** Ensure the URI configured in Google Cloud Console precisely matches your domain environment (`http://localhost:5000/google/callback` for local development or your production URL).

#### 2. PostgreSQL Connection Failures

* **Cause:** Incorrect connection credentials or SSL mode mismatches in `DATABASE_URL`.
* **Solution:** Verify your PostgreSQL instance is accepting connections and append `?sslmode=require` to your connection string if using cloud database providers.

---

## 🛠️ Technology Stack

* **Frontend:** Next.js, React, Tailwind CSS
* **Backend:** Node.js, Express, TypeScript
* **Database & ORM:** PostgreSQL, Drizzle ORM
* **Integrations:** Google OAuth2 API, Google Calendar REST API
* **Deployment & Containerization:** Vercel, Docker

---

## 👨‍💻 Developer & Author

**Chintha Krishna Balaji**

* GitHub: [@krishnabalajiwork](https://www.google.com/search?q=https://github.com/krishnabalajiwork)
* Portfolio: [Live Portfolio Demo](https://call-end-krishna.vercel.app/book/user_32luLfRMwAsvebI8veMJFwDfA0N)

---

## 📝 License

This project is open-source and released under the [MIT License](https://www.google.com/search?q=LICENSE).

```

```
