

const { Storage } = require("@google-cloud/storage");
const sharp = require('sharp');





const generateThumbs = async (img) => {
    const bucket = Storage.bucket(img.bucket)
    const filePath = img.name
    const fileName = filePath.split('/')



})  