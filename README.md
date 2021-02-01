Goal: 

- make <https://epogrebnyak.gitlab.io/doks-howto> a sample multilingual site for doks theme

Changes:

- added `.gitlab-ci.yml`
- removed `public` from `.gitignore`
- changed `baseurl="https://epogrebnyak.gitlab.io/doks-howto"` in `config/_default/config.toml`

Covinience:

- justfile command runner

Barriers:

- cannot render remotely on Gitlab Pages due to functions behaviour, serving now `public` folder content