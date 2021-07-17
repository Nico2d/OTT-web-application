import { useQuery } from "react-query";
import { fetchMediaList } from "../Endpoints/fetchMediaList/fetchMediaList";
import {
  fetchMediaListProps,
  fetchMediaListResponse,
} from "../Endpoints/fetchMediaList/fetchMediaList.types";

export const useMediaList = (
  params: fetchMediaListProps
): [boolean, boolean, fetchMediaListResponse] => {
  const { data, isLoading, isError } = useQuery(
    ["mediaList", params.MediaListId],
    () => fetchMediaList(params)
  );

  const MediaList: fetchMediaListResponse =
    data?.data ?? ({} as fetchMediaListResponse);

  return [isLoading, isError, MediaList];
};
