---
permalink: features/helper-classes
cssclasses:
  - table-col-1-150
  - table-full
---
## How to use helper classes

Helper classes are added using the special `cssclasses` [property](https://help.obsidian.md/Editing+and+formatting/Properties). In source mode it should look like this:

```
---
cssclasses:
  - img-grid
---
```

To use multiple classes use the following syntax:

```
---
cssclasses:
  - cards
  - cards-1-1
---
```

## Image grids

Helper class for [[Image grids]] feature

| Class          | Description                                         |
| -------------- | --------------------------------------------------- |
| `img-grid` | Turns consecutive images into columns. To make a new row, add an extra line break between images. |

## Block widths

Enable [[Block width]] features on per-file basis, for [[Tables]], [[Image grids]] and [[Iframes]]

| Class                                   | Description                            |
| --------------------------------------- | -------------------------------------- |
| `wide`                                  | Entire note uses wide line width       |
| `max`                                   | Entire note uses max line width        |
| `table-wide`, `img-wide`, `iframe-wide` | Block type uses wide line width        |
| `table-max`, `img-max`, `iframe-max`    | Block type uses max line width         |
| `table-100`, `img-100`, `iframe-100`    | Block type uses 100% of the pane width |

## Embeds and transclusions

Controls the styling of [[embeds]]

| Class          | Description                                         |
| -------------- | --------------------------------------------------- |
| `embed-strict` | Transclusions appear seamlessly in the flow of text |

## Tables

Controls the row and column styling of [[tables]]

| Class           | Description                                         |
| :-------------- | :-------------------------------------------------- |
| `table-nowrap`  | Disable line wrapping in table cells                |
| `table-wrap`    | Force wrapping in table cells                       |
| `table-center`  | Center small tables narrower than line width        |
| `table-numbers` | Add row numbers to tables                           |
| `table-tabular` | Use tabular figures in tables                       |
| `table-small`   | Use small font size in tables                       |
| `table-tiny`    | Use tiny font size in tables                        |
| `table-lines`   | Add borders around all table cells                  |
| `row-lines`     | Add borders between table rows                      |
| `col-lines`     | Add borders between table columns                   |
| `row-alt`       | Add striped background to alternating table rows    |
| `col-alt`       | Add striped background to alternating table columns |
| `row-highlight` | Highlight rows on hover                             |

## Cards

Helper class for [[Cards]] feature

| Class                 | Description                                      |
| :-------------------- | :----------------------------------------------- |
| `cards` (required)    | Set all Dataview tables to card layout           |
| `list-cards`          | Set all bullet lists to card layout              |
| `cards-align-bottom`  | Align the last element of a card to the bottom   |
| `cards-cover`         | Images are resized to fill the defined space     |
| `cards-16-9`          | Fit images in cards to 16:9 ratio                |
| `cards-1-1`           | Fit images in cards to 1:1 ratio (square)        |
| `cards-2-1`           | Fit images in cards to 2:1 ratio                 |
| `cards-2-3`           | Fit images in cards to 2:3 ratio                 |
| `cards-cols-1` to `8` | Force a specific number of columns (from 1 to 8) |
