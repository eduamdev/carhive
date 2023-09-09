export default function Page() {
  return (
    <main>
      <section className="mt-16">
        <h1 className="text-center text-4xl font-black">Find your ride</h1>
        <div className="mx-auto mt-8 flex h-16 max-w-2xl items-center justify-between rounded-full border px-6 py-1">
          <div>From</div>
          <div>To</div>
          <div>Check in</div>
          <div>Check out</div>
        </div>
      </section>
      <section className="mt-16">
        <div className="text-center">Caroussel of brands here</div>
      </section>
      <section className="mt-16">
        <h2 className="text-center text-2xl font-extrabold">FAQS</h2>
      </section>
    </main>
  );
}
