import { fetchMediaListProps } from "../../API/Endpoints/fetchMediaList/fetchMediaList.types";
import { useMediaList } from "../../API/Hooks/useMediaList";
import { MediaListItem } from "./MediaListItem/MediaListItem";

type MediaListProps = {
  id: number;
};

export const MediaList = ({ id }: MediaListProps) => {
  const body: fetchMediaListProps = {
    MediaListId: id,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,
    PageNumber: 1,
    PageSize: 15,
  };

  const [isLoading, isError, data] = useMediaList(body);

  if (isLoading) return <p>Loading... </p>;
  if (isError) return <p>Error.. Spróbuj później</p>;

  return (
    <div>
      Here is list {id}
      {data.Entities.map((item) => {
        return <MediaListItem mediaItem={item} key={item.Guid} />;
      })}
    </div>
  );
};
