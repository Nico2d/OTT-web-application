import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMediaPlayInfoParams } from "../API/Endpoints/getMediaPlayInfo/getMediaPlayInfo.types";
import { useMediaPlayInfo } from "../API/Hooks/useMediaPlayInfo";
import { WarningMessage } from "../Components/Shared/Input/Input.styles";

type HistoryProps = {
  id: string;
  streamType: string;
};

export const Player = () => {
  let params = useParams<HistoryProps>();

  const bodyParams: getMediaPlayInfoParams = {
    MediaId: +params.id,
    StreamType: params.streamType.toUpperCase(),
  };

  const [data, isLoading, isError] = useMediaPlayInfo(bodyParams);

  if (isLoading) return <p>Loading...Sprawdzenie uprawnień</p>;
  if (isError)
    return (
      <WarningMessage position="center">
        Brak wystarczających uprawnień
      </WarningMessage>
    );

  return (
    <Wrapper>
      <ReactPlayer controls={true} url={data.ContentUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
