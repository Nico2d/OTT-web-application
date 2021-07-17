import axiosInstance from "../../../axiosConfig";
import {
  fetchMediaListProps,
  fetchMediaListResponse,
} from "./fetchMediaList.types";

export const fetchMediaList = async (body: fetchMediaListProps) => {
  return await axiosInstance.post<fetchMediaListResponse>(
    "/Media/GetMediaList",
    body
  );
};
