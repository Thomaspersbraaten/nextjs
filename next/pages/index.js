import Head from "./components/layout/Head";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "./constants/api";

export default function Home(props) {
  // the log here will happen in the browser console

  return (
    <Layout>
      <Head title="Next" />
      <h1>Home page</h1>

      {props.games.map((game) => {
        return <h3 key={game.slug}>{game.name}</h3>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop

  // const response = await axios.get("https://api.noroff.dev/api/v1/old-games");
  const response = await fetch("https://api.noroff.dev/api/v1/old-games");
  const json = await response.json();

  // the log here will happen on the server, you can check the console in your editor
  // console.log(response.data);

  // the array is on the response.data.results property
  // console.log(response.data.results);
  // games = response.data.results;
  return {
    props: {
      games: json,
    },
  };

  // the props object we return here will become the props in the component
}
