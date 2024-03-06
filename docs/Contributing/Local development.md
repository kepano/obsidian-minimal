---
permalink: dev
---
#contributing 

To set up local development, follow the instructions below. Minimal uses [Grunt](https://gruntjs.com/) to run a sequence of compilation tasks, and watch the working files to automatically run this sequence whenever changes happen. 

Contributions via pull requests are welcome. You can help with [[Plugin support]], bug fixes, and feature improvements. You can also find *help wanted* issues in the [Minimal](https://github.com/kepano/obsidian-minimal/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) and [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) repos.

## Set up

Install Sass and Grunt

```
sudo gem install sass
npm install -g grunt-cli
npm install
```

## Define your local path

To build the theme directly into your Obsidian vault rename `.env.example` to `.env` and update `OBSIDIAN_PATH` to the local path of your Obsidian theme folder.

## Run

```
npx grunt
```

This builds two files, the `obsidian.css` distribution file (for the community themes store) which is minified and also copied to your vault for live reload, and the `Minimal.css` file which is an unminified copy saved to the project root.