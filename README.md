# Тестовое задание компании Future

### Двустраничное приложение поиска книг с помощью Google Books API

## Инструкция по локальному запуску приложения

Приложение контейнеризировано и запускается одной командой:
```
docker-compose up --build -d
```
или скриптом `npm start`

После запуска на локальной машине приложение доступно на 80 порту: [http://localhost](http://localhost)

Остановка и удаление контейнера, запущенного на локальной машине:

```
docker-compose down -v
```

или скрипт `npm run end` 