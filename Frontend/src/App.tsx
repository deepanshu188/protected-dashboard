import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './pages/Home';
import { useAuth } from './hooks/useAuth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 300000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const { getAuthToken } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'dashboard',
          loader: async () => {
            if (!(await getAuthToken())) {
              return redirect('/');
            }
            return null;
          },
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
