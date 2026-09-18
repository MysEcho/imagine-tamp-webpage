# Imagine-TAMP project page

Source for the project website of **Imagine-TAMP: Imagination-Guided Task and Motion
Planning in Partial Observability** (submitted to ICRA).

The page is a single static `index.html` with hand-written CSS and JS, styled after the
[EgoEngine](https://egoengine.github.io/) project page: a full-viewport dark hero with a
3x3 grid of looping clips and a centered wordmark, followed by a white paper section.

## Layout

```
index.html                  page content
static/css/index.css        all page styles
static/css/fontawesome*     vendored Font Awesome (link-button icons)
static/js/index.js          hero video grid with lazy loading
static/js/fontawesome*      vendored Font Awesome
static/images/              figures (currently *_placeholder.svg)
static/videos/hero/         the nine hero clips (currently empty)
static/videos/              other result videos
```

## Filling in the content

Search `index.html` for `TODO` comments. Each marks a placeholder:

- **Hero clips**: save the nine looping videos as `static/videos/hero/01.mp4` through
  `09.mp4` (row-major, top-left to bottom-right). Any aspect ratio works, each tile is cropped
  to fill. Each placeholder tile fades into its clip once the video has loaded. To use other
  filenames, edit `HERO_CLIPS` in `static/js/index.js`.
- authors, affiliations, venue, and the paper / arXiv / video / code links
- the abstract and method overview text
- `teaser_placeholder.svg`, `pipeline_placeholder.svg`, `results_placeholder.svg`
- the `.ghost` boxes inside each `.video-row`, each with a commented-out `<video>` snippet
- the supplementary video embed and the BibTeX entry

## Local preview

```
python3 -m http.server 8000
```

and open http://localhost:8000.

## Deploying on GitHub Pages

Push to a GitHub repository and enable Pages (Settings → Pages → deploy from the
`main` branch, root folder). The `.nojekyll` file makes Pages serve the files as-is.

## License

Website design adapted from EgoEngine. Licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
