import styled from "styled-components";
import React, { useState } from "react";
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
    const [emailValid, setEmailValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showPW, setShowPW] = useState(false);

    // email 유효성 검사 함수
    const validateEmail = (input) => {
        const emailRule =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return emailRule.test(input);
    };

    // email input DOM의 이벤트 핸들러
    const handleChange = (e) => {
        if (e.target.value === "") {
            setShowAlert(false);
        } else if (validateEmail(e.target.value)) {
            setShowAlert(false);
            setEmailValid(true);
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
