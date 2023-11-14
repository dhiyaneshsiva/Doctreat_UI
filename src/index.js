// React
import React from "react";

// RR Dom
import ReactDOM from "react-dom";

//React  Router
import { HashRouter } from "react-router-dom";

// Redux Store & Providers
import { reduxStore } from "./StateHandler/Store/Store";
import { Provider } from "react-redux";

// React Query
import { QueryClient, QueryClientProvider } from "react-query";

// Mantine Packages
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

// Query Client init
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <ModalsProvider>
            <Provider store={reduxStore}>
              <Notifications
                position="top-right"
                zIndex={12345678}
                autoClose={2200}
                withBorder
              />
              Hello ALl
            </Provider>
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
