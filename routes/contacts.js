const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

// async function main() {
//     dotenv.config();

//     const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}*@cluster0.hkyld.mongodb.net/database01?retryWrites=true&w=majority`

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         await listDatabases(client);
//     } catch(e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => 
//         console.log(` - ${db.name}`)
//     );
// }
dotenv.config();
console.log(`Username: ${process.env.DB_USER}`);
console.log(`Password: ${process.env.DB_PASS}`);
// main().catch(console.error);