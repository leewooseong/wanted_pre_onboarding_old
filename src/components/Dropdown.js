import react, { useState, useRef } from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 400px;
    height: 40px;
    margin: 30px;

    & div {
        display: flex;
        align-items: center;
        position: relative;
        width: 300px;
        box-sizing: border-box;
        border: solid 1px #000000;
        padding-left: 10px;
        cursor: pointer;
    }
    & p {
        margin: 0;
        vertical-align: middle;
    }
    & button {
        position: absolute;
        right: 10px;
        padding: 0;
        margin: 0;
        width: 10px;
        height: 10px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    & button img {
        vertical-align: top;
        width: 10px;
        height: 10px;
    }

    & ul {
        position: absolute;
        top: 40px;
        /* bottom: 40px; */
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: 1px solid #000000;
    }
    & li {
        padding-left: 40px;
        width: 300px;
        height: 40px;
        box-sizing: border-box;
        line-height: 40px;
        vertical-align: middle;
        transition: all 0.2s;
        cursor: pointer;
    }
    & li:hover {
        background-color: #eeeeee;
    }
    & li > input {
        vertical-align: top;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        font-size: 16px;
    }
    & li:first-child {
        border-bottom: 1px solid #000000;
    }
    & li:first-child:hover {
        background-color: transparent;
    }
    & li > input:focus {
        outline: none;
    }
    & li > input::placeholder {
        color: #aaaaaa;
    }
    & li img {
        position: absolute;
        left: 10px;
        top: 8px;
        width: 20px;
        height: 20px;
    }

    & .blind {
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
`;

const Dropdown = () => {
    const menuData = [
        "ESPRESSO",
        "ESPRESSO DOPPIO",
        "RISTRETTO",
        "LUNGO",
        "CAFE MACCHIATO",
        "CAFE CREME",
        "CAFE NOISETTE",
        "CAFE CORTADO",
        "CAPPUCCINO",
        "DRY CAPPUCCINO",
        "CAFFE AMERICANO",
        "CAFE CON HIELO",
        "BREVE",
        "MOCHA BREVE",
        "MOCHA",
        "CAFFE AFFOGATO",
        "VIENNOIS",
        "CON PANNA",
        "FLAT WHITE",
        "BLACK EYE",
        "CAFFE LATTE",
        "CAFFE AU LAIT",
        "CAFE CON LECHE",
    ];
    const [menuList, setMenuList] = useState([
        "ESPRESSO",
        "ESPRESSO DOPPIO",
        "RISTRETTO",
        "LUNGO",
        "CAFE MACCHIATO",
        "CAFE CREME",
        "CAFE NOISETTE",
        "CAFE CORTADO",
        "CAPPUCCINO",
        "DRY CAPPUCCINO",
        "CAFFE AMERICANO",
        "CAFE CON HIELO",
        "BREVE",
        "MOCHA BREVE",
        "MOCHA",
        "CAFFE AFFOGATO",
        "VIENNOIS",
        "CON PANNA",
        "FLAT WHITE",
        "BLACK EYE",
        "CAFFE LATTE",
        "CAFFE AU LAIT",
        "CAFE CON LECHE",
    ]);

    const searchRef = useRef(null);
    const [menu, setMenu] = useState("Choose Menu");
    const [showMenuList, setShowMenuList] = useState(false);
    const showDropdownList = (e) => {
        if (setShowMenuList) {
            searchRef.current.value = "";
            setMenuList(menuData);
        }
        setShowMenuList(!showMenuList);
    };
    const chooseMenu = (e) => {
        setMenu(e.target.innerText);
        setShowMenuList(false);
        console.log(searchRef.current);
    };
    const handleChange = (e) => {
        setMenuList(
            menuData.filter((value) =>
                value.includes(e.target.value.toUpperCase())
            )
        );
    };

    return (
        <StyledDropdown>
            <div onClick={showDropdownList}>
                <p>{menu}</p>
                <button>
                    <img src="images/drop-down-arrow.svg" alt="" />
                </button>
            </div>
            <ul className={showMenuList ? "" : "blind"}>
                <li>
                    <img
                        src="images/search-icon.svg
                    "
                        alt=""
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Menu"
                        onChange={handleChange}
                        ref={searchRef}
                    />
                </li>
                {menuList.map((value, index) => (
                    <li key={index}>
                        <p onClick={chooseMenu}>{value}</p>
                    </li>
                ))}
            </ul>
        </StyledDropdown>
    );
};

export default Dropdown;
// Dropdown 요구 사항
// 1. 화살표 버튼을 누르면 토글창 띄우기
// 2. 토글창 내용 몇개만 보여주기
// 3. 검색하면 필터링된 내용만 보여주기
// 4. 토글창에서 클릭하면 입력창에 해당 내용 보여주기
