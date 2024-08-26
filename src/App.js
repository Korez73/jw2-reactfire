/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMemo, useContext } from "react";
import { Context } from "./context"
import Card from "./components/Card";
import Layout from "./components/Layout"
import "./App.css";


function App() {
  const { state } = useContext(Context)
  const count = useMemo(() => {
    return `${state.items.length} image${state.items.length > 1 ? 's':''}`
  }, [state.items])

  return (
    <Layout>
      <h1 className="text-center">Gallery ({count})</h1>
      <div className="row">
        {state.items.map((item, index) => <Card key={index} {...item}/>)}
      </div>
    </Layout>
  );

}
export default App;
