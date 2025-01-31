const exec = require("child_process").exec;
const fs = require("fs");
const path = require("path");

// find the styles css files
const files = getFilesFromPath("./dist/fipco/browser/", ".css");
let data = [];

if (!files && files.length <= 0) {
  console.log("cannot find style files to purge");
  return;
}

for (let f of files) {
  // get original file size
  const originalSize =
    getFilesizeInKiloBytes("./dist/fipco/browser/" + f) + "kb";
  var o = { file: f, originalSize: originalSize, newSize: "" };
  data.push(o);
}
console.log("Run PurgeCSS...");
exec(
  "./node_modules/purgecss/bin/purgecss.js -css ./dist/fipco/browser/*.css --content ./dist/fipco/browser/index.html ./dist/fipco/browser/*.js --safelist '.*flags.*\\.png' -o ./dist/fipco/browser/",
  function (error, stdout, stderr) {
    console.log("PurgeCSS done");

    for (let d of data) {
      // get new file size
      const newSize =
        getFilesizeInKiloBytes("./dist/fipco/browser/" + d.file) + "kb";
      d.newSize = newSize;
    }
    console.table(data);
  }
);

function getFilesizeInKiloBytes(filename) {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats.size / 1024;
  return fileSizeInBytes.toFixed(2);
}

function getFilesFromPath(dir, extension) {
  let files = fs.readdirSync(dir);
  return files.filter((e) => path.extname(e).toLowerCase() === extension);
}
