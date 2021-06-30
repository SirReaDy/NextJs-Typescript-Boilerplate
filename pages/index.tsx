import Head from "next/head";
import { useContext } from "react";

import { StoreContext } from "../src/store/context";
import Input from "../src/components/Input/Input";
import Br from "../src/components/Br/Br";

const Home = () => {
  const { state, actions } = useContext(StoreContext);

  return (
    <>
      <Head>
        <title key="title">Next Js - Typescript Template</title>
      </Head>
      <Br/>
      <Input onChange={(value: string) => actions.testAction(value)} />
      {state.temp.text}
    </>
  );
};

export default Home;
