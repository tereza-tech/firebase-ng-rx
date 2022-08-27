export type Id = string | number | undefined;
export type Role = "USER" | "READER";

export class Account {
    constructor(public id: Id, users: User[] = []) {}
  }

export class User {
  id?: string;
  accountId?: string;
  account?: Account;
  email?: string;
  password?: string;
  role?: Role;
  confirmed?: boolean;
  tfa?: boolean;
}

export class Token {
    constructor(public jwt: string) { }
}