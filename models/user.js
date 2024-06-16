import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
   email: {
      type: String,
      unique: [true, 'Email already exists!'],
      require: [true, 'Email is required!'],
   },
   username: {
      type: String,
      unique: [true, 'Username already exists!'],
      require: [
         '^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$',
         'Username is invalid, it should contain 8-20 alphanumeric letters and be unique!',
      ],
   },
   image: {
      type: String,
   },
});

const User = models.User || model('User', UserSchema);

export default User;
