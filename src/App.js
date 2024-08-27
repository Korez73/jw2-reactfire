/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useMemo, useContext, useEffect } from "react";
import { Context } from "./context"
import Firestore from "./handlers/firestore";
import Card from "./components/Card";
import Layout from "./components/Layout";
import "./App.css";

const { readDocs } = Firestore


function App() {
  const { state } = useContext(Context)
  const count = useMemo(() => {
    return `${state.items.length} image${state.items.length > 1 ? 's':''}`
  }, [state.items])

  useEffect(() => {
    readDocs().then(console.log)
  }, [])

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
