export default function Home() {
  return (
    <div
      className={` grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to the App</h1>
        <p className="text-lg text-gray-600">This is a sample application.</p>
      </header>

      <section className="flex flex-col items-center justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Click Me
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </section>

      <footer className="flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-gray-500">© 2023 Your Company</p>
      </footer>
    </div>
  );
}
