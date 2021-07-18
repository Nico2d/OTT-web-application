import styled from "styled-components";
import logo from "../../../Assets/logo.png";

export const Logo = () => {
  return <StyledLogo src={logo} alt="logo" width="40px" height="40px" />;
};

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;
