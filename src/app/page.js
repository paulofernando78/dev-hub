import Snippet from "@/components/Snippet";
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import CheatSheet from "@/components/CheatSheet";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Nav />
        <CheatSheet />
        <Snippet />
      </main>
    </>
  );
}
