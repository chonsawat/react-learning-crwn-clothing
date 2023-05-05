import { USER_ACTION_TYPES } from "./user.types";
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { UserData } from "../../utils/firebase/firebase.utils";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailsSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type SignupStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export const setCurrentUser = (user: UserData) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = withMatcher(() =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher((email: string, password: string) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher((user: UserData) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher((error: string) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signOutStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher((error: string) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAIL, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: UserData, additionalDetail: string) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetail })
);

export const signUpFailed = withMatcher((error: string) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAIL, error)
);
