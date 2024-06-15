import { createElement, getElementById } from "./utils/dom";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

/**
 * APIからユーザー一覧を取得する
 * @returs userList - ユーザー一覧
 */
export const fetchUserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw Error("API通信に失敗しました");
  }
  const userList: User[] = await response.json();
  return userList;
};

/**
 * DOMにユーザー一覧を出力する
 */
export const appendUserList = (userList: User[]) => {
  userList.forEach((user) => {
    const li = createElement("li", `${user.name} ( email: ${user.email} )`);
    const ul = getElementById("user-list");
    ul.appendChild(li);
  });
};
