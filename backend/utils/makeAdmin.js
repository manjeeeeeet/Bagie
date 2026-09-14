const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("../config/db");
const User = require("../models/User");

const makeAdmin = async () => {
  try {
    await connectDB();

    const email = process.argv[2];

    if (!email) {
      console.log("Please provide an email.");
      console.log("Example: npm run make-admin your@email.com");
      process.exit(1);
    }

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      console.log("User not found.");
      process.exit(1);
    }

    user.isAdmin = true;

    await user.save();

    console.log(`${user.email} is now an admin.`);
    process.exit(0);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

makeAdmin();