import styled from "styled-components";
import React, { useRef, useState } from "react";
const StyledToggle = styled.div`
    display: inline-flex;
    justify-content: center;
    position: relative;
    width: 400px;
    height: 40px;
    margin: 30px;
    background-color: #ebebeb;
    overflow: hidden;
    border-radius: 50px;
    border: 4px solid #ebebeb;

    & .active-box {
        position: absolute;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 50px;
        border: none;
        transition: all 0.5s;
        z-index: 10;
        transform: translateX(${(props) => props.location});
    }
    & button {
        width: 50%;
        margin: 0;
        padding: 0;
        font-size: 15px;
        border: none;
        color: #aaaaaa;
        background: transparent;
        z-index: 20;
        transition: all 0.5s;
    }

    & button.active {
        font-weight: 600;
        color: #000000;
    }
`;

const Toggle = () => {
    const [active, setActive] = useState("default-btn");

    const handleClick = (e) => {
        console.log(e.target.className);
        console.log("active state: ", active);
        if (e.target.className.includes("active")) {
            return;
        }
        setActive(e.target.className);
    };

    // rendering 함수
    return (
        <StyledToggle location={active === "default-btn" ? "0px" : "200px"}>
            <div className="active-box"></div>
            <button
                className={
                    active === "default-btn"
                        ? "default-btn active"
                        : "default-btn"
                }
                onClick={handleClick}
            >
                기본
            </button>
            <button
                className={
                    active === "detail-btn" ? "detail-btn active" : "detail-btn"
                }
                onClick={handleClick}
            >
                상세
            </button>
        </StyledToggle>
    );
};

export default Toggle;

// Toggle 요구 사항
// 1. 클릭할 때 글자의 강조가 바뀌어야 한다.
// 2. 클릭하는 버튼으로 흰색 박스가 표시되어야 한다.

// 참고
// $ 빼먹지 말자.. -> 어려웠던 점으로 적기 이걸로 해서 styled-component에 대한 이해가 증가했다고 적기
