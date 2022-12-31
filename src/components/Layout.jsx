import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col px-6 2xl:px-0 gap-y-16">
      <Header />
      <main className="flex flex-col gap-y-28">{children}</main>
      <Footer />
    </div>
  );
}
