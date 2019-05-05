import * as React from "react";
import SubscribeToProduct from "./Components/SubscribeToProduct";

/** Styling */
import { AppWrapper } from "./Components/Styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <SubscribeToProduct />
    </AppWrapper>
  );
};

export default App;
