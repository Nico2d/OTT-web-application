import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 56.25%;
  height: 0;
  overflow: hidden;
  background: gray;
  position: relative;
  border-radius: 10px;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 2;
    box-shadow: -1px -34px 84px 12px rgba(0, 0, 0, 1) inset;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  position: absolute;
  bottom: 5px;
  padding-left: 1rem;
  z-index: 3;
  text-shadow: 2px 2px black;
`;
