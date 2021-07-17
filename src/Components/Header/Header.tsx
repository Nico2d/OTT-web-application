import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./Logo/Logo";

export const Header = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  return (
    <header>
      <StyledNavigation>
        <Link to="/">
          <Logo />
        </Link>

        {!isLoginPage && <StyledLink to="/login">SIGN IN</StyledLink>}
      </StyledNavigation>
    </header>
  );
};

const StyledNavigation = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 2rem;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.big};
  margin: auto 0;
`;
