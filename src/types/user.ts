export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersErrorActions
  | FetchUsersSuccessAction;

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUsersErrorActions {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}