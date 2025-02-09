const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false }, // Important for cloud-hosted databases
});

module.exports = async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM your_table'); // Replace with your query
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
};
