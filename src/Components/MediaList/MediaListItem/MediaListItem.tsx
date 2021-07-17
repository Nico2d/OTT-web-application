import styled from "styled-components";
import { MediaListItemProps } from "./MediaListItem.types";

export const MediaListItem = ({ mediaItem }: MediaListItemProps) => {
  console.log(mediaItem);

  console.log(mediaItem.Images[0].Url);
  return (
    <Wrapper>
      <p>{mediaItem.Title}</p>
      <img
        src={
          mediaItem.Images[0].Url ??
          "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        }
        alt={mediaItem.Title}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 56.25%;
  max-height: 50px;
`;
