export type getMediaPlayInfoParams = {
  MediaId: number;
  StreamType: string;
};

export type getMediaPlayInfoResponse = {
  ContentUrl: string;
  Description: string;
  MediaId: number;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  Provider: string;
  StreamId: number;
  Title: string;
};
