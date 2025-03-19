# SportHub Web

Лендинг-страница для проекта SportHub.

## Локальная разработка

Для локальной разработки просто откройте файл `index.html` в браузере:

```bash
open index.html
```

## Деплой на Cloudflare Pages

Проект настроен для деплоя на Cloudflare Pages. Для деплоя используйте скрипт `deploy.sh`:

```bash
./deploy.sh
```

Этот скрипт выполнит команду:

```bash
npx wrangler pages deploy . --project-name sporthabweb
```

### Настройка Wrangler

Wrangler - это CLI-инструмент для работы с Cloudflare. Он установлен локально в проекте:

```bash
npm install wrangler --save-dev
```

Конфигурация Wrangler находится в файле `wrangler.toml`:

```toml
name = "sporthubweb"
compatibility_date = "2023-12-01"

# Cloudflare Pages configuration
pages_build_output_dir = "."
```

### Домены

После деплоя сайт будет доступен по следующим доменам:

- Основной домен: [sporthabweb.pages.dev](https://sporthabweb.pages.dev)
- Домен для последнего деплоя: [HASH.sporthabweb.pages.dev](https://815e15b4.sporthabweb.pages.dev)

## Структура проекта

- `index.html` - основной HTML-файл
- `styles.css` - CSS-стили
- `script.js` - JavaScript-код
- `manifest.json` - манифест для PWA
- `robots.txt` - файл для поисковых роботов
- `sitemap.xml` - карта сайта
- `favicon.ico` - иконка сайта
# sporthubpromo
