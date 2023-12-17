import { Outlet, useMatch } from 'react-router-dom';
import { Nav } from '../components/header/Nav';
import { HomeView } from '../components/home/HomeView';

export const Home = () => {
  const match = useMatch('/');

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="min-h-[93vh] flex">
        {match ? <HomeView /> : <Outlet />}
      </div>
    </div>
  );
};
