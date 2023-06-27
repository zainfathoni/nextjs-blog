import Image from "next/image";

export default function Me() {
  return (
    <main>
      <h1>It's Me!</h1>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={144}
        height={144}
      />
      <a href="/contact">Contact me</a>
    </main>
  );
}
