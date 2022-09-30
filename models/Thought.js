const { Schema, model } = require("mongoose");
const reaction = require("/Reaction");
// Schema to create Post model
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
      default: Date.now, //current time stamp
    },
    username: {
      type: String,
      required: true,
    },

    reactions: {
      type: Array,
      use: [reaction],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("thoughtCount")
  // Getter
  .get(function () {
    return [this.reaction.length];
  });

// Initialize our thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
