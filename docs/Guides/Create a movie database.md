---
permalink: guides/movie-database
---
#guides

## Overview

In this guide we will create a personal database of movies and TV shows in Obsidian with a [[Cards]] gallery of posters. You'll be able to easily save movies to your watchlist, and add ratings to movies you've watched. 

This guide will cover the following steps:

1. Adding the OMDb lookup script to your vault
2. Creating your movie note template
3. Setting up a [[QuickAdd]] macro to fetch movies
4. Creating an sample note for a movie
5. Creating a [[Cards]] view to see all your movies in one place

The end result will look something like this:

![[movie-gallery.png]]
![[movie-gallery-alt.png]]

## Requirements

For this guide you will need Minimal theme, along with the following plugins installed and enabled:

- [[Minimal Theme Settings]] ([open in Obsidian](obsidian://show-plugin?id=obsidian-minimal-settings))
- [[Dataview]] ([open in Obsidian](obsidian://show-plugin?id=dataview))
- [[QuickAdd]] ([open in Obsidian](obsidian://show-plugin?id=quickadd))

In addition you will need an [OMDb API](http://www.omdbapi.com/) key. [You can request one for free here.](http://www.omdbapi.com/apikey.aspx) OMDb is an open movie database which we will use to automatically fetch movie metadata.

## Step 1. Add the QuickAdd movies.js script to your vault

This script will be used to fetch movie data from OMDb using the Obsidian command palette:

- Add the [movies.js script](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Attachments/movies.js) to your Obsidian vault, e.g. inside of a `/Scripts` folder to keep things organized
- [Here is a video](https://www.youtube.com/watch?v=gYK3VDQsZJo&t=1730s) about adding QuickAdd scripts, if you need more help

## Step 2. Create your movie template

Create a new note called something like "Movie Template". You can place this note in any folder in your vault, e.g. where you store templates for the Templates plugin.

This template will be used to populate metadata for each movie/show that you add to your Obsidian vault. It can use any of the metadata provided by OMDb, as well as special fields such as the current date.

### Example template

Below is an example template that sets the metadata as YAML frontmatter (between the `---` at the top). Note that some values are between quotation marks, and others are not. This is intentional to make sure the metadata is parsed correctly for text, numbers, dates and lists.

```
---
category: "{{VALUE:typeLink}}"
poster: "{{VALUE:Poster}}"
imdbId: "{{VALUE:imdbID}}"
scoreImdb: "{{VALUE:imdbRating}}"
length: "{{VALUE:Runtime}}"
director: {{VALUE:directorLink}}
genre: {{VALUE:genreLinks}}
year: {{VALUE:Year}}
cast: {{VALUE:actorLinks}}
plot: "{{VALUE:Plot}}"
watchlist: {{DATE:gggg-MM-DD}}
tags: 
  - movies
  - to-watch
rating:
---
```

### All available OMDb metadata

Below is an example of all the metadata that OMDb provides for the film Pulp Fiction. You can use any of the fields (e.g. "Title", "Year", etc) in your template.

```json
{
  Title: "Pulp Fiction",
  Year: "1994",
  Rated: "R",
  Released: "14 Oct 1994",
  Runtime: "154 min",
  Genre: "Crime, Drama",
  Director: "Quentin Tarantino",
  Writer: "Quentin Tarantino, Roger Avary",
  Actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
  Plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  Language: "English, Spanish, French",
  Country: "United States",
  Awards: "Won 1 Oscar. 70 wins & 75 nominations total",
  Poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  Metascore: "94",
  imdbRating: "8.9",
  imdbVotes: "1,949,605",
  imdbID: "tt0110912",
  Type: "movie",
  DVD: "20 Aug 2002",
  BoxOffice: "$107,928,762",
  Production: "N/A",
  Website: "N/A",
  Response: "True"
}
```

## Step 3. Create a macro in QuickAdd

Macros in [[QuickAdd]] allow you to automatically run a series of actions in succession. Here we will create a command palette action that runs the macro.

The macro will initiate the script you added in Step 1 to automatically fetch movie metadata from OMDb, then create a new note using your template from Step 2.

1.  Go to **Obsidian Settings > QuickAdd**
2. Click **Manage Macros**
3. Give your macro a name, e.g. "Lookup Movie"
4. Click **Configure** on the macro
5. Under **User Scripts**, select "movie" and click **Add**
6. Click the cog icon next to the movie script and enter your OMDb API key
7. Click **Template**
    1. Click on the cog next to Untitled Template Choice
    2. Choose the Movie template you created
    3. Enable **File Name Format** and use `{{VALUE:fileName}}` as the file name. The `fileName` value takes the `Title` of the movie/show and removes any illegal characters
    4. Decide on any other settings, such as the folder to create movie notes in
8. Close all the popup modals and go back to the **Settings > QuickAdd** screen
9. In the dropdown next to the **Add Choice** button choose **Macro**
	1. Give your command a name like "Add Movie" then click **Add Choice**
	2. Click the cog next to your Add Movie macro and choose the "Lookup Movie" macro you just created
	3. Toggle the lightning bolt icon which will make this macro available from your main command palette

## Step 4. Create a sample movie note

Let's give your new command a test run!

1. Launch the command palette with `CMD + P` (or your preferred hotkey)
2. Type "Add Movie" (i.e. the name of your macro command)
3. Enter a movie title
4. You should see search results from OMDb appear
5. Select the movie of your choice from the results
6. You should automatically see a new note open with your template pre-filled

## Step 5. Set up your cards view gallery

To see all of the movies you saved in one place, create a new note called something like "Movie Gallery".

At the top of your note add the following [[Helper classes]], only `cards` is necessary but the other [[Cards]] helpers provide nicer formatting for posters

```
---
cssclasses:
  - cards
  - cards-cover
  - cards-2-3
  - table-max
---
```

Below this, copy paste the following [[Dataview]] query which will display all notes with the tag `#movies` that have a poster

<pre>
```dataview
table without id 
	("![](" + poster + ")") as Poster,
	file.link as Title,
	string(year) as Year, 
	"by " + director as Director,
	"⭐ " + scoreImdb as "⭐ IMDB",
	rating
from #movies 
where poster != null
```
</pre>
Lines 3-8 represent the data that we are pulling into each card, for the poster, film title, year, director, IMDB score, and rating.

That's it! You're done! ✨

## Thanks

Thank you to [Christian Bager Bach Houmann](https://github.com/chhoumann) for creating [[QuickAdd]] plugin and his help developing the script featured in this guide.

## Related links

- [YouTube tutorial using this script](https://www.youtube.com/watch?v=t-hKCgGhQuk) by FromSergio
- [Movie & Series Script](https://github.com/chhoumann/quickadd/blob/master/docs/Examples/Macro_MovieAndSeriesScript.md)  and [related Twitter thread](https://twitter.com/chrisbbh/status/1489327905511555073) by Christian Bager Bach Houmann the author of QuickAdd
- Was this helpful? ☕️ [Buy me a coffee!](https://www.buymeacoffee.com/kepano)
