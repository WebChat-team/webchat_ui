# Table of contents
* [WebChat UI (ru)](#webchat-ui-ru)
* [WebChat UI (en)](#webchat-ui-en)

# WebChat UI (ru)

## Вступление
WebChat UI — это библиотека адаптивных React-компонентов для создания веб-приложений.

Библиотека заточена под основной проект [WebChat](https://github.com/WebChat-team/webchat), поэтому она реализует:

1. Цветовые темы;
2. Компоненты, которые часто используются.

Сделано это для того, чтобы вынести постоянно используемую логику в отдельный проект, чтобы легче и, соответственно, быстрее реализовать написание клиента (пользовательских интерфейсов) у микрофронтендов, из которых состоит основной проект.


## Основная часть 

### Работа с проектом

#### Установка

Чтобы установить проект, используйте пакетный менеджер [NPM](https://www.npmjs.com/package/npm?activeTab=readme). Перед тем как установить данную библиотеку, не забудьте добавить конфиг зависимостей npm проекта (package.json).

```npm
npm i -D @webchat_com/webchat_ui
```

#### Сборка

Чтобы собрать проект воспользуйтесь командой.

```npm
npm run build
```

### Цветовые темы
В проекте реализуются только 2 цветовые темы: светлая и тёмная. При использовании данных компонентов в Вашем проекте их необходимо обернуть в специальные компонент [AppearanceProvider](#appearanceprovider), так как он содержит цветовые темы проекта.

Посмотреть цветовые темы в CSS файле Вы можете [здесь](https://github.com/WebChat-team/webchat_ui/blob/main/src/components/AppearanceProvider/ui/index.module.css).

### Компоненты

#### AppearanceProvider
Компонент-обёртка для проведения цветовой темы: светлой и  тёмной. Им необходимо обернуть все компоненты библиотеки, кроме компонентов-обёрток (контейнеров), так как они активно используют передаваемые данным компонентом CSS стили.

Компоненты, которые обёрнуты в данный компонент могут использовать [цветовые стили проекта](#цветовые-темы).

Свойства:
* theme - цветовая тема.

#### Button
Кнопка, которая может настраиваться исходя из передаваемых  свойств.

Свойства:
* isLoading - включение режима ожидания;
* wide - занимает всю ширину блока, в котором находится;
* level - уровень "значимости".
* Остальные свойства, которые есть у тега button (кнопка).

#### Loader
Компонент для отображения процесса загрузки.

#### InputForm
Компонент-поле для ввода данных пользователя.

Свойства:
* description - описание поля формы;
* остальные свойства, которые есть у тега input (поле).

#### Не указанные компоненты
Не указанные компоненты находятся в подвешенном состоянии: либо они будут убраны из следующей итоговой версии, либо оставлены.

## Заключение

Библиотека на данный момент активно развивается, поэтому изменения в ней носят частный характер. После итоговой сборки основного проекта библиотека не будет претерпевать частые изменения, вызванные неопределённостью в ходе разработки.

# WebChat UI (en)

## Introduction
WebChat UI is a library of adaptive React components for creating web applications.

The library is designed for the main project [WebChat](https://github.com/WebChat-team/webchat ), so it implements:

1. Color themes;
2. Components that are often used.

This is done in order to bring the constantly used logic into a separate project in order to make it easier and, accordingly, faster to implement the writing of the client (user interfaces) the micro-frontends that make up the main project.


## The main part 

### Working with the project

#### Installation

To install the project, use the package manager [NPM](https://www.npmjs.com/package/npm?activeTab=readme ). Before installing this library, do not forget to add the npm project dependencies config (package.json).

```npm
npm i -D @webchat_com/webchat_ui
```

#### Assembly

To build a project, use the command.

```npm
npm run build
```

### Color themes
The project implements only 2 color themes: light and dark. When using these components in your project, they must be wrapped in a special component [AppearanceProvider](#appearanceprovider-1), since it contains the project's color themes.

You can view the color themes in the CSS file [there](https://github.com/WebChat-team/webchat_ui/blob/main/src/components/AppearanceProvider/ui/index.module.css).

### Components

#### AppearanceProvider
A wrapper component for holding a color theme: light and dark. They need to wrap all library components except wrapper components (containers), as they actively use CSS styles passed by this component.

Components that are wrapped in this component can use [project color styles](#color-themes).

Features:
* theme - color theme.

#### Button
A button that can be configured based on the transmitted properties.

Features:
* isLoading - enabling standby mode;
* wide - occupies the entire width of the block in which it is located;
* level - the level of "significance".
* Other properties that the button tag has.

#### Loader
A component for displaying the download process.

#### InputForm
The component is a field for entering user data.

Features:
* description - description of the form field;
* other properties that the input tag has (field).

#### Components not specified
The components that are not specified are in limbo: either they will be removed from the next final version, or they will be left.

## Conclusion

The library is currently actively developing, so the changes in it are of a private nature. After the final build of the main project, the library will not undergo frequent changes caused by uncertainty during development.