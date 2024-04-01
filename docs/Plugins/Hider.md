---
permalink: plugins/hider
---
#plugins

[Open plugin in Obsidian](obsidian://show-plugin?id=obsidian-hider)

## Overview

This plugin enables you to hide parts of the Obsidian UI. It can help you create a distraction-free inerface, and configure Obsidian for a more [[macOS configuration|macOS-native appearance]].

- Hide app ribbon (can be bound to a hotkey)
- Hide status bar (can be bound to a hotkey)
- Hide vault name
- Hide window frame
- Hide scrollbars
- Hide tooltips
- Hide search suggestions
- Hide metadata block in Reading view

## Developers

Hider injects the following classes on the `body` element when features are toggled on. These can be useful when combined with [[CSS snippets]].

| Toggle | Class |
| ------ | ----- |
| Title bar | `.hider-frameless` |
| App ribbon | `.hider-ribbon` |
| Vault name | `.hider-vault` |
| Status bar | `.hider-status` |
| Scrollbars | `.hider-scroll` |
| Search suggestions | `.hider-search-suggestions` |
| Tooltips | `.hider-tooltips` |
| Instructions | `.hider-instructions` |
| Metadata | `.hider-meta` |