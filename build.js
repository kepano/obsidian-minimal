// Minimal Theme build script
//
// Compiles src/scss/index.scss into theme.css (compressed) and Minimal.css
// (expanded), then copies theme.css into the test vault defined by
// OBSIDIAN_PATH in .env.
//
// Usage:
//   node build.js          one-off build
//   node build.js --watch  rebuild on changes

const fs = require('node:fs');
const path = require('node:path');
const sass = require('sass');

const SRC = path.join(__dirname, 'src');
const SCSS_ENTRY = path.join(SRC, 'scss/index.scss');
const CSS_DIR = path.join(SRC, 'css');
const LICENSE = path.join(CSS_DIR, 'license.css');
const PLUGIN_COMPAT = path.join(CSS_DIR, 'plugin-compatibility.css');
const STYLE_SETTINGS = path.join(CSS_DIR, 'style-settings.css');

function loadEnv() {
	try {
		const raw = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
		for (const line of raw.split('\n')) {
			const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/i);
			if (!m) continue;
			let val = m[2].trim();
			if ((val.startsWith('"') && val.endsWith('"')) ||
				(val.startsWith("'") && val.endsWith("'"))) {
				val = val.slice(1, -1);
			}
			process.env[m[1]] = val;
		}
	} catch (e) {
		if (e.code !== 'ENOENT') throw e;
	}
}

function build() {
	const t0 = Date.now();
	const expanded = sass.compile(SCSS_ENTRY, { style: 'expanded' }).css;
	// Minification temporarily disabled — re-enable by switching back to 'compressed'.
	// const compressed = sass.compile(SCSS_ENTRY, { style: 'compressed' }).css;

	const license = fs.readFileSync(LICENSE, 'utf8');
	const pluginCompat = fs.readFileSync(PLUGIN_COMPAT, 'utf8');
	const styleSettings = fs.readFileSync(STYLE_SETTINGS, 'utf8');

	const themeCss = [license, expanded, pluginCompat, styleSettings].join('\n');
	const minimalCss = [license, expanded, pluginCompat, styleSettings].join('\n');

	fs.writeFileSync(path.join(__dirname, 'theme.css'), themeCss);
	fs.writeFileSync(path.join(__dirname, 'Minimal.css'), minimalCss);

	if (process.env.OBSIDIAN_PATH && process.env.HOME) {
		const dest = path.join(process.env.HOME, process.env.OBSIDIAN_PATH, 'theme.css');
		try {
			fs.mkdirSync(path.dirname(dest), { recursive: true });
			fs.writeFileSync(dest, themeCss);
		} catch (e) {
			console.warn(`Skipped vault copy: ${e.message}`);
		}
	}

	console.log(`Built in ${Date.now() - t0}ms`);
}

function safeBuild() {
	try { build(); } catch (e) { console.error(e.message); }
}

loadEnv();
safeBuild();

if (process.argv.includes('--watch')) {
	const chokidar = require('chokidar');
	const watcher = chokidar.watch(['src/**/*.scss', 'src/**/*.css'], {
		cwd: __dirname,
		ignoreInitial: true,
	});
	let pending = false;
	const trigger = () => {
		if (pending) return;
		pending = true;
		setTimeout(() => { pending = false; safeBuild(); }, 30);
	};
	watcher.on('all', trigger);
	console.log('Watching src/**/*.{scss,css}...');
}
