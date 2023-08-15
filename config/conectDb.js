//I connect the database

const { connect } = require("mongoose");

async function connectDb() {
  try {
    const db = await connect(process.env.DB_HOST);//conection with database
    console.log(
      `Database is connected. Name: ${db.connection.name}. HOST: ${db.connection.host}. PORT: ${db.connection.port}`
        .green.italic.bold
    );
  } catch (error) {

console.log(error.message.red.bold);
process.exit(1);

  }
}
module.exports = connectDb;
