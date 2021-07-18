import { fetchMediaListProps } from "../../API/Endpoints/fetchMediaList/fetchMediaList.types";
import { useMediaList } from "../../API/Hooks/useMediaList";
import { MediaListItem } from "../MediaListItem/MediaListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./MediaList.styles";
import { MediaSliderConfig } from "./MediaSlider.config";

type MediaListProps = {
  MediaListId: number;
};

export const MediaList = ({ MediaListId }: MediaListProps) => {
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

  return (
    <Styled.ListWrapper>
      <h2>Media list {MediaListId}</h2>
      <Styled.MediaSlider {...MediaSliderConfig}>
        {data.Entities.map((item) => {
          return <MediaListItem mediaItem={item} key={item.Guid} />;
        })}
      </Styled.MediaSlider>
    </Styled.ListWrapper>
  );
};
