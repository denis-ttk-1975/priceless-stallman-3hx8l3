import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeValue, changeValueAsyncSaga, sliceValue } from "./redux/slice";

export default function RefForm() {
  // const [value, setValue] = useState(""); - Решение для 1 задания

  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const value = useSelector(sliceValue);

  const onClick = () => {
    // setValue(ref.current.value); - Решение для 1 задания
    dispatch(changeValue(ref.current.value)); // Решение для 2 задания
  };

  const onClickAsync = () => {
    dispatch(changeValueAsyncSaga(ref.current.value)); // Решение для 3 задания
  };

  return (
    <div>
      <p>Значение: {value}</p>
      <input type="text" ref={ref} />
      <button onClick={onClick}>Отправить</button>
      <button onClick={onClickAsync}>Отправить асинхронно</button>
    </div>
  );
}
