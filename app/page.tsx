import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="max-w-5xl m-auto flex min-h-screen flex-col items-center gap-16 p-8">
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
