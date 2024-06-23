import mysql from "mysql2/promise";

// Create the connection pool
const pool = mysql.createPool({
  host: "localhost", // e.g., 'localhost'
  user: "root", // e.g., 'root'
  password: "admin", // e.g., 'password123'
  database: "customers", // e.g., 'testdb'
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const getMySQLConnection: any = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected as id", conn.threadId);
    return conn;
  } catch (err) {
    console.error("Error connecting: " + err);
  } finally {
    if (conn) conn.release();
  }
};
