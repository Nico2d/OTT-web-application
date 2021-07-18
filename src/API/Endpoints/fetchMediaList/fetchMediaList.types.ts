import { MediaItemType } from "../../../Components/MediaListItem/MediaListItem.types";

export type fetchMediaListProps = {
  MediaListId: number;
  IncludeCategories: boolean;
  IncludeImages: boolean;
  IncludeMedia: boolean;
  PageNumber: number;
  PageSize: number;
};

export type fetchMediaListResponse = {
  Entities: MediaItemType[];
};
