import { MediaItemImage, MediaListItemProps } from "./MediaListItem.types";
import * as Styles from "./MediaListItem.styles";

export const MediaListItem = ({
  mediaItem,
  isClickable,
}: MediaListItemProps) => {
  const getFrameImage = (imagesList: MediaItemImage[]) => {
    const FrameImageVersion = imagesList.find(
      (imageItem) => imageItem.ImageTypeCode === "FRAME"
    );

    return FrameImageVersion?.Url ?? "";
  };

  const clickHandler = () => {
    console.log("CLicked video, open portal???");
  };

  return (
    <Styles.Wrapper onClick={() => isClickable && clickHandler()}>
      <Styles.Title>{mediaItem.Title}</Styles.Title>
      <Styles.StyledImage
        src={getFrameImage(mediaItem.Images)}
        alt={mediaItem.Title}
      />
    </Styles.Wrapper>
  );
};
