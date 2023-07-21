import "./styles.css";

import RefForm from "./RefForm";

// Задание 1. Необходимо реализовать input с использование хука useRef (Компонент RefForm)
// Задание 2. Внедрить redux для использования формы из 1 задания
// Задание 3. Используя предыдущие наработки, внедрить асинхронное изменение значения с помощью redux-saga

export default function App() {
  return (
    <div className="App">
      <RefForm />
    </div>
  );
}
