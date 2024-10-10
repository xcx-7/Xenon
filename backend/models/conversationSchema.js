// const mongoose = require('mongoose');

// const conversationSchema = new mongoose.Schema({
//   userMessage: {
//     type: String,
//     required: true,
//   },
//   botResponse: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Conversation = mongoose.model('Conversation', conversationSchema);

// module.exports = Conversation;




// const mongoose = require('mongoose');

// const conversationSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true, // We use this to track each user's conversation
//   },
//   userMessage: {
//     type: String,
//     required: true,
//   },
//   botResponse: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Conversation = mongoose.model('Conversation', conversationSchema);

// module.exports = Conversation;












const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  userMessage: {
    type: String,
    required: true,
  },
  botResponse: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
