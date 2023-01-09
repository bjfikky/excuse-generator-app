import { Provider as PaperProvider, Button } from "react-native-paper";
import { QueryClientProvider, QueryClient } from "react-query";
import Main from "./components/Main";

export default function App() {

  const queryClient = new QueryClient();

  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <Main/>
      </QueryClientProvider>
    </PaperProvider>
  );
}
