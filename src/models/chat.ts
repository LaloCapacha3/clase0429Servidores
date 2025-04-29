import { Schema, model } from 'mongoose';

const chatMessageSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const chatMessageModel = model('ChatMessages', chatMessageSchema);
export default chatMessageModel;