---
title: Пишем конфигурацию для zsh
tags:
  - linux
  - zsh
origin:
  type: vc
  url: https://vc.ru/dev/417909-pishem-konfiguraciyu-dlya-zsh
date: 2022-05-07
---

Иметь красивый и удобный шелл для человека, который ведет разработку в терминале или просто пользуется им 90% рабочего времени — дело хорошее, ещё лучше если этот шелл хорошо настроен, не подлагивает в больших репозиториях git и предоставляет удобные алиасы, этим сегодня и займемся 😊

# Менеджер плагинов
Можно конечно копировать все репозитории ручками, однако, если вы перейдете с одной системы на другую,
то вам придётся хранить список репозиториев, которые нужно подкинуть себе 😳

Это крайне неудобно, да и на дворе 22-й год, поэтому давайте разберемся в том, какие менеджеры плагинов есть у zsh:

- antibody
- antigen
- zinit
- zgen
- zplug
- zpm

Поговорим о каждом из них чуть подробнее:

## Antigen
Стандарт де-факто среди менеджеров плагинов для zsh.
С помощью него удобно устанавливать файлы, т.к. достаточно просто указать команды в .zshrc,
сам пакетный менеджер подхватит все команды и выполнит их.

У данного пакетного менеджера есть поддержка установки плагинов из репозитория Oh My Zsh,
что делает использование самого шелла ещё более удобным, т.к.
для Oh My Zsh написали очень много прекрасных плагинов.

::ContentBookmark{url="https://github.com/zsh-users/antigen"}
::

## Antibody

Предоставляет те же функции, что и antigen, однако является быстрее и делает упор на производительность ⚡

Единственный минус у данного менеджера плагинов - то, что он перешёл в maintaince mode,
это означает что для него больше не выходят фичи, только фиксятся критические баги.

::ContentBookmark{url="https://github.com/getantibody/antibody"}
::

## ZGen
Легковесный и простой менеджер плагинов для zsh.
Он генерирует отдельный файлик со списком плагинов, проверяет обновления автоматически и практически не влияет на
startup time (время запуска шелла в первый раз).

Данный менеджер плагинов также поддерживает установку плагино из репозитория Oh My Zsh 😊

::ContentBookmark{url="https://github.com/tarjoilija/zgen"}
::

## zinit
Данный менеджер плагинов является очень гибким в настройке. Это единстенный менеджер плагинов, у которого есть
Turbo-режим (как написано в самом репозитории).

Также сам менеджер плагинов является расширяемым.
Для него написаны расширения (annexes), которые добавляют новые команды и функционал.

::ContentBookmark{url="https://github.com/zdharma-continuum/zinit"}
::

## zplug
Один из очень медленных менеджеров плагинов, который по иронии является самым удобным 😅

Обладает функцией параллельной установки/обновления,
поддерживает ленивую загрузку плагинов, есть возможность написать пост и пре-хуки для плагинов,
не создает лишние файлы при установке плагинов, есть механизм кэша, для того чтобы
уменьшать и без того большую задержку startup time’а.

::ContentBookmark{url="https://github.com/zplug/zplug"}
::

## zpm

Разработчик указывает что это один из быстрейших менеджеров для плагинов в zsh
(внизу будет график, посмотрим, правда ли это).

Поддерживает Oh My Zsh плагины, поддерживает множество систем (Linux, Android, OpenWrt, FreeBSD and macOS),
асинхронную загрузку, хуки, сам является расширяемым менеджером для плагинов.

::ContentBookmark{url="https://github.com/zpm-zsh/zpm"}
::

# Производительность

