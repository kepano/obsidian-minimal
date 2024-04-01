---
permalink: progress-bars
---
#features #blocks

Progress bars use 0 to 100 numbers to display a completion status. They can be created manually with HTML or automatically generated with [[Dataview]].

Depending on the level of completion, the color of the progress bar changes, using your [[Color schemes|color scheme]] colors.

## HTML example

```html
<progress value="50" max="100"></progress>
```

## Dataview example

Example [[Dataview]] query showing progress bar and percentage number below:

```
= "<progress value='" + (length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100 + "' max='100'></progress>" + "<br>" + round((length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100) + "% completed"
```

The screenshot below shows the output using the default color scheme.

![[minimal-progress-bars.png#interface|500]]