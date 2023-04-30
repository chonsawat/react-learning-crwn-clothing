import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed } from "./user.action";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    put(signInSuccess(userAuth));
  } catch (error) {
    put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
