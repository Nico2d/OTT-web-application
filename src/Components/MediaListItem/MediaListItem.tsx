import { MediaItemImage, MediaListItemProps } from "./MediaListItem.types";
import * as Styles from "./MediaListItem.styles";
import { useHistory } from "react-router-dom";
import imageNotFound from "../../Assets/image-not-found.png";
import { useUserContext } from "../../Context/UserContext";

export const MediaListItem = ({
  mediaItem,
  isClickable,
}: MediaListItemProps) => {
  const history = useHistory();
  const { user } = useUserContext();
  const isAnon = user.id === -999;

  const getFrameImage = (imagesList: MediaItemImage[]) => {
    const FrameImageVersion = imagesList.find(
      (imageItem) => imageItem.ImageTypeCode === "FRAME"
    );

    return FrameImageVersion?.Url ?? imageNotFound;
  };

  const clickHandler = () => {
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
