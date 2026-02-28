import FeaturedJobs from "../components/home/FeaturedJobs";
import Hero from "../components/home/Hero";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Timeline from "../components/home/Timeline";
import Mission from "../components/home/Mission";
import CTA from "../components/home/CTA";
import Steps from "../components/home/Steps";

export default function Home() {
  return (
    <div className="bg-[#F9FAFB] dark:bg-brand-gray-900 font-display text-brand-gray-800 dark:text-brand-gray-100">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container  flex flex-col w-full max-w-7xl px-4">
            <Header />

            {/* HERO SECTION */}
            <main className="flex-grow">
              <Hero />
              <FeaturedJobs />
              <WhyChooseUs />
              <Timeline />
              <Mission />
              <Steps />
              <CTA />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
