import { connect } from "./db.js";

async function getAnimals() {
  const conn = await connect();

  try {
    const sql = `
      SELECT * FROM animais;
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

async function getAnimal(id) {
  const conn = await connect();

  try {
    const sql = `
      SELECT * FROM animais where animal_id = $1;
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

async function insertAnimal(animal) {
  const conn = await connect();

  try {
    const sql = `
    INSERT INTO animais (nome, tipo, proprietario_id) values ($1, $2, $3) RETURNING *;
  `;
    const values = [animal.nome, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();

  try {
    const sql = `
      DELETE FROM animais WHERE animal_id = $1;
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

async function updateAnimal(animal) {
  const conn = await connect();

  try {
    const sql = `
        UPDATE animais set
            nome = $1,
            tipo = $2,
            proprietario_id = $3
        WHERE animal_id = $4;
    `;
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];
    await conn.query(sql, values);
    return animal;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimalsOwner(idOwner) {
  const conn = await connect();

  try {
    const sql = `
      SELECT * FROM animais where proprietario_id = $1;
    `;
    const values = [idOwner];
    const res = await conn.query(sql, values);
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  getAnimals,
  getAnimal,
  insertAnimal,
  deleteAnimal,
  updateAnimal,
  getAnimalsOwner,
};
