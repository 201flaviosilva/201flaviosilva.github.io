import fs from "fs-extra";
import path from "path";

const OUTPUT = "dist";
const OUTPUT_PROJECTS = "_";
const PROJECTS = [{ path: "game", build: "dist" }];

clear();
copyPDFtoDist();
PROJECTS.forEach(copyFolder);

async function clear() {
  const buildPath = path.resolve(`./${OUTPUT}`);

  if (fs.existsSync(buildPath)) {
    try {
      fs.rmSync(buildPath, { recursive: true, force: true });
      console.log(`✅ Successfully deleted the ${OUTPUT} folder.`);
    } catch (err) {
      console.error(`❌ Error deleting the ${OUTPUT} folder:`, err);
    }
  } else {
    console.log(`!! -> No ${OUTPUT} folder found.`);
  }
}

async function copyFolder(project) {
  try {
    // Define paths
    const sourceDir = path.resolve(`./${project.path}/${project.build}`);
    const targetDir = path.resolve(
      `./${OUTPUT}/${OUTPUT_PROJECTS}/${project.path}`
    );

    // Ensure destination directory exists
    await fs.ensureDir(path.dirname(targetDir));

    // Copy and rename folder
    await fs.copy(sourceDir, targetDir);

    console.log(`✅ Successfully copied "${sourceDir}" to "${targetDir}"`);
  } catch (err) {
    console.error(`❌ Error copying folder : ${project.path}`, err);
  }
}

async function copyPDFtoDist() {
  try {
    const sourceDir = path.resolve("./PDF");
    const targetDir = path.resolve(OUTPUT);

    // Ensure destination exists
    await fs.ensureDir(targetDir);

    // Copy contents of ./PDF into ./dist
    await fs.copy(sourceDir, targetDir, { overwrite: true });

    console.log(`✅ Copied all contents from "${sourceDir}" to "${targetDir}"`);
  } catch (err) {
    console.error("❌ Error copying files:", err);
  }
}
