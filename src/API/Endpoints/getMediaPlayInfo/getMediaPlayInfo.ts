import axiosInstance from "../../../axiosConfig";
import {
  getMediaPlayInfoParams,
  getMediaPlayInfoResponse,
} from "./getMediaPlayInfo.types";

export const getMediaPlayInfo = async (body: getMediaPlayInfoParams) => {
  return await axiosInstance.post<getMediaPlayInfoResponse>(
    "/Media/GetMediaPlayInfo",
    body
  );
};
