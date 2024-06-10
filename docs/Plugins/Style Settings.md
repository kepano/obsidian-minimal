---
permalink: plugins/style-settings
cssclasses:
  - table-col-1-200
  - table-full
description: Style Settings enables you to customize Minimal's colors, font sizes, font styles, and many more details.
---
#plugins

[Open plugin in Obsidian](obsidian://show-plugin?id=obsidian-style-settings)

## Overview

Style Settings enables you to customize Minimal's colors, font sizes, font styles, and many more details. While [[Minimal Theme Settings]] plugin is necessary for [[Hotkeys]] and  basic customization, the Style Settings plugin offers much deeper customization for all the nitty gritty details of your Obsidian interface.

To see your changes more easily, open Style Settings in a new pane by using the command palette (`CMD + P` by default).

## Importing and exporting your settings

Style Settings offers the option to share your customizations by using the **Import** and **Export** buttons in the top right corner of the Style Settings pane. 

Note that when using the **Export** functionality, all of your saved Style Settings preferences across all themes you've modified will be exported. You may need to edit the output to only include the styles that you want to share.

You can find and share Minimal color schemes in the [Obsidian forum thread](https://forum.obsidian.md/t/share-your-minimal-theme-screenshots-configuration/8983) or in the the [Minimal channel](https://discord.com/channels/686053708261228577/931008597557649410) on the official [Obsidian Discord](https://discord.gg/veuWUTm).

## Minimal settings

### Interface colors

Background and border colors used throughout the interface

| Setting                  | Variable                                 |
| ------------------------ | ---------------------------------------- |
| Base color               | `--base-h`, `--base-s`, `--base-l`       |
| Primary background       | `--bg1`                                  |
| Secondary background     | `--bg2`                                  |
| Active background        | `--bg3`                                  |
| Border color             | `--ui1`                                  |
| Highlighted border color | `--ui2`                                  |
| Active border color      | `--ui3`                                  |

### Accent color

Used for links, buttons and other interactive elements

| Setting                  | Variable |
| ------------------------ | -------- |
| Accent color             | `--ax1`  |
| Accent color (hover)     | `--ax2`  |
| Accent color interactive | `--ax3`  |
| Text on accent           | `--sp1`  |

### Extended colors

Colors used for [[Progress bars]], [[Charts]], [[Checklists]], [[Graphs]], syntax highlighting, colorful headings, and Publish status

| Setting | Variable   |
| ------- | ---------- |
| Red     | `--red`    |
| Orange  | `--orange` |
| Yellow  | `--yellow` |
| Green   | `--green`  |
| Cyan    | `--cyan`   |
| Blue    | `--blue`   |
| Purple  | `--purple` |
| Pink    | `--pink`   |

### Active line

Define the [[Active line highlighting]] feature and background color

| Setting                | Variable           |
| ---------------------- | ------------------ |
| Highlight active line  |                    |
| Active line background | `--active-line-bg` |

### Blockquotes

| Setting                      | Variable                        |
| ---------------------------- | ------------------------------- |
| Blockquotes text color       | `--blockquote-color`            |
| Blockquotes background color | `--blockquote-background-color` |
| Blockquotes border color     | `--blockquote-border-color`     |
| Blockquotes border thickness | `--blockquote-border-thickness` |
| Blockquotes font size        | `--blockquote-size`             |
| Blockquotes font style       | `--blockquote-font-style`       |

### Callouts

| Setting        | Variable               |
| -------------- | ---------------------- |
| Color blending | `--callout-blend-mode` |

### Code blocks

For [[Code blocks]]

| Setting               | Variable            |
| --------------------- | ------------------- |
| Code font size        | `--code-font-size`  |
| Scroll long lines     |                     |
| Code background color | `--code-background` |
| Code text color       | `--code-normal`     |

#### Syntax highlighting

| Setting               | Variable             |
| --------------------- | -------------------- |
| Syntax: comments      | `--code-comment`     |
| Syntax: functions     | `--code-function`    |
| Syntax: keywords      | `--code-keyword`     |
| Syntax: important     | `--code-important`   |
| Syntax: operators     | `--code-operator`    |
| Syntax: properties    | `--code-property`    |
| Syntax: punctuation   | `--code-punctuation` |
| Syntax: strings       | `--code-string`      |
| Syntax: tags          | `--code-tag`         |
| Syntax: values        | `--code-value`       |

### Dataview

For [[Dataview]] plugin

| Setting                       | Variable          |
| ----------------------------- | ----------------- |
| Trim Dataview columns         |                   |
| Force table lists inline      |                   |
| Dataview maximum column width | `--max-col-width` |

### Embeds and transclusions

For [[Embeds]]

| Setting                         | Variable                   |
| ------------------------------- | -------------------------- |
| Use strict embed style globally |                            |
| Hide embed titles               |                            |
| Underline embedded text         |                            |
| Embedded text underline style   | `--embed-decoration-style` |
| Embedded text underline color   | `--embed-decoration-color` |
| Embed background                | `--embed-background`       |

### Graphs

Node colors in [[Graphs]]

| Setting                  | Variable            |
| ------------------------ | ------------------- |
| Node color               | `--graph-node`            |
| Node color (active)      | `--graph-node-focused`    |
| Node color (tags)        | `--graph-node-tag`        |
| Node color (attachments) | `--graph-node-attachment` |
| Node color (unresolved)  | `--graph-node-unresolved` |

### Headings

Define the appearance of headings. The following settings are available for each heading type from H1 to H6, adjust variable prefix accordingly from `--h1` to `--h6`

| Setting              | Variable       |
| -------------------- | -------------- |
| Heading font         | `--h1-font`    | 
| Heading font size    | `--h1`         |
| Heading font weight  | `--h1-weight`  |
| Heading font color   | `--h1-color`   |
| Heading font variant | `--h1-variant` |
| Heading font style   | `--h1-style`   |
| Heading divider line |                |

### Icons

Define the color and opacity of icons found through the interface on buttons and tabs

| Setting             | Variable              |
| ------------------- | --------------------- |
| Icon opacity        | `--icon-muted`        |
| Icon color          | `--icon-color`        |
| Icon color (hover)  | `--icon-color-hover`  |
| Icon color (active) | `--icon-color-active` |

### Images

Define styles for [[Images]]

| Setting                    | Variable         |
| -------------------------- | ---------------- |
| Image opacity in dark mode | `--images-muted` |
| Disable image zoom         |                  |

### Indentation Guides

| Setting                               | Variable                           |
| ------------------------------------- | ---------------------------------- |
| Horizontal adjustment in reading mode | `--ig-adjust-reading`              |
| Horizontal adjustment in editing mode | `--ig-adjust-edit`                 |
| Indentation guide color               | `--indentation-guide-color`        |
| Indentation guide color (active)      | `--indentation-guide-color-active` |

### Links

Defines the color of links

| Setting                         | Variable                             |
| ------------------------------- | ------------------------------------ |
| Internal link color             | `--link-color`                       |
| Internal link color (hover)     | `--link-color-hover`                 |
| Unresolved link opacity         | `--link-unresolved-opacity`          |
| Unresolved link color           | `--link-unresolved-color`            |
| Unresolved link underline color | `--link-unresolved-decoration-color` |
| External link color             | `--link-external-color`              |
| External link color (hover)     | `--link-external-color-hover`        |

### Lists and checkboxes

Define the style of [[Checklists]]

| Setting                 | Variable           |
| ----------------------- | ------------------ |
| Checkbox color          | `--checkbox-color` |
| Checkbox shape          |                    |
| Strike completed tasks  |                    |
| List item spacing       | `--list-spacing`   |
| Nested list indentation | `--list-indent`    |

### Progress bars

Define the style of [[Progress bars]]

| Setting                      | Variable               |
| ---------------------------- | ---------------------- |
| Completed progress bar color | `--progress-completed` |

## Properties

Define the style of properties

| Setting                    | Variable                 |
| -------------------------- | ------------------------ |
| Hide properties heading    |                          |
| Hide "Add property" button |                          |
| Hide property icons        |                          |
| Property row lines         |                          |
| Property name width        | `--metadata-label-width` |

### Sidebars

Define the [[Tab styles]] and other sidebar settings

| Setting                    | Variable                       |
| -------------------------- | ------------------------------ |
| Sidebar tab style          |                                |
| Sidebar tab names          |                                |
| Mobile left sidebar width  | `--mobile-left-sidebar-width`  |
| Mobile right sidebar width | `--mobile-right-sidebar-width` |

### Tables

Define the appearance of [[Tables]]. These settings can also be defined per-file using the [[Tables|table helper classes]]

| Setting               | Variable            |
| --------------------- | ------------------- |
| Table font size       | `--table-font-size` |
| Maximize table width  |                     |
| Row lines             |                     |
| Column lines          |                     |
| Cell lines            |                     |
| Striped rows          |                     |
| Striped columns       |                     |
| Tabular figures       |                     |
| Row numbers           |                     |
| Disable line wrap     |                     |
| Highlight active row  |                     |
| Active row background | `--row-color-hover` |

### Tabs

Defines [[Tab styles]] in the main window (for sidebar tab styles go to **Sidebars** section)

| Setting                 | Variable                          |
| ----------------------- | --------------------------------- |
| Tab bar height          | `--header-height`                 |
| Tab style               |                                   |
| Tab text color          | `--minimal-tab-text-color`        |
| Tab text color (active) | `--minimal-tab-text-color-active` |

### Tab stacks

| Setting                | Variable                     |
| ---------------------- | ---------------------------- |
| Stacked width          | `--tab-stacked-pane-width`   |
| Spine width            | `--tab-stacked-header-width` |
| Spine text orientation |                              |

### Tags

| Setting                      | Variable             |
| ---------------------------- | -------------------- |
| Plain tags                   |                      |
| Tag shape                    | `--tag-radius`       |
| Tag border width             | `--tag-border-width` |
| Tag text color               | `--tag-color`        |
| Tag background color         | `--tag-bg`           |
| Tag background color (hover) | `--tab-bg2`          |

### Text

| Setting                     | Variable         | Description                                                              |
| --------------------------- | ---------------- | ------------------------------------------------------------------------ |
| Normal text color           | `--tx1`          |                                                                          |
| Selected text background    | `--hl1`          |                                                                          |
| Highlighted text background | `--hl2`          |                                                                          |
| Muted text color            | `--tx2`          | For secondary text such as note titles in the sidebar and table headings |
| Faint text color            | `--tx3`          | For tertiary text such as input placeholders, disabled statuses          |
| Italic text color           | `--italic-color` |                                                                          |
| Bold text color             | `--bold-color`   |                                                                          |
| Bold text weight            | `--bold-modifier` |                                                                          |
| Paragraph spacing           | `--spacing-p`    | Space between paragraphs in reading mode                                 |

### Titles

#### Tab title bar

Tab title bar must be turned on in Appearance settings

| Setting                         | Variable                    |
| ------------------------------- | --------------------------- |
| Tab title visibility            |                             |
| Tab title font size             | `--file-header-font-size`   |
| Title font weight               | `--file-header-font-weight` |
| Tab title alignment             | `--file-header-justify`     |
| Tab title text color (active)   | `--title-color`             |
| Tab title text color (inactive) | `--title-color-inactive`    |

#### Inline title

Inline titles must be turned on in Appearance settings

| Setting                          | Variable                |
| -------------------------------- | ----------------------- |
| Inline title font                | `--inline-title-font`   |
| Inline title font size           | `--inline-title-size`   |
| Inline title font weight         | `--inline-title-weight` |
| Inline title text color (active) | `--inline-title-color`  |

### Translucency

For fine-grained translucency preferences

| Setting                      | Variable                             |
| ---------------------------- | ------------------------------------ |
| Translucent background color | `--workspace-background-translucent` |

### Window frame

Settings for [[Colorful frame]]

| Setting                      | Variable                        |
| ---------------------------- | ------------------------------- |
| Hide window frame title      |                                 |
| Frame background             | `--frame-background`            |
| Frame icon color             | `--frame-icon-color`            |
| Frame title color (focused)  | `--titlebar-text-color-focused` |
| Frame title color (inactive) | `--titlebar-text-color`         |
| Frame title font weight      | `--titlebar-text-weight`        |

## Minimal Cards

For use with [[Cards]]

| Setting                      | Variable               |
| ---------------------------- | ---------------------- |
| Card minimum width           | `--cards-min-width`    |
| Card maximum width           | `--cards-max-width`    |
| Card minimum width on mobile | `--cards-mobile-width` |
| Card padding                 | `--cards-padding`      |
| Card maximum image height    | `--cards-image-height` |
| Card border width            | `--cards-border-width` |
| Card background color        | `--cards-background`   |

## Minimal Advanced Settings

| Settings             | Variable          |
| -------------------- | ----------------- |
| Display window title |                   |
| Cursor style         | `--cursor`        |
| Smaller font size    | `--font-smaller`  |
| Smallest font size   | `--font-smallest` |

