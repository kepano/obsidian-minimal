---
permalink: image-grids
cssclasses:
  - table-col-1-150
  - img-grid
  - img-zoom
---

#features #blocks

## Overview

Image grids are a simple way to arrange [[images]] in columns. This feature is compatible with [[Block width]] options for image widths.

Image grids can be activated globally using [[Minimal Theme Settings]] and [[Hotkeys]], or on a per-file basis using the [[Helper classes]].

![[minimal-img-grid.png]]

## Demo

Image grids are easy to use, and don't rely on any special syntax. All you do is add an extra line break between images to create a row, and columns take care of themselves

![[minimal-img-grid-demo.gif]]

## Known limitations

### Reading mode only

Image grids are only available in reading view. Image grids are not available in Live Preview or PDF exports. For the best user experience, it is recommended to edit image grids via source mode, rather than Live Preview. 

### Publish support

Image grids are compatible with [[Minimal for Obsidian Publish]], however they use a newer feature of CSS `:has()` which is not available on older browsers.

## Hotkeys

- Toggle image grids globally
- Cycle through image block width options

## Helper classes

Use [[Helper classes]] to control image grids on a note

| Class      | Description                              |
| ---------- | ---------------------------------------- |
| `img-grid` | Sets image layout to grid mode           |
| `img-100`  | Image blocks fill 100% of the pane width |
| `img-max`  | Image blocks fill the max line width     |
| `img-wide` | Image blocks fill the wide line width    |

## Settings

Additional options can be accessed via [[Style Settings]] plugin, under **Images**:

**Image grid crop** either _Crop to fit_ which fills the dimensions of each grid cell, or _Show full image_ which turns off cropping and scales down the image to fit fully inside the grid cell.

**Image grid background** can be set to a color, which is useful if you want to retain the masonry look when cropping is turned off.