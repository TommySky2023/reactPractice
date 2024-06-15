import { appendUserList, fetchUserList } from "./user";
import { getElementById } from "./utils/dom";

document.addEventListener("DOMContentLoaded", () => {
  const userButton = getElementById("fetch-user");
  userButton.addEventListener("click", async () => {
    // APIからユーザーの一覧を取得
    const userList = await fetchUserList();
    console.log(userList);
    // ユーザー一覧をDOMに出力
    appendUserList(userList);
  });
});
