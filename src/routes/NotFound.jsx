import Layout from "../components/Layout";
import { ScrollRestoration } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <ScrollRestoration />
      <section>
        <div className="relative h-[30rem]">
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1533224379524-2c680bacf540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
            }}
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          />

          <div className="absolute top-16 left-0 right-0 ">
            <div className="flex flex-col items-center mx-auto max-w-3xl text-center gap-y-6">
              <span className="font-mono tracking-widest text-xl">404</span>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Uh oh! Looks like you are lost.
              </h1>
              <p className="big">
                It looks like the page you are looking for doesnt exist.
              </p>
              <button className="mt-4">Go back home</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
