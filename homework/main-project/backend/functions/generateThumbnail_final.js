const { Storage } = require("@google-cloud/storage");

const sharp = require("sharp");

exports.generateThumbnails = async (img) => {
  const bucket = img.bucket;
  const imgPath = img.name;
  const storage = new Storage().bucket(bucket);
  const sizes = [
    { size: 320, name: "s" },
    { size: 640, name: "m" },
    { size: 1280, name: "l" },
  ];

  if (imgPath.includes("thumb/s/")) return;
  if (imgPath.includes("thumb/m/")) return;
  if (imgPath.includes("thumb/l/")) return;

  const result = await Promise.all(
    sizes.map((el) => {
      return new Promise((resolve, rejects) => {
        storage
          .file(imgPath)
          .createReadStream()
          .pipe(sharp().resize({ width: el.size }))
          .pipe(storage.file(`thumb/${el.name}/${imgPath}`).createWriteStream())
          .on("finish", () => resolve(`thumb/${el.name}/${imgPath}`))
          .on("error", () => rejects("ㅈ됐다..."));
      });
    })
  );
};
