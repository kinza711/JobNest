import { FiAirplay, FiHome, FiTrendingUp } from "react-icons/fi";
import { GiHealthNormal } from "react-icons/gi";

const Benefits = () => (
  <section>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
      <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span>
      Benefits & Perks
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center hover:border-brand-primary/30 transition-all">
        <GiHealthNormal className="text-brand-primary text-3xl mb-2" />
        <p className="text-sm font-semibold">Premium Health</p>
      </div>
      <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center hover:border-brand-primary/30 transition-all">
        <FiAirplay className="text-brand-primary text-3xl mb-2" />
        <p className="text-sm font-semibold">Unlimited PTO</p>
      </div>
      <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center hover:border-brand-primary/30 transition-all">
        <FiHome className="text-brand-primary text-3xl mb-2" />
        <p className="text-sm font-semibold">Remote Stipend</p>
      </div>
      <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center hover:border-brand-primary/30 transition-all">
        <FiTrendingUp className="text-brand-primary text-3xl mb-2" />
        <p className="text-sm font-semibold">Stock Options</p>
      </div>
    </div>
  </section>
);

export default Benefits;
