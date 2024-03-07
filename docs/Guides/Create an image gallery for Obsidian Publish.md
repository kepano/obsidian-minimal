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

For this guide you will need an [Obsidian Publish](https://obsidian.md/publish) site with the following:

- [[Minimal for Obsidian Publish]] version 1.1 or above
- A [custom domain](https://help.obsidian.md/Obsidian+Publish/Set+up+a+custom+domain), which is required to use `publish.js` on Obsidian Publish

## Step 1. Add the zoom code to your Publish Javascript file

Learn how to add a `publish.js` file on the official [Obsidian Help site](https://help.obsidian.md/Obsidian+Publish/Customize+your+site).

In your `publish.js` file, add the following code:

```js
publish.registerMarkdownPostProcessor(async (el, ctx) => {
  const images = el.querySelectorAll('.internal-embed');
  images.forEach(image => {
    image.addEventListener('click', function() {
      const lightboxDiv = document.createElement('div');
      lightboxDiv.classList.add('lightbox');
      const contentToMove = this.cloneNode(true);
      lightboxDiv.appendChild(contentToMove);
      document.body.appendChild(lightboxDiv);
      const removeLightbox = () => {
        document.body.removeChild(lightboxDiv);
        document.removeEventListener('keydown', escapeKeyListener);
      };
      lightboxDiv.addEventListener('click', removeLightbox);
      const escapeKeyListener = (event) => {
        if (event.key === "Escape") {
          removeLightbox();
        }
      };
      document.addEventListener('keydown', escapeKeyListener);
    });
  });
});

```

## Step 2. Add helper classes to your note

For notes where you want to allow zoom, include the `img-zoom` [[Helper classes|helper class]]. You can also include the `img-grid` class if you want to enable [[Image grids]].

```
---
cssclasses:
  - img-grid
  - img-zoom
---
```

## Step 3. Publish your note and resources

The final step is to publish all the relevant resources:

- Your `publish.js` file
- Your `publish.css` file
- Your note and relevant attachments

More information can be found on the [Obsidian Help Site](https://help.obsidian.md/Obsidian+Publish/Publish+and+unpublish+notes).

You’re done! Refresh your site to see the image gallery. Note it may require a hard refresh (using `CMD + Shift + R`) or a few minutes to clear the cache.