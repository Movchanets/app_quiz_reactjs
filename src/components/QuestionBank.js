const qBank = [
  {
    id: 1,
    question:
      "Яка команда використовується для створення нового проекту React.js?",
    options: [
      "create-react-app app_quiz_reactjs",
      "npx create-react-app app_quiz_reactjs",
      "npm create-react-app app_quiz_reactjs",
    ],
    answer: "npx create-react-app app_quiz_reactjs",
  },
  {
    id: 2,
    question:
      "Яка команда використовується для запуску локального сервера розробки React.js?",
    options: ["npm start", "npm run", "npm build"],
    answer: "npm start",
  },
  {
    id: 3,
    question:
      "Який порт локального хосту за замовчуванням використовує сервер розробки React.js?",
    options: ["3000", "5000", "8080"],
    answer: "3000",
  },
  {
    id: 4,
    question: "Для розробки та запуску коду React.js потрібен Node.js?",
    options: ["Так", "Ні"],
    answer: "Так",
  },
  {
    id: 5,
    question: "Назви компонентів React.js мають починатися з великої літери?",
    options: ["Так", "Ні"],
    answer: "Так",
  },
  {
    id: 6,
    question: "Що таке JSX у React.js?",
    options: [
      "Синтаксис для опису структур HTML у JavaScript",
      "Мова програмування для створення компонентів",
      "Технологія для запуску React на сервері",
    ],
    answer: "Синтаксис для опису структур HTML у JavaScript",
  },
  {
    id: 7,
    question:
      "Яка функція в React.js використовується для зміни стану компонента?",
    options: ["setState", "useState", "changeState"],
    answer: "setState",
  },
  {
    id: 8,
    question: "Що таке props у React.js?",
    options: [
      "Метод для роботи з API",
      "Механізм передачі даних між компонентами",
      "Властивості компонентів для стилізації",
    ],
    answer: "Механізм передачі даних між компонентами",
  },
  {
    id: 9,
    question:
      "Як можна передати значення з батьківського компонента в дочірній?",
    options: ["Через state", "Через props", "Через useState"],
    answer: "Через props",
  },
  {
    id: 10,
    question: "Що таке Virtual DOM в React.js?",
    options: [
      "Система кешування компонентів",
      "Абстракція для оновлення DOM",
      "Модуль для інтеграції з сервером",
    ],
    answer: "Абстракція для оновлення DOM",
  },
];

export default qBank;
