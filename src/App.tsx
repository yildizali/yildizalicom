import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  const path = window.location.pathname;
  return path === "/" ? <Index /> : <NotFound />;
};

export default App;
