const { Schema, Types } = require("mongoose");

// Schema to create reaction model
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
reactionSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return [this.reaction.length];
  });
const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
