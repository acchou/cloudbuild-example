import { tmpdir } from "os";
import { mkdirSync } from "fs";
import { join } from "path";
import * as uuid from "uuid/v4";

const dir = tmpdir();
const cloudifyDir = join(dir, "cloudify");
console.log(`mkdir ${cloudifyDir}`);
mkdirSync(cloudifyDir, { recursive: true });

const uuidDir = join(cloudifyDir, uuid());
console.log(`mkdir ${uuidDir}`);
mkdirSync(uuidDir);

console.log("done");
