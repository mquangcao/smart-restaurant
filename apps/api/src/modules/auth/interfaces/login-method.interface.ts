export enum LoginMethod {
  PASSWORD = 'password',
}

export interface LoginMethodData {
  [LoginMethod.PASSWORD]: {
    username: string;
    password: string;
  };
}
