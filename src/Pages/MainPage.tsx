import { MediaList } from "../Components/MediaList/MediaList";

export const MainPage = () => {
  return (
    <div>
      Main Screen
      <MediaList MediaListId={2} />
      <MediaList MediaListId={3} />
    </div>
  );
};
