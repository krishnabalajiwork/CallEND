# CallEND

A full-stack web app for managing calls, schedules, and meetings with Google Calendar integration.


Live Demo: [https://call-end-krishna.vercel.app/](https://call-end-krishna.vercel.app/)

---

## 🚀 Features

* User authentication (Google OAuth2)
* Google Calendar integration for scheduling
* Frontend: Next.js (React, Tailwind CSS)
* Backend: Node.js + Express
* Database: PostgreSQL (via Drizzle ORM)
* TypeScript for type safety
* Deployment ready for **Vercel** (frontend) and **Render/Heroku/Docker** (backend)

---

## 📂 Project Structure

```
CallEND-main/
 ├── app/                # Next.js frontend
 ├── server/             # Express backend
 │    ├── google/        # Google Calendar OAuth handlers
 │    ├── db/            # Database models (Drizzle ORM)
 │    ├── routes/        # API routes
 │    └── index.ts       # Server entrypoint
 ├── package.json
 ├── tsconfig.json
 └── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/CallEND.git
cd CallEND
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the **root** with the following:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=http://localhost:5000/google/callback

# Database (PostgreSQL)
DATABASE_URL=postgresql://username:password@localhost:5432/callend

# Session / JWT secret
JWT_SECRET=your_secret_key
```

For **production on Vercel**:

* Set `GOOGLE_REDIRECT_URL` to
  `https://call-end-krishna.vercel.app/api/google/callback`

---

### 4️⃣ Database Setup

```bash
# Push schema to database
npx drizzle-kit push
```

(Optional) Seed the database manually if needed.

---

### 5️⃣ Run Locally

Frontend (Next.js):

```bash
cd app
npm run dev
```

Backend (Express):

```bash
cd server
npm run dev
```

The app will be available at:

* Frontend → [http://localhost:3000](http://localhost:3000)
* Backend → [http://localhost:5000](http://localhost:5000)

---

## 🌐 Deployment

### Vercel (Frontend)

1. Push repo to GitHub.
2. Import into [Vercel](https://vercel.com/).
3. Add environment variables under **Settings → Environment Variables**:

   * `GOOGLE_CLIENT_ID`
   * `GOOGLE_CLIENT_SECRET`
   * `DATABASE_URL`
   * `JWT_SECRET`
   * `GOOGLE_REDIRECT_URL=https://call-end-krishna.vercel.app/api/google/callback`
4. Deploy.

### Backend (Render/Heroku/Docker)

* Deploy `/server` separately.
* Make sure frontend points to the deployed backend URL.

---

## 🐳 Docker Deployment

Build and run both frontend & backend in containers:

```bash
docker-compose up --build
```

---

## 📌 Tech Stack

* **Frontend**: Next.js, TailwindCSS, React
* **Backend**: Node.js, Express, TypeScript
* **Database**: PostgreSQL + Drizzle ORM
* **Auth**: Google OAuth2
* **Deployment**: Vercel + Render/Heroku

---


https://github.com/user-attachments/assets/6ace737a-af49-41fa-b2c0-10bc06ad1aaf


---


## 📝 License

MIT License. Free to use and modify.
