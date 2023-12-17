import dayjs from 'dayjs';
import { iPost } from '../../pages/Dashboard';

export const PostCard = ({ data }: { data: iPost }) => {
  return (
    <div className="w-80 shadow-lg p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <p>{data?.name}</p>
        <p>{dayjs(data?.published_at).format('DD-MM-YYYY')}</p>
      </div>
      <div>
        <p className="font-bold">{data.title}</p>
        <p className="my-2">{data.content}</p>
      </div>
    </div>
  );
};
