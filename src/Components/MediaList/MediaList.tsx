import { fetchMediaListProps } from "../../API/Endpoints/fetchMediaList/fetchMediaList.types";
import { useMediaList } from "../../API/Hooks/useMediaList";
import { MediaListItem } from "../MediaListItem/MediaListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./MediaList.styles";
// import { MediaSliderConfig } from "./MediaSlider.config";
import { useState } from "react";

type MediaListProps = {
  MediaListId: number;
};

export const MediaList = ({ MediaListId }: MediaListProps) => {
  const [clickable, setClickable] = useState(true);

  const body: fetchMediaListProps = {
    MediaListId: MediaListId,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,
    PageNumber: 1,
    PageSize: 15,
  };

  const [isLoading, isError, data] = useMediaList(body);

  if (isLoading) return <p>Loading... </p>;
  if (isError) return <p>Error.. Spróbuj później</p>;

  const MediaSliderConfig = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    afterChange: () => setClickable(true),
    beforeChange: () => setClickable(false),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Styled.ListWrapper>
      <h2>Media list {MediaListId}</h2>
      <Styled.MediaSlider {...MediaSliderConfig}>
        {data.Entities.map((item) => {
          return (
            <MediaListItem
              mediaItem={item}
              key={item.Guid}
              isClickable={clickable}
            />
          );
        })}
      </Styled.MediaSlider>
    </Styled.ListWrapper>
  );
};
