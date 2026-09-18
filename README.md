# Imagine-TAMP project page

Source for the project website of **Imagine-TAMP: Imagination-Guided Task and Motion
Planning in Partial Observability** (submitted to ICRA).

The page is a single static `index.html` built on the
[Nerfies website template](https://github.com/nerfies/nerfies.github.io) (Bulma CSS,
Font Awesome, bulma-carousel).

## Layout

```
index.html                  page content
static/css/index.css        custom styles (everything else is vendored Bulma / Font Awesome)
static/js/index.js          carousel and slider initialisation
static/images/              figures (currently *_placeholder.svg)
static/videos/              put result videos here (currently empty)
```

## Filling in the content

Search `index.html` for `TODO` comments. Each marks a placeholder:

- authors, affiliations, and the paper / arXiv / video / code links in the header
- the abstract and method overview text
- `teaser_placeholder.svg`, `pipeline_placeholder.svg`, `results_placeholder.svg`
- the `.video-placeholder` boxes in the results carousel and comparison sections,
  which each have a commented-out `<video>` snippet next to them
- the BibTeX entry

## Local preview

```
python3 -m http.server 8000
```

and open http://localhost:8000.

## Deploying on GitHub Pages

Push to a GitHub repository and enable Pages (Settings → Pages → deploy from the
`main` branch, root folder). The `.nojekyll` file makes Pages serve the files as-is.

## License

The website template is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
