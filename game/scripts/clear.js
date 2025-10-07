// delete-build.js
const fs = require("fs");
const path = require("path");
const OUTPUT_FOLDER = "../dist";

const buildPath = path.join(__dirname, OUTPUT_FOLDER);

if (fs.existsSync(buildPath)) {
  try {
    fs.rmSync(buildPath, { recursive: true, force: true });
    console.log(`✅ Successfully deleted the ${OUTPUT_FOLDER} folder.`);
  } catch (err) {
    console.error(`❌ Error deleting the ${OUTPUT_FOLDER} folder:`, err);
  }
} else {
  console.log(`ℹ️ No ${OUTPUT_FOLDER} folder found.`);
}
