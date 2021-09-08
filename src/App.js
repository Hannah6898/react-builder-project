import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import IceCreamBuilder from "./containers/IceCreamBuilder/IceCreamBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <IceCreamBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
