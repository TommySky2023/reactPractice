/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/css/index.css":
      /*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./src/js/todo.ts":
      /*!************************!*\
  !*** ./src/js/todo.ts ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ appendTodoList: () =>
            /* binding */ appendTodoList,
          /* harmony export */ getNewTodo: () => /* binding */ getNewTodo,
          /* harmony export */ removeTodoListElement: () =>
            /* binding */ removeTodoListElement,
          /* harmony export */
        });
        /* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./utils/dom */ "./src/js/utils/dom.ts");

        /**
         * DOMのinput要素から新しいTODOの値を取得する
         * @returns Todo
         */
        var getNewTodo = function () {
          return {
            id: Date.now(),
            name: (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)(
              "new-todo-name",
            ).value,
            person: (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)(
              "new-person",
            ).value,
            deadline: (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)(
              "new-deadline",
            ).value,
          };
        };
        /**
         * DOMにTODO一覧を表示する
         */
        var appendTodoList = function (todoList) {
          console.log("表示", todoList);
          todoList.forEach(function (todo) {
            var nameTd = (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "td",
              todo.name,
            );
            var personTd = (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "td",
              todo.person,
            );
            var deadlineTd = (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "td",
              todo.deadline,
            );
            // 削除ボタン
            var deleteButton = (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "button",
              "削除",
            );
            deleteButton.addEventListener("click", function () {
              todoList = todoList.filter(function (_todo) {
                return _todo.id !== todo.id;
              });
              removeTodoListElement();
              appendTodoList(todoList);
              console.log("削除", todoList);
            });
            var deleteButtonTd = (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td");
            deleteButtonTd.appendChild(deleteButton);
            var tr = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "tr",
            );
            tr.appendChild(nameTd);
            tr.appendChild(personTd);
            tr.appendChild(deadlineTd);
            tr.appendChild(deleteButtonTd);
            var tBody = (0,
            _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)(
              "todo-list",
            );
            tBody.appendChild(tr);
          });
        };
        /**
         * DOMのTODO一覧を全て削除する
         */
        var removeTodoListElement = function () {
          var tBody = (0,
          _utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)("todo-list");
          while (tBody.firstChild) {
            tBody.firstChild.remove();
          }
        };

        /***/
      },

    /***/ "./src/js/utils/dom.ts":
      /*!*****************************!*\
  !*** ./src/js/utils/dom.ts ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createElement: () => /* binding */ createElement,
          /* harmony export */ getElementById: () =>
            /* binding */ getElementById,
          /* harmony export */ getInputElementById: () =>
            /* binding */ getInputElementById,
          /* harmony export */
        });
        /**
         * id属性からHTML要素を取得する
         * @param id
         * @returns HTMLElement
         */
        var getElementById = function (id) {
          var element = document.getElementById(id);
          if (element === null) {
            throw new Error(
              "id: ".concat(
                id,
                " \u306E\u8981\u7D20\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
              ),
            );
          }
          return element;
        };
        var getInputElementById = function (id) {
          var element = document.getElementById(id);
          if (element === null) {
            throw new Error(
              "id: ".concat(
                id,
                " \u306E\u8981\u7D20\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
              ),
            );
          }
          return element;
        };
        /**
         * 引数に受け取った名前のDOM要素を生成する
         * @param elementName 要素名
         * @param textContent 要素のテキストコンテント
         * @returns HTMLElement
         */
        var createElement = function (elementName, textContent) {
          var element = document.createElement(elementName);
          if (typeof textContent !== "undefined") {
            element.textContent = textContent;
          }
          return element;
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
    /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./todo */ "./src/js/todo.ts");
    /* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./utils/dom */ "./src/js/utils/dom.ts");
    var __spreadArray =
      (undefined && undefined.__spreadArray) ||
      function (to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };

    var todoList = [];
    document.addEventListener("DOMContentLoaded", function () {
      var registerButton = (0,
      _utils_dom__WEBPACK_IMPORTED_MODULE_2__.getElementById)("register");
      registerButton.addEventListener("click", function () {
        // 新しいTODOをDOMから取得して、todoListに追加する
        todoList = __spreadArray(
          __spreadArray([], todoList, true),
          [(0, _todo__WEBPACK_IMPORTED_MODULE_1__.getNewTodo)()],
          false,
        );
        // TODO一覧を表示する
        (0, _todo__WEBPACK_IMPORTED_MODULE_1__.removeTodoListElement)();
        (0, _todo__WEBPACK_IMPORTED_MODULE_1__.appendTodoList)(todoList);
      });
    });
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
