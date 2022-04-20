import styled from "styled-components";
import React, { useState } from "react";

const StyledForm = styled.form`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;

    & div {
        height: 70px;
        font-size: 40px;
        font-weight: bold;
        vertical-align: middle;
        text-align: right;
        border: 1px solid #dddddd;
        margin-bottom: 20px;
    }
    & div p {
        line-height: 70px;
        margin: 0;
        margin-right: 10px;
    }
    & div span {
        margin-left: 5px;
    }
    & input {
        width: 400px;
        cursor: pointer;
    }
    & input[type="range"] {
        display: block;
        cursor: pointer;
    }
    & ul {
        display: flex;
        justify-content: space-between;
        height: 20px;
        padding: 0;
        list-style: none;
        & li {
            width: 50px;
        }
        & button {
            border-radius: 20px;
            width: 100%;
            height: 100%;
            padding: 0;
            border: none;
        }
    }
`;
const Slider = () => {
    const rangeData = [1, 25, 50, 75, 100];
    const [sliderValue, setSliderValue] = useState(1);
    const handleChange = (e) => {
        console.log("is Changing");
        setSliderValue(e.target.value);
    };
    const handleClick = (e, value) => {
        setSliderValue(value);
    };

    return (
        <StyledForm>
            <div>
                <p>
                    {sliderValue}
                    <span>%</span>
                </p>
            </div>
            <input
                type="range"
                name=""
                id=""
                min="1"
                max="100"
                value={sliderValue}
                onChange={handleChange}
            />
            <ul>
                {rangeData.map((value, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            onClick={(e) => handleClick(e, value)}
                        >
                            <span>{value}</span>%
                        </button>
                    </li>
                ))}
            </ul>
        </StyledForm>
    );
};

export default Slider;

// Slider 요구 사항
// 1. slider의 값이 상단에 표시된다.
// 2. 하단 버튼과 slider의 값이 매칭된다.
