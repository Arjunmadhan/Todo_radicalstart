import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);

