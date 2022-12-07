import Link from "next/link";
import Head from "./components/layout/Head";
import Layout from "./components/layout/Layout";

export default function About() {
  return (
    <>
      <Layout>
        <Head title="About" />

        <div className="container">
          <h1>About</h1>
        </div>
      </Layout>
    </>
  );
}
