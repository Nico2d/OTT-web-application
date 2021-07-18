import { MediaItemImage, MediaListItemProps } from "./MediaListItem.types";
import * as Styles from "./MediaListItem.styles";
import { useHistory } from "react-router-dom";

export const MediaListItem = ({
  mediaItem,
  isClickable,
}: MediaListItemProps) => {
  const history = useHistory();
  const isAnon = true;

  const getFrameImage = (imagesList: MediaItemImage[]) => {
    const FrameImageVersion = imagesList.find(
      (imageItem) => imageItem.ImageTypeCode === "FRAME"
    );

    return FrameImageVersion?.Url ?? "";
  };

  const clickHandler = () => {
    console.log("CLicked video, open portal???");

    history.push(`/player/${mediaItem.Id}/${isAnon ? "trial" : "main"}`);
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
