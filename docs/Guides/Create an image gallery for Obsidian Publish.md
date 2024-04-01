---
cssclasses:
  - img-grid
  - img-zoom
permalink: guides/image-gallery
description: Create an image gallery using Minimal for Obsidian Publish. Images can be placed side by side, and clicked to open a zoomed in version.
---
#guides

## Overview

This gallery uses [[image grids]] with [[Minimal for Obsidian Publish]]. Images can be placed side by side, and clicked to open a zoomed in version.

![[eink-mode1.jpg]]
![[eink-mode2.jpg]]

## Requirements

For this guide you will need an [Obsidian Publish](https://obsidian.md/publish) site with a [custom domain](https://help.obsidian.md/Obsidian+Publish/Set+up+a+custom+domain), which is required to use `publish.js` on Obsidian Publish.

## Step 1. Add theme and JS code to your vault

1. Download [[Minimal for Obsidian Publish]] version 1.1+, and add it to your vault.
2. Download [publish.js](https://github.com/kepano/obsidian-minimal-publish/blob/master/publish.js) with the image zoom code, and add it to your vault.

Learn more about how to use `publish.css` and `publish.js` on the official [Obsidian Help site](https://help.obsidian.md/Obsidian+Publish/Customize+your+site).

## Step 2. Add helper classes to your note

For notes where you want to allow zoom, include the `img-zoom` [[Helper classes|helper class]]. You can also include the `img-grid` class if you want to enable [[Image grids]].

```
---
cssclasses:
  - img-grid
  - img-zoom
---
```

From here you can add images to your note following the instructions in [[Image grids]]. Note that the code for image zoom currently only supports local image embeds (not remote assets).

## Step 3. Publish your note and resources

The final step is to publish all the relevant resources:

- Your `publish.js` file
- Your `publish.css` file
- Your note and images

More information can be found on the [Obsidian Help Site](https://help.obsidian.md/Obsidian+Publish/Publish+and+unpublish+notes).

You’re done! Refresh your site to see the image gallery. Note it may require a hard refresh (using `CMD + Shift + R`) or a few minutes to clear the cache.

## Adapting this code to other Publish themes

The resources associated with this feature can be found in the Minimal for Publish [GitHub repo](https://github.com/kepano/obsidian-minimal-publish/tree/master). You can use this to adapt the CSS and JS to other Publish themes. [Image zoom CSS](https://github.com/kepano/obsidian-minimal-publish/blob/master/src/scss/publish/image-zoom.scss)
