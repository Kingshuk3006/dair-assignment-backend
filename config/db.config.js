const mongoose = require("mongoose");

const uri =
  "mongodb+srv://kingsarkar3006:12345@dair-assignment-users.9ibghem.mongodb.net/?retryWrites=true&w=majority";

  const connectDb = async () => {
    try {
        const DB_OPTION = {
            dbName: 'project',
        }
        await mongoose.connect(uri, DB_OPTION);
        console.log('Database Connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb;
