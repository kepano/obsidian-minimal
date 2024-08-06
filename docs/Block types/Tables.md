---
permalink: tables
cssclasses:
  - table-col-1-150
---

#blocks

Tables can be created using Markdown, or automatically generated with [[Dataview]]. Tables in Minimal follow your [[Block width]] settings.

## Dataview Settings

Use [[Minimal Theme Settings]] to define the following settings:

- **Trim Dataview columns** disables text wrapping in [[Dataview]] cells, equivalent of globally setting `table-nowrap` for Dataview only
- **Dataview maximum column width** sets the width before trimming occurs

## Hotkeys

You can use [[Hotkeys]] to adjust tables globally:

- Cycle between global table width options

## Style Settings

Use [[Style Settings]] plugin to control table styles at the global level

![](https://kep-log.s3-us-west-2.amazonaws.com/minimal-table-styles.png#interface)

## Helper classes

Use [[Helper classes]] to control table styles at the individual note level

| Class           | Description                                         |
|:--------------- |:--------------------------------------------------- |
| `table-100`     | Table block fills 100% of the pane width            |
| `table-max`     | Table block fills the max line width                |
| `table-wide`    | Table block fills the wide line width               |
| `table-nowrap`  | Disable line wrapping in table cells                |
| `table-wrap`    | Force line wrapping in table cells                  |
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
| `row-hover`     | Highlight rows on hover                             | 
