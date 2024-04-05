---
permalink: cards
cssclasses:
  - table-col-1-150
  - table-100
  - img-zoom
---
#features #blocks

## Overview

With Minimal you can transform [[Dataview]] tables or bullet lists into cards. To use cards add one of the following [[Helper classes|helper class]] to the `cssclasses` property:

- `cards` to turn all Dataview tables in your note into cards
- `list-cards` to turn all bullet lists in your note into cards

## Demo

### Turn Dataview tables into cards

Use `cards` to turn all Dataview tables in your note into cards

<iframe width="100%" height="315" src="https://www.youtube.com/embed/NZrj4NaJtkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Turn bullet lists into cards

Use `list-cards` to turn all bullet lists in your note into cards

<iframe width="100%" height="315" src="https://www.youtube.com/embed/OjMdROvNmq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Screenshots

These examples show cards being used to [[Create a movie database|create a personal movie database]].

![[movie-gallery.png]]
![[movie-gallery-alt.png]]

## Helper classes

To use Cards, add the `cards` or `list-cards` [[Helper classes|helper class]] on a note. Because Cards use [[Tables]] behind the scenes, they are also compatible with [[Block width]] table options.

The following helper classes are available to further customize cards in a specific note. The classes are composable, but `cards` or `list-cards` must be present for the other classes to work.

| Class                 | Description                                      |
|:--------------------- |:------------------------------------------------ |
| `cards`               | Set all Dataview tables to card layout           |
| `list-cards`          | Set all bullet lists to card layout              | 
| `table-100`           | Cards block fills 100% of the pane width         |
| `table-max`           | Cards block fills the max line width             |
| `table-wide`          | Cards block fills the wide line width            |
| `cards-align-bottom`  | Align the last element of a card to the bottom   |
| `cards-cover`         | Images are resized to fill the defined space     |
| `cards-16-9`          | Fit images in cards to 16:9 ratio                |
| `cards-1-1`           | Fit images in cards to 1:1 ratio (square)        |
| `cards-2-1`           | Fit images in cards to 2:1 ratio                 |
| `cards-2-3`           | Fit images in cards to 2:3 ratio                 |
| `cards-cols-1` to `8` | Force a specific number of columns (from 1 to 8) |

## Style Settings

With [[Style Settings]] you can additionally tweak the following settings for cards:

- Minimum width
- Maximum width
- Minimum width on mobile
- Padding
- Maximum image height
- Border width
- Background color

