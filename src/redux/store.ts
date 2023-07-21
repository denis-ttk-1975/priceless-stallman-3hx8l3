import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../saga";
import { sliceReducer } from "./slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: sliceReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
