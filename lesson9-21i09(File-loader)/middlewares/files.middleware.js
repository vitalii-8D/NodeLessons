const { MAX_PHOTO_SIZE, MAX_DOC_SIZE, PHOTO_MIMETYPES, DOCS_MIMETYPES } = require('../configs/constants');

module.exports = {
    checkFile: (req, res, next) => {
        try {
            const photos = [];
            const docs = [];

            const files = Object.values(req.files);

            for (let i = 0; i < files.length; i++) {
                const { size, mimetype, name } = files[i];

                if ( PHOTO_MIMETYPES.includes(mimetype) ) {
                    if ( size > MAX_PHOTO_SIZE ) {
                        return next(new Error('MAX SIZE'));
                    }
                    photos.push(files[i])
                } else if ( DOCS_MIMETYPES.includes(mimetype) ) {
                    if ( size > MAX_DOC_SIZE ) {
                        return next(new Error('MAX SIZE'));
                    }
                    docs.push(files[i])
                } else {
                    return next(new Error(`Not valid file ${ name }`));
                }
            }

            req.photos = photos;
            req.docs = docs;

            next();
        } catch (e) {
            next(e);
        }
    }
}
