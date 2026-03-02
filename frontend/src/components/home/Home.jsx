import FeaturedJobs from "../Commonhome/FeaturedJobs";
import Hero from "../Commonhome/Hero";

import WhyChooseUs from "../Commonhome/WhyChooseUs";
import Timeline from "../Commonhome/Timeline";
import Mission from "../Commonhome/Mission";
import CTA from "../Commonhome/CTA";
import Steps from "../Commonhome/Steps";

export default function Home() {
  return (
    <div className="bg-[#F9FAFB] dark:bg-brand-gray-900 font-display text-brand-gray-800 dark:text-brand-gray-100">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container  flex flex-col w-full max-w-7xl px-4">
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
      </div>
    </div>
  );
}
