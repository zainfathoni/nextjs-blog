export default function Contact() {
  return <h1>Contact</h1>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`...`)
  // const data = await res.json()
  //
  // Pass data to the page via props
  return { props: { data: "from API" } };
}
