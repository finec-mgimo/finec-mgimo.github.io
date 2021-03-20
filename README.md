Goal: 

- Make <https://epogrebnyak.gitlab.io/doks-howto> a sample multilingual site for Doks theme
  with deployment to Gitlab Pages

Secondary site:

- This site also deployed with Netlify at https://gifted-pasteur-36c387.netlify.app/

Mind model:

- parameters are in `config` folder, starting with `config.toml` 
- markdown files are in `content` folder
- `static` folder holds images 
- `hugo` command will create html files in `public` folder
- `public/index.html` is site entry page 
- `public/index.html` is served with `hugo serve` command at `localhost`
- we either upload `public` folder or build `public` remotely


Changes:

- added `.gitlab-ci.yml` (to make public folder visisble)
- removed `public` from `.gitignore` - this way I can build locally and upload public folder to Gitlab Pages
- changed `baseurl="https://epogrebnyak.gitlab.io/doks-howto"` in `config/_default/config.toml`
  (surprisingly this does not break Netlify deployment)
- changed link to repo on front page + made gitlab svg icon using Feather fonts
- changed `index.html` page using `single.html` (see new index.html [here](https://gitlab.com/epogrebnyak/doks-howto/-/blob/master/layouts/index.html))
- added twitter shortcode in front page body
- added another language `/ru/`
- non-essential: added justfile command runner for `just publish` command




To try:

- can theme work as git submodule?


Discussed at:

- https://github.com/h-enk/doks/discussions/98
- https://github.com/h-enk/doks/discussions/97
- https://github.com/h-enk/doks/discussions/55


Barriers:

- cannot render remotely on Gitlab Pages with Hugo due to functions behaviour, serving now `public` folder content
- no language switch
- no code highlightling by default
