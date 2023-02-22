import { connect } from "./db.js";

async function getOwners() {
  const conn = await connect();

  try {
    const sql = `
      SELECT * FROM proprietarios;
    `;
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getOwner(id) {
  const conn = await connect();

  try {
    const sql = `
      SELECT * FROM proprietarios where proprietario_id = $1;
    `;
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function insertOwner(owner) {
  const conn = await connect();

  try {
    const sql = `
    INSERT INTO proprietarios (nome, telefone) values ($1, $2) RETURNING *;
  `;
    const values = [owner.nome, owner.telefone];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteOwner(id) {
  const conn = await connect();

  try {
    const sql = `
      DELETE FROM proprietarios WHERE proprietario_id = $1;
    `;
    const values = [id];
    await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateOwner(owner) {
  const conn = await connect();

  try {
    const sql = `
        UPDATE proprietarios set
            nome = $1,
            telefone = $2
        WHERE proprietario_id = $3;
    `;
    const values = [owner.nome, owner.telefone, owner.proprietario_id];
    await conn.query(sql, values);
    return owner;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  getOwners,
  getOwner,
  insertOwner,
  deleteOwner,
  updateOwner,
};
