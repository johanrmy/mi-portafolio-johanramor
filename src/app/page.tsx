import Header from "@sections/Header";
import About from "@sections/AboutMe";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";
import Footer from "@/sections/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Sidebar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
