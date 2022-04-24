# wanted_pre_onboarding

원티프 프리온보딩 프론트엔드 선발과제

<!--
    README.md 파일에는 구현한 방법과 이유에 대한 간략한 내용, 구현하면서 어려웠던 점과 해결 과정과 방법 등을 적어주세요. 자랑이 들어가도 좋습니다.
-->

## 4. Input.js

### 4-1. 구현 방법

-   ㅇ

### 4-2. 어려웠던 점

-   ㅇ

## 5. Dropdown.js

### 5-1. 구현 방법

**HTML** :

-   선택된 메뉴 표시
    -   `div tag`를 이용하여 선택된 메뉴 항목을 표시합니다.
-   메뉴 고르기
    -   메뉴 항목창은 `ul, li tag`를 이용하여 표시하였습니다. `ul`의 첫 번째 `li`에서는 `input tag`를 이용하여 검색을 할 수 있도록 작성하였습니다.

**CSS**

-   메뉴 항목창
    -   blind class를 이용하여 검색하지 않을 때는 보여주지 않습니다.
    -   hover 시 background-color가 변합니다.

**JavaScript**

-   menuData
    -   메뉴들의 목록을 배열로 관리합니다. 필터링되지 않은 메뉴 목록의 원본 역할을 합니다.
-   state
    -   menuList : 띄워지는 메뉴창에 나타날 메뉴들의 목록 정보입니다.
    -   chosenMenu : 메뉴창에서 선택된 메뉴를 나타냅니다.
    -   showMenuList : true일 경우 메뉴창을 표시하고, false일 경우 메뉴창을 표시하지 않습니다.
-   `div tag`(선택된 메뉴 표시하는 박스)
    -   메뉴 항목창이 띄워지지 않은 상태에서 `div tag`를 클릭할 경우 메뉴창이 나타납니다.
    -   메뉴창이 띄워진 상태라면 클릭 할 때 메뉴 항목창 내 `input tag`의 값을 `""`로 초기화 시키고 메뉴 항목창을 사라지게 합니다.
-   메뉴 항목창
    -   ul tag
        -   showMenuList state 값에 따라 메뉴 항목창을 띄울지 말지 결정합니다.
    -   input tag
        -   input tag의 입력 값에 따라 menuData에서 입력에 맞는 항목들이 필터링되고 그 값이 menuList state로 들어가게 됩니다.
    -   그 외 li tag
        -   input tag에 의해 필터링된 menuList state를 map을 이용하여 하나하나 렌더링하게 됩니다.
        -   렌더링된 li tag 한 개를 클릭하게 되면 그 항목을 div tag 내에 표시하고 input tag의 내용을 초기화 한다.

### 5-2. 어려웠던 점

-   `input tag` 안에 가상요소를 적용하지 못한다는 점을 모르고 있어서 관련 해결책을 찾는데 시간을 많이 소요했습니다. 최종적으로 `img tag`를 `position:absolute`를 이용하여 해당 문제를 처리하였습니다.

<!--
해야할 것
- 개발 다하고 README.md 파일에 구현한 점 작성하기
- App.css
    - px -> rem으로 고치고 컴포넌트 각각에 스타일 rem으로 적용하기
- Input.js
    - styledComponent 정리하기
    - 주석 정리하기

-->
