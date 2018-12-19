import * as fs from "fs";
import * as path from "path";

const files = fs.readdirSync(path.join(__dirname, "pob/Uniques"));

if (!fs.existsSync(path.join(__dirname, "uniques")))
  fs.mkdirSync(path.join(__dirname, "uniques"));

for (const file of files) {
  let raw_data = fs
    .readFileSync(path.join(__dirname, "pob/Uniques", file))
    .toString();

  const start = raw_data.indexOf("[[");
  const end = raw_data.lastIndexOf("]]");

  raw_data = raw_data.substring(start + 2, end);

  const raw_items = raw_data.split("]],[[").map(raw => raw.trim());

  fs.writeFileSync(
    path.join(__dirname, "uniques", file.replace("lua", "dat")),
    raw_items.join("\n\n")
  );
}
