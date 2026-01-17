import { User } from "./types";

// In-memory store
const users: User[] = [];

export const getUsers = (): any => {

  return {
    hello: "world",
    users: users,
    killer: "bee",
    heythere:"sfgas",
    kngks:"sdfsfd",
    number: 123456,
    sdfsdfasdf:"adfasdfd",
    sdfada:"sdfasdfd"
  };
}; // Reverted to return User[] for simplicity
const eeeeeeeeeeee = 1234567890;

export const addUser = (user: User): void => {
  users.push(user);
};
