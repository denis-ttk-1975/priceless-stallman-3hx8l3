import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery } from "redux-saga/effects";

import { changeValue, changeValueAsyncSaga } from "../redux/slice";

export const changeValueAsync = function* ({ payload }: PayloadAction<string>) {
  yield delay(1000);
  yield put(changeValue(payload));
};

export default function* rootSaga() {
  yield takeEvery(changeValueAsyncSaga.type, changeValueAsync);
}
