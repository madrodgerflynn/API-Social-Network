const { Schema, model } = require("mongoose");

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      default: false,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now, //current time stamp
    },
    tags: [
      {
        type: String,
        ref: "Tag",
      },
    ],
    text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
postSchema
  .virtual("tagCount")
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Post model
const Post = model("post", postSchema);

module.exports = Post;
