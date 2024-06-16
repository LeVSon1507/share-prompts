import mongoose from 'mongoose';

let isConnected = false; //track the connection

export const connectToDB = async () => {
   mongoose.set('strictQuery', true);

   if (isConnected) {
      console.log('🚀 MongoDB is ready!');
      return;
   }

   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         dbName: 'share_prompt',
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      isConnected = true;
      console.log('🚀 MongoDB is connect!');
   } catch (error) {
      console.log('🚀 ~ connect ~ error:', error);
   }
};
