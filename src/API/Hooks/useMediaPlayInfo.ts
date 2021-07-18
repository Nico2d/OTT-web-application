import { useQuery } from "react-query";
import { getMediaPlayInfo } from "../Endpoints/getMediaPlayInfo/getMediaPlayInfo";
import {
  getMediaPlayInfoParams,
  getMediaPlayInfoResponse,
} from "../Endpoints/getMediaPlayInfo/getMediaPlayInfo.types";

export const useMediaPlayInfo = (
  body: getMediaPlayInfoParams
): [getMediaPlayInfoResponse, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery(["player", body.MediaId], () =>
    getMediaPlayInfo(body)
  );

  const MediaPlayInfo = data?.data ?? ({} as getMediaPlayInfoResponse);

  return [MediaPlayInfo, isLoading, isError];
};
