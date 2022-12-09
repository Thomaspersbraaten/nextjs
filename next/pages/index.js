import Head from "./components/layout/Head";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "./constants/api";

export default function Home(props) {
  // the log here will happen in the browser console
  console.log(props);
  return (
    <Layout>
      <Head title="Next" />
      <h1>Home page</h1>
      <div className="game-container">
        {props.games.map((game) => {
          return (
            <a key={game.id} href={`game/${game.id}`}>
              {game.name}
            </a>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop

  // const response = await axios.get("https://api.noroff.dev/api/v1/old-games");
  const response = await fetch("https://api.noroff.dev/api/v1/old-games");
  const json = await response.json();
  console.log(json);

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
async function ok() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop

  // const response = await axios.get("https://api.noroff.dev/api/v1/old-games");
  const response = await fetch("https://api.noroff.dev/api/v1/old-games");
  const json = await response.json();
  console.log(json);

  // the log here will happen on the server, you can check the console in your editor
  // console.log(response.data);

  // the array is on the response.data.results property
  // console.log(response.data.results);
  // games = response.data.results;

  // the props object we return here will become the props in the component
}
ok();
