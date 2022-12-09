import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
export default function Game({ game }) {
  console.log(game);
  return (
    <Layout>
      <Head title={game.name} />
      <h1>{game.name}</h1>
      <img src={game.image} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // the same API call we used in `index.js`
    // we want to get all the slugs from the array of games
    // so first we need to fetch the games
    // const response = await axios.get(BASE_URL);
    const response = await fetch("https://api.noroff.dev/api/v1/old-games");
    const json = await response.json();
    // the log here will happen on the server, you can check the console in your editor

    // the array is on the response.data.results property
    const games = json;

    // Get the paths we want to pre-render based on the slugs in the games
    // const paths = games.map((game) => ({
    //   params: { slug: game.slug },
    // }));
    const paths = games.map((game) => ({
      params: { id: game.id.toString() },
    }));

    // console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  // console.log(params);
  const url = `https://api.noroff.dev/api/v1/old-games/${params.id}`;
  // console.log(url);

  let game = null;

  try {
    const response = await fetch(url);
    const json = await response.json();
    // the value we want is on response.data here, not response.data.data
    game = json;
    // console.log(json);
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { game: game },
  };
}
