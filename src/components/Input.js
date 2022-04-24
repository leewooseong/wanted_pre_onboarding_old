import styled from "styled-components";
import React, { useRef, useState } from "react";
const StyledForm = styled.form`
    display: flex;
    width: 270px;
    height: 165px;
    flex-direction: column;
    justify-content: center;
    margin: 30px;

    & div {
        display: flex;
        flex-direction: column;

        position: relative;
        margin-bottom: 5px;
        & button {
            position: absolute;
            width: 20px;
            height: 20px;
            right: 12px;
            top: 35px;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        &.email-wrapper img {
            position: absolute;
            width: 15px;
            right: 20px;
            top: 35px;
        }
        &.pw-wrapper img {
            position: relative;
            width: 20px;
            right: 5px;
            top: 0;
        }
    }

    & label {
        display: inline-block;
        margin: 5px;
        font-size: 12px;
        color: gray;
    }
    & input {
        width: 250px;
        height: 30px;
        padding-left: 10px;
        border: 1px solid rgb(217 217 216);
        border-radius: 5px;
        background-color: rgb(244 244 249);
        ::placeholder {
            color: rgb(217 217 216);
        }
        &:focus,
        &:active {
            outline: 1px solid #999;
        }
    }
    & p {
        padding-left: 5px;
        color: #d73333;
        font-size: 10px;
    }
    & p.blind {
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
`;

const Input = () => {
    // email 관련 Hook
    const [emailValid, setEmailValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // password 관련 Hook
    const [showPW, setShowPW] = useState(false);

    // email 유효성 검사 함수
    const validateEmail = (input) => {
        const emailRule =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return emailRule.test(input);
    };

    // email input DOM의 이벤트 핸들러
    const handleChange = (e) => {
        // js에서는 eventTarget.value였나.. 찾아보기

        // 1. 이메일이 비었다면 알림 끄기
        // 2. 이메일이 유효해졌다면 체크버튼 활성화
        // 3. 입력에 의해 이메일이 유효하지 않아지면 체크버튼 비활성화
        if (e.target.value === "") {
            setShowAlert(false);
        } else if (validateEmail(e.target.value)) {
            setEmailValid(true);
            setShowAlert(false);
        } else if (!validateEmail(e.target.value)) {
            setEmailValid(false);
        }
    };

    const handleBlur = (e) => {
        // emailValid가 false일 때 포커스 아웃된 경우
        if (
            e.target.value !== "" &&
            !emailValid &&
            e.currentTarget === e.target
        ) {
            setShowAlert(true);
        }
        // emailValid가 true일 때 포커스 아웃된 경우
        else if (emailValid && e.currentTarget === e.target) {
            setShowAlert(false);
        }
    };

    const handlePWImgClick = (e) => {
        setShowPW((preState) => {
            return !preState;
        });
    };

    // rendering 함수
    return (
        <StyledForm className="input_cont">
            <div className="email-wrapper">
                <label htmlFor="email-inp">E-mail</label>
                <input
                    type="email"
                    maxLength={50}
                    name="email"
                    id="email-inp"
                    placeholder="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <img
                    src={
                        emailValid
                            ? "images/check_active.svg"
                            : "images/check_unactive.svg"
                    }
                    alt=""
                />
            </div>
            <p className={showAlert ? "" : "blind"}>Invalid e-mail address.</p>

            <div className="pw-wrapper">
                <label htmlFor="password-inp">Password</label>
                <input
                    type={showPW ? "text" : "password"}
                    name="password"
                    id="password-inp"
                    placeholder="Password"
                />
                <button type="button" onClick={handlePWImgClick}>
                    <img
                        src={
                            showPW
                                ? "images/pw-show.svg"
                                : "images/pw-unshow.svg"
                        }
                        alt="비밀번호 표시 여부 이미지"
                    />
                </button>
            </div>
        </StyledForm>
    );
};

export default Input;

// email 요구 사항
// 1. validate === true 면 체크 버튼이 활성화
// 2. validate === false인 상태로 다음 탭으로 넘어가면 알림 활성화
// 3. 메일에 입력이 없으면 알림 비활성화

// password 요구 사항
// 1. 눈 모양 버튼을 클릭하지 않으면 비밀번호 형식으로 표시
// 2. 눈 모양 버튼을 클릭해서 활성화가되면 입력된 비밀번호 원문이 보이도록 표시

// PureComonent 사용하는 이유에 대해서 한번 생각해보기
// 추측
// - setState 함수들이 호출되면 무조건 다시 렌더링되는데 이때 state변화가 없어도 렌더링되기 때문인가?
// - 렌더링되는 컴포넌트의 하위 컴포넌트들이 강제적으로 렌더링되어서인가?
