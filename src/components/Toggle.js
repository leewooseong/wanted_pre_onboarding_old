import styled from "styled-components";
import React, { useRef, useState } from "react";

// 불필요한 CSS 제거하기
const StyledToggle = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 400px;
    height: 40px;
    margin: 30px;
    background-color: #ebebeb;
    overflow: hidden;
    border-radius: 50px;
    border: 4px solid #ebebeb;

    &::after {
        content: "";
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
        if (e.target.className.includes("active")) {
            return;
        }
        setActive(e.target.className);
    };

    // rendering 함수
    return (
        <StyledToggle location={active === "default-btn" ? "0px" : "200px"}>
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
