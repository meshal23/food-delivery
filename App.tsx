import './global.css';
import 'react-native-gesture-handler';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Navigation from './navigation';

const queryClient = new QueryClient({});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
