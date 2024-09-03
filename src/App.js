/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useMemo, useContext, useEffect } from "react";
import { Context } from "./context/FirestoreContext"
import Firestore from "./handlers/firestore";
import { useAuthContext } from "./context/AuthContext"
import Card from "./components/Card";
import List from "./components/List"
import "./App.css";


function App() {
  const { state, read } = useContext(Context)
  const { authenticate } = useAuthContext()
  const count = useMemo(() => {
    return `${state.items.length} image${state.items.length > 1 ? 's':''}`
  }, [state.items])

  useEffect(() => {
    read()
    authenticate()
  }, [])

  return (
    <>
      <h1 className="text-center">Gallery ({count})</h1>
      <List items={state.items} />
    </>
  );

}
export default App;
