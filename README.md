# wanted_pre_onboarding

원티프 프리온보딩 프론트엔드 선발과제

<!--
    README.md 파일에는 구현한 방법과 이유에 대한 간략한 내용, 구현하면서 어려웠던 점과 해결 과정과 방법 등을 적어주세요. 자랑이 들어가도 좋습니다.
-->

## 4. Input.js

### 4-1. 구현 방법

**HTML**

-   form tag 안에 div tag 2개가 들어있는 방식입니다.
-   각 div tag는 email관련 input 처리하는 것 1개, password 관련 input 처리하는 것 1개로 구성되어 있습니다.

**CSS**

-   blind를 이용하여 에러가 나지 않은 email의 경우 경고 알림을 표시하지 않습니다.

**JavaScript**

-   state
    -   emailValid : 이메일 유효성 결과를 boolean 값으로 표협합니다.
    -   showAlert : 경로 알림을 띄울지 말지를 boolean 값으로 표현합니다.
    -   showPW : pw를 text로 표시할 지 여부를 boolean 값으로 표현합니다.
-   Email 유효성 검사
    -   email-wrapper class 내의 input 값이 변화하면 입력된 값을 이용해 email이 유효한지 판단합니다.
    -   유효성 검사는 정규식을 이용하여 email 조건을 만족하는 지 검사합니다.
    -   단 입력된 값이 `""`라면 이메일 유효성 검사를 하지 않습니다.
    -   입력된 값이 유효성 검사를 통과한다면 showAlert 값을 false로 바꾸고 emailValid를 true로 바꿔줍니다. 이에 따라 email-wrapper class 내의 img가 활성화된 이미지로 바뀝니다.
    -   입력된 값이 유효성 검사를 통과하지 못한다면 emailValid를 false로 바꿔줍니다. 이에 따라 email-wrapper class 내의 img가 비활성화된 이미졸 바뀝니다.
    -   emailValid 값이 false이더라도 focus가 해제되지 않는한 showAlert 값이 true로 바뀌지 않습니다.
-   경고 알림 표시하기
    -   showAlert state 값에 따라 알림이 표시됩니다.
    -   input의 입력에 의해 emailValid가 false인 상태에서 focus가 해제되면 showAlert 값이 true로 바뀌고 경고 알림이 표시됩니다.
    -   input의 입력에 의해 emailValid가 true가되면 focus 여부와 상관없이 showAlert 값이 false로 바뀌고 경고 알림이 사라집니다.
-   비밀번호 표시하기
    -   비밀번호란에 눈 모양 이미지를 클릭하면 pw-wrapper class 내의 input의 type을 password에서 text로 바꿔주고 눈 모양 이미지를 활 성활된 이미지로 바꿔줍니다.
    -   현재 input의 type이 text라면 type을 password로 바꿔주고 눈 모양 이미지를 비활성화된 이미지로 바꿔줍니다.

### 4-2. 어려웠던 점

-   Input을 구현함에 있어서는 이런 로그인을 처음 구현해보는 것이라 로직을 어떻게 할지 명세하는 것이 조금 복잡했었습니다.

<!--
해야할 것
- 개발 다하고 README.md 파일에 구현한 점 작성하기
- App.css
    - px -> rem으로 고치고 컴포넌트 각각에 스타일 rem으로 적용하기
- Input.js
    - styledComponent 정리하기
    - 주석 정리하기

-->
