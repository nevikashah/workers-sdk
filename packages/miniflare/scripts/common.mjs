import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const pkgRoot = path.resolve(__dirname, "..");

/**
 * @typedef {object} ~Package
 * @property {string} name
 * @property {string} version
 * @property {Record<string, string>} [dependencies]
 * @property {Record<string, string>} [devDependencies]
 * @property {Record<string, string>} [peerDependencies]
 * @property {Record<string, string>} [optionalDependencies]
 * @property {string[]} [entryPoints]
 */

/**
 * Gets the contents of the package.json file in <pkgRoot>
 * @param {string} pkgRoot
 * @returns {Promise<~Package>}
 */
export async function getPackage(pkgRoot) {
	return JSON.parse(
		await fs.readFile(path.join(pkgRoot, "package.json"), "utf8")
	);
}
