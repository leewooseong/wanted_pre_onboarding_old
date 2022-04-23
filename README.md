# wanted_pre_onboarding

원티프 프리온보딩 프론트엔드 선발과제

<!--
    README.md 파일에는 구현한 방법과 이유에 대한 간략한 내용, 구현하면서 어려웠던 점과 해결 과정과 방법 등을 적어주세요. 자랑이 들어가도 좋습니다.
-->

## 1. Toggle.js

### 1-1. 구현 방법

-   HTML
    -   버튼 2개를 div 박스로 감싸는 형태로 구현하였습니다.
-   CSS
    -   가상 요소 선택자를 이용하여 slide animation을 구현하였습니다.
-   JS
    -   state
        -   state는 활성화된 버튼의 클래스 이름을 나타냅니다. 버튼을 클릭할 경우 onClick 이벤트 핸들러를 이용하여 클릭된 버튼의 클래스 이름으로 state를 변경합니다.
    -   버튼 활성화 시키기
        -   state 변화로 인한 리렌더링 시 버튼들의 클래스 이름과 state로 관리하는 클래스 이름을 비교합니다.
        -   버튼과 state의 클래스 이름이 같다면 그 버튼 클래스 이름에는 active 클래스가 추가되어 렌더링되고 붙고 같지 않다면 자신의 클래스 이름을 유지하여 렌더링됩니다.
        -   active 클래스 유무에 따라 활성화된 css를 가질 수 있습니다.
        -   active가 붙은 버튼을 클릭하게 된다면 state를 변경하지 않고 이벤트 핸들러 함수를 종료합니다.
    -   slider animation
        -   state로 관리되는 변수 따라 div 박스의 location props의 값이 달라지며 이를 통해 가상 요소(slider)가 움직이게 됩니다.

### 1-2. 어려웠던 점

-   처음에는 slider 구현을 하기 위해서는 HTML 요소를 추가해야한다는 판단이 서질 못해서 해매었습니다. 하지만 추후에 div 태그를 추가하여 slider를 구현하였고 가상 요소를 활용하여 불필요한 HTML tag를 줄일 수 있었습니다.

## 2. Tab.js

### 2-1. 구현 방법

-   HTML
    -   버튼 3개를 nav 태그로 감싸는 형태로 구현하였습니다.
-   CSS
    -   가상 요소 선택자를 이용하여 slide animation을 구현하였습니다.
-   JS
    -   Tab information
        -   nav에 들어갈 버튼들의 정보를 **menuList**라는 배열로 관리합니다.
        -   각 배열의 요소들은 객체로 구성되어 있으며 text는 Tab 내 버튼의 한글 텍스트를 의미하고 class는 버튼들의 class 이름을 의미합니다.
        -   배열과 map 함수를 이용하여 nav 내 버튼들을 생성합니다.
    -   state
        -   Toggle의 state와 동일합니다.
    -   버튼 활성화 시키기
        -   Toggle의 버튼 활성화 시키는 방법과 동일합니다.
    -   slider animation
        -   moveActiveBox 함수와 location props를 이용하여 slider animation을 구현하였습니다.
        -   moveActiveBox 함수는 state와 menuList를 이용하여 현재 활성화된 버튼의 위치를 계산합니다.
        -   계산된 값은 location props의 값으로 사용됩니다.

### 2-2. 어려웠던 점

-   Toggle을 구현 후 수월하게 구현을 할 수 있었습니다.

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
