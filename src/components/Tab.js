import styled from "styled-components";
import React, { useState } from "react";
const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: stretch;
    position: relative;
    width: 420px;
    height: 40px;
    margin: 30px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 140px;
        height: 4px;
        background-color: #10afaf;
        transition: all 0.5s;
        transform: translateX(${(props) => props.location});
        z-index: 20;
    }
    & button {
        width: 140px;
        margin: 0;
        padding: 0;
        font-size: 15px;
        border: none;
        color: #aaaaaa;
        background: transparent;
        transition: all 0.5s;
        border-bottom: 4px solid #ebebeb;
    }

    & button.active {
        font-weight: 600;
        color: #000000;
    }
`;

const Tab = () => {
    const menuList = [
        { text: "감자", class: "potato" },
        { text: "고구마", class: "sweet-potato" },
        { text: "카레라이스", class: "curry" },
    ];

    const [active, setActive] = useState("potato");

    const handleClick = (e) => {
        if (e.target.className.includes("active")) {
            return;
        }
        setActive(e.target.className);
    };

    // 클릭한 버튼에 해당하는 index 구하기
    const moveActiveBox = (target) => {
        for (let index in menuList) {
            if (menuList[index]["class"] === target) {
                return `${index * 140}px`;
            }
        }
    };

    // rendering 함수
    return (
        <StyledNav location={moveActiveBox(active)}>
            {menuList.map((value, index) => {
                return (
                    <button
                        className={
                            active === value["class"]
                                ? `${value["class"]} active`
                                : value["class"]
                        }
                        onClick={handleClick}
                        key={index}
                    >
                        {value["text"]}
                    </button>
                );
            })}
        </StyledNav>
    );
};

export default Tab;
