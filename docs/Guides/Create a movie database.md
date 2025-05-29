---
permalink: guides/movie-database
---
#guides

In this guide we will create a personal database of movies in Obsidian. You'll be able to easily save movies to your watchlist, and add ratings to movies you've watched.

This guide will cover the following steps:

1. Installing Obsidian Web Clipper.
2. Adding your movie template.
3. Saving a movie to your database.
4. Creating a view to see your saved movies.

## Step 1. Install Web Clipper

Install [Obsidian Web Clipper](https://obsidian.md/clipper) for your browser. It is available on all major browsers that support extensions, including Safari on iOS and Firefox Mobile on Android.

## Step 2. Add a movie template in Web Clipper

Download one of my existing Web Clipper templates, depending on your preferred movie database:

- [Letterboxd](https://github.com/kepano/clipper-templates/blob/main/templates/letterboxd-clipper.json)
- [IMDB](https://github.com/kepano/clipper-templates/blob/main/templates/imdb-clipper.json)
- [IMDB (reference view)](https://github.com/kepano/clipper-templates/blob/main/templates/imdb-reference-clipper.json)
- Alternatively, [create your own template](https://help.obsidian.md/web-clipper/templates)

To import a template:

1. Open the Web Clipper extension and click the **Settings** cog icon.
2. Go to any template in the list.
3. Click **Import** in the top right or drag and drop your `.json` template file(s) anywhere in the template area.

## Step 3. Save a movie

Give your Web Clipper template a test run:

1. In your web browser go to a movie page (e.g. Letterboxd, IMDB, or other).
2. Click the Web Clipper extension.
3. Click **Add to Obsidian**.

You should see the movie added as a note in Obsidian.

## Step 4. Add a base for movies

To see all of the movies you saved in one place, [create a base](https://help.obsidian.md/bases/create-base) in Obsidian called Movies. You can download my [Movies.base](https://github.com/kepano/kepano-obsidian/blob/main/Templates/Bases/Movies.base) template.

Your movies base should have a filter that looks like `contains(property.categories, "[[Movies]]")`

That's it! You're done! ✨