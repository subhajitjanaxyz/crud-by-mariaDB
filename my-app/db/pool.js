import mariadb from "mariadb";
export const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "pass",
  database: "school_management",
});
