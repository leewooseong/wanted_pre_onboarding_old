# wanted_pre_onboarding

원티프 프리온보딩 프론트엔드 선발과제

<!--
    README.md 파일에는 구현한 방법과 이유에 대한 간략한 내용, 구현하면서 어려웠던 점과 해결 과정과 방법 등을 적어주세요. 자랑이 들어가도 좋습니다.
-->

## 3. Slider.js

### 3-1. 구현 방법

**HTML**

-   크게 보면 div tag, input tag, button들로 구성되어 있습니다.
-   div tag
    -   range input의 값을 나타내는 div tag
-   input tag
    -   값을 입력받는 input tag
-   button tag
    -   input tag와 미려한 픽셀 매칭을 위하여 button tag를 사용합니다.

**CSS**

-   button들의 대략적인 위치는 flex의 justify-content: space-between을 이용하여 지정해주었습니다.

**JavaScript**

-   state
    -   sliderValue : input tag의 값을 받아오는 state
-   값 받아오기
    -   onChange 이벤트 핸드러를 이용해서 값이 변할 때마다 sliderValue에 input tag의 값을 저장합니다.
    -   가져온 값은 div tag 내의 p tag에 의해 표시됩니다.
-   버튼으로 값 변경하기
    -   input tag 하단의 버튼을 클릭하면 버튼에 적힌 값들로 input tag 및 div tag 내에 표시되는 input이 값이 변경됩니다.

### 3-2. 어려웠던 점

-   input을 원하는 UI로 커스컴하는 부분에 있어서 어려움을 겪어 그 부분은 구현을 하지 못했습니다.
-   추후 개인적이라도 완성해볼 예정입니다.

## 4. Input.js

### 4-1. 구현 방법

### 4-2. 어려웠던 점

<!--
해야할 것
- 개발 다하고 README.md 파일에 구현한 점 작성하기
- App.css
    - px -> rem으로 고치고 컴포넌트 각각에 스타일 rem으로 적용하기
- Input.js
    - styledComponent 정리하기
    - 주석 정리하기

-->
