const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Successfully connected');
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = dbConnect;
