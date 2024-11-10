import React from "react";
import VoteForm from "./components/votes-form/VoteForm";
import TotalVotes from "./components/total-votes/TotalVotes";
import VoteList from "./components/vote-list/VoteList";
import CartProvider from "./components/store/CartProvider";

function App() {
  return (
    <CartProvider>
      <React.Fragment>
        <TotalVotes />
        <VoteForm />
        <VoteList />
      </React.Fragment>
    </CartProvider>
  );
}

export default App;