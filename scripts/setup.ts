/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/**
 * Setup
 * =====================
 * Replace package name, authors, url with others values.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as shell from "shelljs";
import { pkgConf } from "yargs";
const replace = require("replace-in-file");
const setup = require("../setup.json");
const pkg = require("../package.json");

(async () => {
	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev-boilerplate\/svelte-webcomponent-boilerplate/g,
			to: setup.github_full_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev\/svelte-webcomponent-boilerplate/g,
			to: setup.github_full_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /githubusercontent.com\/ptkdev-boilerplate/g,
			to: setup.github_repository_url.replace("github.com", "githubusercontent.com"),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /githubusercontent.com\/ptkdev/g,
			to: setup.github_repository_url.replace("github.com", "githubusercontent.com"),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev-boilerplate/g,
			to: setup.github_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev/g,
			to: setup.github_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /@ptkdev\/svelte-webcomponent-boilerplate/g,
			to: setup.package_org !== "" ? `${setup.package_org}/${setup.package_name}` : setup.package_name,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /Svelte WebComponent Boilerplate/g,
			to: setup.display_name,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /Create your HTML5 Web Component with Svelte. Made your web components with this user friendly boilerplate/g,
			to: setup.description,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /Patryk Rzucidło \[@ptkdev\] <support@ptkdev.io> \(https:\/\/ptk.dev\)/g,
			to: setup.author,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /\[Patryk Rzucidło\]\(https:\/\/ptk.dev\) \(\[@PTKDev\]\(https:\/\/twitter.com\/ptkdev\)\) <\[support@ptkdev.io\]\(mailto:support@ptkdev.io\)>/g,
			to: setup.author_markdown,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["wordpress/**/*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /ptkdev/g,
			to: setup.github_nickname,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["wordpress/**/*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /svelte_webcomponent_boilerplate/g,
			to: setup.package_name.replace(/-/g, "_"),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["scripts/wordpress.ts"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /svelte_webcomponent_boilerplate/g,
			to: setup.package_name.replace(/-/g, "_"),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["scripts/wordpress.ts"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /@ptkdev/g,
			to: setup.package_org,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: [".all-contributorsrc"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: /"projectName": "ptkdev-boilerplate\/svelte-webcomponent-boilerplate"/g,
			to: `"projectName": "${setup.github_full_repository_url.replace("github.com/", "")}"`,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: [".all-contributorsrc"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: /"projectOwner": "ptkdev"/g,
			to: `"projectOwner": "${setup.github_nickname}"`,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: [".github/**/*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: /ptkdev/g,
			to: setup.github_nickname,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /svelte-webcomponent-boilerplate/g,
			to: setup.package_name.replace(setup.package_org),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /support@ptkdev.io/g,
			to: setup.email,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace({
			files: ["package.json"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: pkg.version,
			to: "1.0.0",
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	await shell.mv(
		"-f",
		"wordpress/svelte_webcomponent_boilerplate.php",
		`wordpress/${setup.package_name.replace(/-/g, "_")}.php`,
	);
})();
