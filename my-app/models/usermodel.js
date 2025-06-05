import { pool } from "../db/pool.js";
export const userModel = {
  createUser: async (userData) => {
    let conn;
    try {
        //connect to the database
      conn = await pool.getConnection();
      //write the sql query
      const query = "INSERT INTO users (name, email) VALUES (?, ?)";
      // run query with  data
      const result = await conn.query(query, [userData.name, userData.email]);
      console.log("User created with ID:", result.insertId);
    } catch (err) {
      throw err;
    } finally {
        // release the connection back to the pool
      if (conn) conn.release();
    }
  },
  getAllUsers: async () => {
    let conn;
    try {
      conn = await pool.getConnection();
      const query = "SELECT * FROM users";
      const rows = await conn.query(query);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },
  getUserById: async (userId) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const query = "SELECT * FROM users WHERE id = ?";
      const rows = await conn.query(query, [userId]);
      return rows[0]; // Return the first user found
    } catch (err) {
      throw err;
    } finally {
        if (conn) conn.release();
        }
    },
    updateUser: async (userId, userData) => {   
        let conn;
        try {
            conn = await pool.getConnection();
            const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
            const result = await conn.query(query, [userData.name, userData.email, userId]);
            console.log("Rows affected:", result.affectedRows);
        } catch (err) {
            throw err;
        } finally {
            if (conn) conn.release();
        }
    }
    ,
    deleteUser: async (userId) => {
        let conn;
        try {
            conn = await pool.getConnection();
            const query = "DELETE FROM users WHERE id = ?";
            const result = await conn.query(query, [userId]);
            console.log("Rows affected:", result.affectedRows);
        } catch (err) {
            throw err;
        } finally {
            if (conn) conn.release();
        }
    }
};
