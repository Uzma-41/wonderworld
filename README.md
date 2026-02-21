# WanderWorld — Local backend for contact form

This project adds a tiny Node/Express + SQLite backend to persist contact form submissions.

Quick start (Windows):

1. Open a terminal in the project root (where `server.js` and `package.json` live).
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
# or for development with auto-reload:
npm run dev
```

The API will listen on `http://localhost:3000`.

Endpoints:
- `POST /api/contact` — accept JSON body `{ name, email, phone, destination, message, date }`
- `GET /api/contact` — return saved submissions as JSON

Notes:
- The frontend will attempt to POST submissions to `http://localhost:3000/api/contact`. If the server is not running, the site will fall back to storing submissions in LocalStorage (no data loss locally).
- This backend now uses MongoDB instead of SQLite. You can run a local MongoDB server or use Docker.

Running MongoDB locally (options):

- Install MongoDB Community edition on Windows and start the service (official docs: https://www.mongodb.com/docs/manual/installation/).
- Or run via Docker:

```bash
docker run -d -p 27017:27017 --name mongo mongo:6.0
```

By default the server connects to `mongodb://127.0.0.1:27017` and uses database `wanderworld`.
To use a different MongoDB URI, set the `MONGODB_URI` environment variable before starting the server.

Quick start (Windows PowerShell):

```powershell
npm install
#$env:MONGODB_URI = 'mongodb://127.0.0.1:27017'  # optional
npm start
```

To view saved submissions directly, open the API in a browser or curl:

```bash
http://localhost:3000/api/contact
```

