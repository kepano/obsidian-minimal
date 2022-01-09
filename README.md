# Minimal

Winner of Obsidian's official [Best Theme award](https://forum.obsidian.md/t/best-of-2020-awards-results/11217) ✨ 

![](cover.png)

Minimal is an Obsidian interface replacement meticulously designed to feel native on desktop, mobile and tablet. You can customize colors, fonts and more with the companion plugins [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) and [Hider](https://github.com/kepano/obsidian-hider).

Support development: **@kepano** on [Twitter](https://www.twitter.com/kepano) or [Buy me a coffee](https://www.buymeacoffee.com/kepano)

<a href="https://www.buymeacoffee.com/kepano"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=kepano&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>

## About Minimal

- [Goals](#goals)
- [Screenshots](#screenshots)
- [Customization](#customization)
- [Plugin support](#plugin-support)
- [Documentation](#documentation)
- [Developers](#developers)
- [Disclaimer](#disclaimer)

## Goals

- Simplify the Obsidian UI for a more focused editing experience
- Follow native interface guidelines for MacOS, iOS and iPadOS
- Make it easy to customize colors, fonts, and display features
- Add advanced layout options for data-rich notes, such as card view, image grids, and full-width tables

## Screenshots

**Background styles** include low contrast, high contrast, and a true black option ideal for OLED devices

![](assets/minimal-variants.png)

**Helper classes** for tables and card layouts allow you to create powerful workflows

![](assets/minimal-movies.png)

Combining **focus mode** with **image grid** and **image width** options allows you to immerse yourself in visual projects

![](assets/minimal-img-grid.png)

Minimal plays well with dozens of popular plugins like **Kanban**, **Dataview**, **Sliding Panes**, **Calendar**, [and more](#plugin-support)

![](assets/minimal-plugins.png)

## Customization

The following features can be accessed using [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) plugin or Style Settings (more on this below)

- Background styles for light and dark mode, including True Black for OLED devices
- Focus mode — hides everything but the text when sidebars are collapsed
- Fancy cursor — uses accent color for the cursor
- Hide sidebar borders
- Trim filenames
- Cursor options for UI elements
- Click + hold to zoom in on images

## Plugin support

### Companion plugins

For customization use [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) or [Style Settings](https://github.com/mgmeyers/obsidian-style-settings). Minimal Theme Settings is best if you want to use [Minimal hotkeys](#hotkeys), while Style Settings has more granular settings for headings and advanced features. Note that running both simultaneously may lead to conflicts.

[Hider](https://github.com/kepano/obsidian-hider) is also recommended to hide UI elements. When using Hider to turn off menu ribbon, it can be accessed by hovering over the bottom left edge of the window.

### Community plugins

Most plugins work well with Minimal, but these plugins have received special love and attention:

- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)
- [Checklist](https://github.com/delashum/obsidian-checklist-plugin)
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
- [Dictionary](https://github.com/phibr0/obsidian-dictionary)
- [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)
- [Git](https://github.com/denolehov/obsidian-git)
- [Kanban](https://github.com/mgmeyers/obsidian-kanban)
- [Outliner](https://github.com/vslinko/obsidian-outliner)
- [QuickAdd](https://github.com/chhoumann/quickadd)
- [Sliding Panes](https://github.com/deathau/sliding-panes-obsidian) — recommended spine width 36px

## Documentation

Further documentation can be found at [publish.obsdian.md/kepano](https://publish.obsidian.md/kepano)

### Image filters

Filters can be added to images to create the following effects. Use them by adding the filter name at the end of the image link, e.g. `![[image.jpeg#invert]]`

| Filter    | Description                                                   |
| :-------- | :------------------------------------------------------------ |
| `#invert` | Invert images in dark mode (great for charts and handwriting) |
| `#circle` | Crop image to a circle |

### CSS helper classes

The following classes can be added on a per-file basis using the `cssClasses` [YAML front matter key](https://help.obsidian.md/Advanced+topics/YAML+front+matter). The classes are composable, so you can include more than one to combine effects.

#### Image grids
Turns consecutive images into columns. To make a new row, add an extra line break between images.

| Class          | Description                                         |
| :------------- | :-------------------------------------------------- |
| `img-grid` | Activate image grids |

#### Line width control for tables, images and iframes

| Class                                   | Description                           |
| :-------------------------------------- | :------------------------------------ |
| `table-100`, `img-100`, `iframe-100`    | Fill 100% of the pane width           |
| `table-max`, `img-max`, `iframe-max`    | Fill the max line width (default 88%) |
| `table-wide`, `img-wide`, `iframe-wide` | Fill the wide line width              |

#### Embeds and transclusions

| Class          | Description                                         |
| :------------- | :-------------------------------------------------- |
| `embed-strict` | Transclusions appear seamlessly in the flow of text |


#### Tables and Dataview

| Class          | Description                                         |
| :------------- | :-------------------------------------------------- |
| `table-nowrap` | Disable line wrapping in table cells                |
| `table-small`  | Use small font size in tables                       |
| `table-tiny`   | Use tiny font size in tables                        |
| `table-lines`  | Add borders around all table cells                  |
| `row-lines`    | Add borders between table rows                      |
| `col-lines`    | Add borders between table columns                   |
| `row-alt`      | Add striped background to alternating table rows    |
| `col-alt`      | Add striped background to alternating table columns |


### Hotkeys

Hotkeys are only available when using the Minimal Theme Settings plugin.

#### Background and borders

- Switch between light and dark mode
- Cycle between light mode styles
- Cycle between dark mode styles
- Toggle sidebar borders

#### Layout control

- Toggle image grids
- Cycle between image width options
- Cycle between table width options
- Cycle between iframe width options

#### Typography

- Increase and decrease body font size

## Developers

### Contributing

If you would like to see Minimal support a plugin, or have found a bug you'd like to help fix, don't hesitate to open a pull request.

### Build instructions

**Set up**

```
sudo gem install sass
npm install -g grunt-cli
npm install
```

**Define local path**

To build directly into your Obsidian vault rename `.env.example` to `.env` and update `OBSIDIAN_PATH` to the local path of your Obsidian theme folder.

**To run**

```
npx grunt
```

This builds two files, the `obsidian.css` distribution file which is minified and also copied to your vault for live reload, and the `Minimal.css` file which is an unminified concatenated copy in the project root.

### Distributing Minimal forks

Minimal is licensed under the MIT License which allows you to modify and redistribute the code, however you must preserve the copyright and license notice in your CSS file. 

If you would like to distribute a fork of Minimal please keep my [Buy me a coffee](https://www.buymeacoffee.com/kepano) link present in your Readme. 

Minimal is frequently updated to stay current with the latest version of Obsidian. To make it easy to stay current with the latest improvements, I recommend using [Github's fork feature](https://docs.github.com/en/get-started/quickstart/fork-a-repo) so that you can merge the latest changes into your fork. If you have any questions don't hesitate to reach me in the Obsidian Discord group. 

## Disclaimer

This theme is provided as is, and is focused on my personal use of Obsidian on Mac OS. As such it is not thoroughly tested across all operating systems and features of Obsidian. 

This theme modifies significant parts of the Obsidian interface, so it might break with future updates. It may also be incompatible with other bits of custom CSS you have. The theme file is organized in such a way that you can comment out sections that may be causing conflicts.