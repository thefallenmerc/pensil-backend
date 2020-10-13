const Resource = require('./resource');

module.exports = class VideoResource extends Resource {

    format(resource) {
        return {
            id: resource._id,
            title: resource.title,
            subject: resource.subject.name,
            batch: resource.batch ? resource.batch._id : null,
            description: resource.description,
            duration: resource.duration,
            thumbnailUrl: resource.thumbnailUrl,
            videoUrl: resource.videoUrl,
            isPrivate: resource.isPrivate,
            quality: resource.quality,
            createdAt: resource.createdAt,
            updatedAt: resource.updatedAt,
        };
    }

}