# 1. 리액트 프로젝트 초기세팅

## 1.1. 리액트 프로젝트 생성

- `npx create-react-app ./`
- `yarn create react-app ./` 택1

## 1.2. 파일 정리

- src/test 파일들 삭제
- App.css 파일 삭제
- index.js 파일 정리

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- index.css 파일 수정(다 지우고 아래 내용 붙여넣기)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
ul,
li {
  list-style: none;
}
a {
  color: #000000;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border: 0;
}
html {
  font-size: 16px;
}
body {
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.23px;
  word-break: keep-all;
  color: #000000;
}
```

## 1.3. React 개발 편의 도구 설치

- React 크롬 개발 도구 [DevTools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- VSCode React Plugin (ES7+ React/Redux/React-Native snippets ) 설치

## 1.4. normalize.css 설정 (css 초기화)

- `yarn add normalize.css`
- src/index.js에서 `import "normalize.css";` 추가 후 `alt + shift + o` 하면 자동정렬 됨

## 1.5. scss, emotion.js 설치

- `yarn add sass`
- `yarn add @emotion/react`
- `yarn add @emotion/styled`

## 1.6. ESLint, prettier 설정

- .prettierrc.json 파일 생성 후 아래 내용 붙여넣기

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESLint 설정

  - `yarn add eslint --dev`
  - `npx eslint --init` - npm 경우만
  - `yarn eslint --init` 모두 enter 하고 마지막 것만 yarn 선택

- ESLint와 Prettier를 연결하여 ESLint 설정

  - `yarn add eslint-config-prettier --save-dev`
  - .eslintrc.js `extends, rules` 부분에 아래내용 덮어씌우기

    ```js
    extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
    ],

    rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    },
    ```

- 바벨에 의한 경고 제외

  - `yarn add @babel/plugin-proposal-private-property-in-object --dev`

- App.js 수정 후
  `yarn start`
