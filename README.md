# CMS QuickDuck 🦆

**CMS QuickDuck** — это легковесное и интуитивно понятное приложение для управления контентом вашего сайта. Создавайте и редактируйте страницы, настраивайте дизайн и управляйте пользователями — всё это из одной панели управления.

---

## 🚀 Возможности

- 🖋️ **Управление контентом**: Легко создавайте, редактируйте и удаляйте страницы на сайте.
- 🎨 **Настройка дизайна**: Визуальные редакторы и готовые шаблоны для быстрой настройки.
- 👥 **Управление пользователями**: Контроль за правами доступа и возможностями для редактирования.
- 🔧 **Гибкая настройка**: Простые в настройке плагины и модули для расширения функционала.

---

## 🛠️ Установка

### Системные требования

- Vite (v3+)
- NPM (v7+)
- MySQL или MariaDB

### Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/yourusername/cms-quickduck.git

2. Перейдите в папку проекта и установите зависимости:

bash

cd cms-quickduck
npm install

3.Настройте параметры API и базы данных в файле .env:

bash

cp .env.example .env

4.Запустите проект с помощью Vite:

bash

npm run dev

5.Откройте http://localhost:3000 в браузере для работы с приложением.


```md
## ⚙️ Доступ к данным

Для взаимодействия с API и доступа к данным в **CMS QuickDuck** используется библиотека **Axios**. Все запросы отправляются к REST API серверу, а ответы используются для обновления контента.

Пример запроса с помощью Axios:

```javascript

import axios from 'axios';

axios.get('/api/pages')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

📜 Лицензия

Этот проект распространяется под свободной MIT License.