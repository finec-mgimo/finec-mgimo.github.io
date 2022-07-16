
Mind model:

- parameters are in `config` folder, starting with `config.toml` 
- markdown files are in `content` folder
- `static` folder holds images 
- `hugo` command will create html files in `public` folder
- `public/index.html` is site entry page 
- `public/index.html` is served with `hugo serve` command at `localhost`
- we either upload `public` folder or build `public` remotely

Changes:

- changed `baseurl="https://epogrebnyak.gitlab.io/doks-howto"` in `config/_default/config.toml`
  (surprisingly this does not break Netlify deployment)
- changed link to repo on front page + made gitlab svg icon using Feather fonts
- changed `index.html` page using `single.html` (see new index.html [here](https://gitlab.com/epogrebnyak/doks-howto/-/blob/master/layouts/index.html))
- added another language `/ru/`
- non-essential: added justfile command runner for `just publish` command

To try:

- can theme work as git submodule?
