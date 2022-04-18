import styled from "styled-components";
import React, { useState } from "react";
const StyledNav = styled.nav`
    display: inline-flex;
    justify-content: center;
    align-items: stretch;
    position: relative;
    width: 420px;
    height: 40px;
    margin: 30px;
    overflow: hidden;

    & .active-box {
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
        { ko: "감자", en: "potato" },
        { ko: "고구마", en: "sweet-potato" },
        { ko: "카레라이스", en: "curry" },
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
            if (menuList[index]["en"] === target) {
                console.log(index);
                return `${index * 140}px`;
            }
        }
    };

    // rendering 함수
    // location 이동하는 로직 수정할 것
    return (
        <StyledNav location={moveActiveBox(active)}>
            <div className="active-box"></div>
            {menuList.map((value, index) => {
                return (
                    <button
                        className={
                            active === value["en"]
                                ? `${value["en"]} active`
                                : value["en"]
                        }
                        onClick={handleClick}
                        key={index}
                    >
                        {value["ko"]}
                    </button>
                );
            })}
        </StyledNav>
    );
};

export default Tab;

// Tab 요구 사항
// 1. 클릭할 때 글자의 강조가 바뀌어야 한다.
// 2. 클릭하는 버튼으로 흰색 박스가 표시되어야 한다.
