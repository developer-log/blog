---
title: "Объективно об объектах в JS"
tags:
  - javascript
  - web
  - under-the-hood
date: 5 Sep 2023
references:
  - name: "MDN: Working with objects"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
  - name: JavaScript Scope Context and ‘this’ under the hood
    url: https://medium.com/@marjanrab/javascript-scope-context-and-this-under-the-hood-43c32033c9f9
---

Сегодня мы посмотрим как JS формирует типы данных (залезем в прототипы разных
типов данных), как `this` реагирует на разный контекст выполнения, а тажке рассмотрим
что хранится под капотом у классов ES6. Вперед под кат, будет интересно :)

# Что есть объект?