Далее будет информация предоставленная [с вот этого репозитория 😊](https://github.com/rossmacarthur/zsh-plugin-manager-benchmark)

Все картинки распространяются по [вот этой лицензии](https://github.com/rossmacarthur/zsh-plugin-manager-benchmark/blob/master/LICENSE-APACHE).


Давайте глянем на время установки плагинов различными менеджерами:

![](/posts/zsh-setup/install-time.png)

И действительно автор zpm не соврал нам и менеджер быстрее всех устанавливает плагины. Однако нас мало волнует время установки, нам нужно быстрое время запуска самого шелла, так как в будущем при работе с шеллом долгий запуск будет нас только раздражать.

Вот startup time у разных менеджеров:

![](/posts/zsh-setup/load-time.png)

Тут мы ясно и четко видим, что время загрузки самих плагинов у antibody, antigen, sheldon и zgen — примерно одинаковое, а вот zpm грузит плагины достаточно долго 😳, не говоря уже про zplug 🐌

И все-таки какой менеджер плагинов использовать? Одним из лучших по юзабельности является antigen, он является стандартом не просто так. Он достаточно быстро грузит все плагины
(как и устанавливает) и не мельтешит перед глазами лишний раз. Один раз установим плагины и забудем даже, что он у нас есть 😊

# Конфигурация
Для начала нужно создать `.zshrc`, который будет находится в корневой директории пользователя `$HOME`.

Внутри самого `.zshrc` следует поместить следующее:

```bash
### PATH VARIABLES ###
ANTIGEN_PATH="$HOME/.config/antigen.zsh"  # Путь к самому antigen
CARGO_PATH="$HOME/.cargo/bin"             # Путь для cargo, если у вас есть установленные утилиты на Rust
PYTHON_PATH="$HOME/.local/bin"            # Путь к бинарникам Python, если у вас есть они
NVM_DIR="$HOME/.nvm"                      # Путь для Node Version Manager, если он вам нужен
HISTFILE="$HOME/.zsh_history"             # Файл, в который будет записываться вся история команд на zsh
EDITOR="nvim"                             # Редактор по умолчанию. Можете подставить любой, который вам нравится
HISTSIZE=10000                            # Количество сохраненных команд в файле
SAVEHIST=10000                            # Как много команд шелл должен помнить в одной сессии (по команде history)
setopt appendhistory                      # Сохраняем всю историю в файл, чтобы она не стиралась, если мы выключим и включим шелл
```

Данные настройки у каждого пользователя разные. Хорошей практикой в конфигурации шелла является объявлять все переменные вверху файла, а также допиливать функционал в шелле, которого не хватает стандартными методами (как допиливание сохранения истории из сессии в сессию).

Далее пойдут обычные условия на дополения переменной PATH, данная специальная переменная является строкой, которая подсказывает шеллу откуда таскать бинарники для команд:

```bash
# Проверяем есть ли у нас бинарники Cargo
if [ -d $CARGO_PATH ]; then
	export PATH=$CARGO_PATH:$PATH    # Добавляем переменную CARGO к PATH
fi

# Проверяем есть ли у нас бинарники Python
if [ -d $PYTHON_PATH ]; then
	export PATH=$PYTHON_PATH:$PATH   # Добавляем переменную PYTHON к PATH
fi

# Проверяем скачан ли Antigen
if [ ! -f $ANTIGEN_PATH ]; then
    echo "Antigen is not found!" >&2

  # Если antigen не скачан, то качаем его
  curl -L git.io/antigen > $ANTIGEN_PATH
fi

# Опционально! Все что начинается с данной строки не обязательно должно попадать в ваш .zshrc
# Я добавил данный кусочек конфигурации, чтобы вы могли увидеть как можно быстро и удобноо скачать NVM😊
# Проверяем есть ли на системе Node Version Manager
if [ -d $NVM_PATH ]; then

  # Если есть - включаем
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
else

  # Если нет - качаем
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
fi
```

Далее наконец-то перейдем к самой установке плагинов 🎉

Всё, что нам нужно сделать — подключить сам Antigen, а затем объявить плагины, которые нам нужно скачать 😊

```bash
### PLUGIN MANAGER ###
source $ANTIGEN_PATH                               # Подключаем сам antigen

antigen bundle autojump                            # Плагин для прыжка по директориям
antigen bundle git                                 # Плагин для удобных алиасов git
antigen bundle zsh-users/zsh-syntax-highlighting   # Подсветка синтаксиса

# Проверяем есть ли у нас команда exa
type exa &> /dev/null &&
    antigen bundle DarrinTisdale/zsh-aliases-exa   # Если есть - добавляем для неё алиасы

antigen bundle zsh-users/zsh-autosuggestions       # Автодополнение как в Fish
antigen bundle reobin/typewritten@main             # Тема для zsh

# Применяем все настройки, что мы указали😊
antigen apply
```

Давайте пройдемся по всем плагинам, что я здесь указал 😊

- **Autojump** — плагин, который позволяет быстро перемещаться по директориям. Как это работает? Мы перемещаемся по директориям и пишем в них любые команды (напр. ls), autojump запоминает данные директории. Затем вы можете просто написать j dev, и autojump сразу прыгнет к папке dev, если у вас она есть и вы в ней работали🤩
- **Git** — данный плагин является стандартным в Oh My Zsh. Он добавляет алиасы (сокращения для команд) в шелл. Например git status можно написать как gss, git commit - gc, и так далее😊
- **zsh-syntax-highlighting** — плагин, который будет выделять зеленым цветом правильно введенные команды, а красным - нет.
- **zsh-aliases-exa** — плагин, который заменяет стандартный ls, на более продвинутый аналог https://github.com/ogham/exa. Exa в свою очередь удобен тем, что может выводить содержимое директорий вместе с иконками из Nerd Fonts, умеет красиво строить колонки из файлов, раскрашивает вывод самостоятельно.
- **zsh-autosuggestions** — является одним из самых полезных плагинов в списке, он добавляет автодополнение команд. Если до этого нам приходилось нажимать Ctrl + R, для того чтобы найти команду в поиске истории, то теперь это все делается в реальном времени просто при введении символов. Для того чтобы завершить автодополнение достаточно нажать Ctrl + I или Tab, или Ctrl + E.

Последним плагином перед `antigen apply` является тема для самого шелла 😊
Это Typewritten, минималистичная тема, которая имеет асинхронный Git Status
