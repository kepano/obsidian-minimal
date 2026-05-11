# Contributing to Minimal

Minimal is considered feature complete. The main goal going forward is keeping it up to date with new Obsidian releases, so the most useful contributions are bug fixes and compatibility patches for new Obsidian versions. New features are unlikely to be merged.

## Reporting issues

Before opening an issue, please search [existing issues](https://github.com/kepano/obsidian-minimal/issues) to avoid duplicates. When reporting a bug, include:

- Obsidian version and operating system
- Minimal version
- Steps to reproduce, and a screenshot if relevant
- Whether the issue occurs with other themes disabled

## Submitting pull requests

1. Fork the repo and create a branch from `master`.
2. Make your changes in `src/scss` — never edit `obsidian.css` or `Minimal.css` directly, as these are generated.
3. Build locally and test in Obsidian (see [build instructions](README.md#build-instructions)).
4. Open a pull request with a short description of what changed and why.

Keep PRs focused — one fix or feature per PR makes review easier.

## Adding plugin support

Plugin styles live in [`src/scss/plugins`](src/scss/plugins). Use existing files as a template, and try to follow Minimal's color variables and spacing conventions so the plugin feels at home.

## Improving the documentation

The documentation site at [minimal.guide](https://minimal.guide) is also open to contributions. If you spot something out of date, missing, or unclear, edits and additions are welcome.

## Questions

Join the [Minimal channel](https://discord.com/channels/686053708261228577/931008597557649410) on the official [Obsidian Discord](https://discord.gg/veuWUTm).
