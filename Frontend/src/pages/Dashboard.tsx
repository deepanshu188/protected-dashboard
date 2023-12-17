import { useQuery } from 'react-query';
import { PostCard } from '../components/UI/PostCard';
import { getPosts } from '../services/Posts';
import { useAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../redux/slices/postSlice';
import { useNavigate } from 'react-router-dom';

export interface iPost {
  id: number;
  name: string;
  published_at: string;
  title: string;
  content: string;
}

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAuthToken, logout } = useAuth();

  const { data } = useSelector(
    (i: { postSlice: { data: iPost[] } }) => i.postSlice
  );

  useQuery('posts', () => getPosts(getAuthToken()), {
    onSuccess: (data) => {
      if (data?.message === 'token expired!') {
        logout();
        navigate('/');
      }
      dispatch(setPosts(data.posts));
    },
  });

  return (
    <div className="w-full p-6">
      <div className="flex gap-6">
        {data?.map((item: iPost) => {
          return <PostCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
