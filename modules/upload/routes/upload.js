const Route = require("../../../core/models/route");
let express = require('express');
let router = express.Router();
const mkdirp = require('mkdirp');
const path = require('path');
const slug  = require('slugify');
const sharp  = require('sharp');
const BLOG_ADMIN = "BLOG_ADMIN";

router.post('/:type', function(req, res) {
    if(req.files.file === undefined )
        res.send({error: "upload_error", "success": false});

    const dt = new Date();
    const image = req.files.file;
    if(req.params.type == "remember") {
        const folder_path = path.dirname(require.main.filename) + "/public/uploads/remember";
        const split  = image.name.split(".");
        split[0] =  slug(split[0]);
        image.mv(folder_path + "/full/" + split.join(".") , function () {

            console.log(folder_path + "/full/" + split.join("."));

            //On va créer une version resize
            (async () => {
                await sharp(folder_path + "/full/" + split.join("."))
                    .resize({height: 1080, width: 1920})
                    .jpeg({quality: 70})
                    .toFile(folder_path + "/tiny/" +  split[0] + ".jpeg", function (err) {
                        console.log(err);
                    });

                res .status(200)
                    .send({"file": "uploads/remember/tiny/" +  split[0] + ".jpeg", "success":true});
            })();
        });
    }
});

module.exports = new Route('upload', router);