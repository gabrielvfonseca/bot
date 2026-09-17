import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { renderTokensCss } from "./tokens.js";

writeFileSync(fileURLToPath(new URL("./tokens.css", import.meta.url)), renderTokensCss());
