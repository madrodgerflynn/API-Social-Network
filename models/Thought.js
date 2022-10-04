const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
// Schema to create thoughts model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: false,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(), //current time stamp
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

//A virtual that counts reactions
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

function formatDate(date) {
  return date.toDateString();
}

// Initialize our thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
