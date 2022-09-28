const { Schema, model } = require("mongoose");

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
      use: reactionSchema,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reationBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
postSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return [this.reactions.length];
  });

// Initialize our Post model
const Post = model("post", postSchema);

module.exports = Post;
