const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('mongodb connected')
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
};

module.exports = connectToDB
