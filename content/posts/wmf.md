---
title: Module Federation
tags:
  - vue
date: 2023-10-04
_draft: true
---
# Module Federation
Микрофронтэнд - методология, которая стала популярна начиная c 2021 года.
Она решает несколько достаточно важных проблем с которыми сталкиваются разработчики, о которых мы поговорим чуть позже.

# Термины
**Бандл** - собранное приложение у которого есть свои пакеты, логика и верстка.
В бандле также могут быть только верстка или только бизнес-логика.

**Хост** - Корневое приложение, которое будет подтягивать бандлы,
для того чтобы встроить их функционал в себя.

**Рантайм** - Процесс выполнения кода на клиентской части.

# Архитектура
По сути архитектура микрофронтэнда заключается в том, что у нас есть несколько независимых бандлов
(_собранных приложений_) и один главный бандл (так называемый хост).

