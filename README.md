# Сайт Финэка МГИМО

Здесь находится проект, позволяющий создать, редактировать и выложить в Интернет сайт факультета финансовой экономики МГИМО.

Инструкции в этом файле необходимы для:

- редакторов и авторов материалов (пишут новые материалы, интересные абитуриентам, студентам и выпускникам)
- верстальщиков текстов (переводят текст в формат markdown, используют средства шаблона Hugo/Doks для улучшения форматирования)
- специалистов по созданию сайтов и использованием Hugo/Doks (меняют шаблоны документов, разделы и внешний вид сайтов)

## Для авторов и редакторов

- Работа с документацией на Github отличается от привычных систем управления сайтом (например, Joomla), не пугайтесь
- Тексты сайта находятся в https://github.com/finec-mgimo/finec-mgimo.github.io/tree/main/content/ru, попробуйте полистать их
- Ход работ мы стараемся отслеживать в ["ишьюс"](https://github.com/finec-mgimo/finec-mgimo.github.io/issues), особенно метка `Content editing`
- Есть много работ для корректоров, но для этого надо освоится с системой Github.

## Установка

- git
- [node](https://nodejs.org/en/download/) (управлять темой Doks)
- code (редактор VS Code)

## Как запустить

```
git clone https://github.com/finec-mgimo/finec-mgimo.github.io finec
cd finec
npm install
npm run server
```
Основа этого шаблона: https://epogrebnyak.gitlab.io/doks-howto

## Сайты

- https://finec.mgimo.ru/ и https://github.com/finec-mgimo/finec-mgimo.github.io (это репо)
- https://mgimo.ru/study/faculty/ffe/
- https://odin.mgimo.ru/fakultet-finansovoj-ekonomiki
- новости факультета финансовой эконмоики на сайте https://odin.mgimo.ru/all-news
- https://english.mgimo.ru/structure/schools/school-of-financial-economy
- [`site:https://odin.mgimo.ru/nov-pod-mgimo/ погребняк`](https://github.com/finec-mgimo/v2/edit/main/README.md)

## Типы материалов

- события
- наши программы
- интервью и выступления декана
- кафедры и люди
- блог факультета
- учебные материалы и мини-лекции
- возможности для студентов

## Документация для разработчиков

- [Дополнительные компоненты](docs/shortcodes.md)
