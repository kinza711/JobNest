import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-[#F9FAFB] dark:bg-brand-gray-900 font-display text-brand-gray-800 dark:text-brand-gray-100">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container  flex flex-col w-full max-w-7xl px-4">
            {/* <Header /> */}

            {/* HERO SECTION */}
            <main className="flex-grow">
              <Home />
            </main>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
