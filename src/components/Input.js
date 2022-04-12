import styled from "styled-components";
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
`;
const InputWrapper = styled.div`
    position: relative;
    margin-bottom: ${(props) =>
        props.className === "email-wrapper" ? "25px" : "0px"};
    & img {
        position: absolute;
        width: 15px;
        left: 235px;
        bottom: 10px;
    }
`;
const StyledLabel = styled.label`
    display: block;
    margin: 5px;
    font-size: 12px;
    color: gray;
`;
const StyledInput = styled.input`
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
    /* input box안에 아이콘 삽입 */
    &:after {
        display: inline-block;
        content: "그림";
        position: absolute;
        right: 100px;
        height: 10px;
        width: 10px;
        color: #000;
        font-size: 10px;
    }
`;
const StyledP = styled.p`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

const Input = () => {
    return (
        <StyledForm className="input_cont">
            <InputWrapper className="email-wrapper">
                <StyledLabel htmlFor="email-inp">E-mail</StyledLabel>
                <StyledInput
                    type="email"
                    maxLength={50}
                    name="email"
                    id="email-inp"
                    placeholder="E-mail"
                />
                <img src="images/check_active.svg" alt="" />
                <StyledP className="blind">Invalid e-mail address.</StyledP>
            </InputWrapper>
            <InputWrapper className="pw-wrapper">
                <StyledLabel htmlFor="password-inp">Password</StyledLabel>
                <StyledInput
                    type="password"
                    name="password"
                    id="password-inp"
                    placeholder="Password"
                />
                <img src="images/pw-show.svg" alt="" />
            </InputWrapper>
        </StyledForm>
    );
};

export default Input;
