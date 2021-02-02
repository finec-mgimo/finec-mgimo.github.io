---
title : "Современное оформление для документации"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:47:36+00:00
lastmod: 2020-10-06T08:47:36+00:00
draft: false
images: []
---

[Doks](https://github.com/h-enk/doks/) - это шаблон для статического генератора Hugo.
С его помощью можно создавать безопасные и быстрые сайты с документацией, оптимизированные 
под SEO. Doks [использует npm](https://henkverlinde.com/master-npm-with-hugo-managing-dependencies/) для управления зависимостями. 
Автор темы - [Хенк Верлинде](https://twitter.com/HenkVerlinde).

## Опыт перевода 

#### С чем придется столкнуться при переводе документации?

1. Critical:

- `title` нужен в `config.toml`, а не `params.toml`
- для дерева нужны файлы все `*.ru.md`, даже не переведенные, иначе сайт не построится

2. Possible enhancements:

- в теме пока нет переключателя языков, вы получите версию на адресе `.../ru/`
  (причем /ru без слеша в конце будет ошибкой)
- приглашение поиска Algolia пока не говорит по-русски

3. Not language-related:

- пробелы в заголовках пункте menu испортят весь праздник
- на разных уровнях верхняя менюшка
- лучше если тест на первой странице будет шире - секчас загоняет заголовок

#### С чего начать?

- поизучать папку `config/_default`
- посмотреть папку `content`

####  Чего там сложного?

- зачем помимо `config/_default` еще и другие папки?
- структура параметров разбросана по разным файлам
- именно в этой теме есть дублиование и неиспользуемые параметры
- есть, или были, два варианта разбрасывания переводов - по файлам или по папкам

#### Куда еще посмотреть?

- <https://gohugo.io/content-management/multilingual/>
- <https://github.com/gohugoio/hugo/issues/5957#issuecomment-492100461>
- <https://github.com/sunt-programator/sunt-programator-site/blob/master/config.toml>
