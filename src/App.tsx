import * as React from "react";
import { ToastProvider } from "react-toast-notifications";
import SubscribeToProduct from "./Components/SubscribeToProduct";

/** Styling */
import { AppWrapper } from "./Components/Styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <ToastProvider placement="bottom-center">
        <SubscribeToProduct />
      </ToastProvider>
    </AppWrapper>
  );
};

export default App;
