export type MediaItemType = {
  AvailableFrom: string;
  Description: string;
  Duration: number;
  Guid: string;
  Id: number;
  Images: MediaItemImage[];
  IsTrialContentAvailable: boolean;
  MediaAgeRestrictionImageUrl: string;
  MediaAgeRestrictionValueMin: number;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  Products: [{}];
  Title: string;
  Year: number;
};

export type MediaListItemProps = {
  mediaItem: MediaItemType;
  isClickable: boolean;
};

export type MediaItemImage = {
  Id: number;
  ImageTypeCode: string;
  MediaId: number;
  PlatformCode: string;
  Url: string;
};
