
import  dotenv  from 'dotenv';


dotenv.config();

const envArgs = {   
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV
};

