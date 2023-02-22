import pg from "pg";

async function connect() {
  if (global.connection) return global.connection.connect();
  const pool = new pg.Pool({
    connectionString:
      "postgres://asfscpeo:espf--NAeHQlAB9ZqDTXbGNDR_jBwESP@suleiman.db.elephantsql.com/asfscpeo",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
