const fs = require("fs");
const path = require("path");
const target = path.join(__dirname, "..", "out", ".nojekyll");

try {
  fs.writeFileSync(target, "", { encoding: "utf8" });
  console.log("Created out/.nojekyll");
} catch (error) {
  console.error("Unable to create .nojekyll:", error);
  process.exit(1);
}
