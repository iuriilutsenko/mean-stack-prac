Интернет-магазин
=================

##Запуск и работа сервера с базой данных
Запуск:

```
mongod --dbpath ./data/db
```

Консоль БД:

```
mongo
```

Пример команды:

``` javascript
db.data.insert({ foo: 'bar' });
db.data.find({ foo: 'bar' });
```