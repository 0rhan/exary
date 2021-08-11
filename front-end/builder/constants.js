import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const APP_DIR = resolve(__dirname, "../src/");

const ENTRY_FILE_DIR = `${APP_DIR}/index.tsx`;

const BUILD_DIR = resolve(__dirname, "../build");

const APP_PATH_ALIASES = {
  UI: resolve(__dirname, "../src/UI"),
  Domains: resolve(__dirname, "../src/Domains"),
  State: resolve(__dirname, "../src/State"),
  API: resolve(__dirname, "../src/API"),
};

export { APP_DIR, APP_PATH_ALIASES, ENTRY_FILE_DIR, BUILD_DIR };
