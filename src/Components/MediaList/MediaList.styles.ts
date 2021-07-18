import Slider from "react-slick";
import styled from "styled-components";

export const ListWrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  overflow: hidden;
`;

export const MediaSlider = styled(Slider)`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-next {
    right: 5px;
    z-index: 10;
  }

  .slick-prev {
    left: 5px;
    z-index: 10;
  }

  .slick-prev:before,
  .slick-next:before {
    opacity: 1;
  }
`;
