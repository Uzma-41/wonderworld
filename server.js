const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.MONGODB_DB || 'wanderworld';
const collectionName = 'contacts';

let client;
let contacts;

async function initDb() {
  client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db(dbName);
  contacts = db.collection(collectionName);
  // Ensure an index on email (optional)
  try { await contacts.createIndex({ email: 1 }); } catch (e) { /* ignore */ }
  console.log('Connected to MongoDB:', mongoUri, 'db:', dbName);
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, destination, message, date } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });
    const doc = {
      name,
      email,
      phone: phone || '',
      destination: destination || '',
      message,
      date: date || new Date().toLocaleString()
    };
    const result = await contacts.insertOne(doc);
    res.json({ id: result.insertedId });
  } catch (err) {
    console.error('DB insert error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const docs = await contacts.find({}).sort({ _id: -1 }).toArray();
    res.json(docs);
  } catch (err) {
    console.error('DB read error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

const port = process.env.PORT || 3000;
initDb().then(() => {
  const server = app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));

  // graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Shutting down...');
    server.close();
    if (client) await client.close();
    process.exit(0);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
