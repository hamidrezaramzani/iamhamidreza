const mongoose = require("mongoose");

const ExperienceModel = new mongoose.Schema(
  {
    job_stack: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
    },
    description: {
      type: String,
      required: true,
    },
    is_current: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceModel);
