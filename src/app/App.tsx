import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryProvider } from "./providers/QueryProvider";
import { EmotionProvider } from "./providers/EmotionProvider";
import { CartsPage } from "@pages/carts";
import { CartDetailsPage } from "@pages/cart-ditails";

import "./styles/main.scss";

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/carts" element={<CartsPage />} />
      <Route path="/carts/:id" element={<CartDetailsPage />} />
      <Route path="*" element={<CartsPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="test-headliner">
      <QueryProvider>
        <EmotionProvider>
          <AppContent />
        </EmotionProvider>
      </QueryProvider>
    </BrowserRouter>
  );
};
export default App;
