const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        title: String,
        description: {
            required: false,
            type: String,
        },
        duration: {
            required: false,
            type: String,
        },
        batch: {
            required: true,
            type: mongoose.Types.ObjectId,
            ref: "Batch"
        },
        subject: {
            required: true,
            type: mongoose.Types.ObjectId,
            ref: "Subject"
        },
        thumbnailUrl: {
            required: false,
            type: String
        },
        videoUrl: String,
        quality: {
            required: false,
            type: String,
        },
        isPrivate: {
            required: false,
            default: true,
            type: Boolean
        },
    },
    {
        timestamps: true,
        toObject: {
            transform: (obj, ret) => {
                delete ret.password;
                delete ret.__v;
                ret.id = ret._id;
                delete ret._id;
                return ret;
            }
        }
    }
);

const Video = mongoose.model("Video", Schema);

module.exports = Video;