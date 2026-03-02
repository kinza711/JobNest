import { FiCheckCircle, FiBriefcase, FiGlobe, FiCreditCard } from "react-icons/fi";

const JobDisc = () => (
  <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
    {/* About the Role */}
    <section>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span> About the Role
      </h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        At TechFlow Systems, we're building the future of enterprise workflow management. 
        We're looking for a Senior UI/UX Designer who is passionate about creating intuitive, 
        beautiful, and highly functional digital experiences. You will lead design efforts 
        for our flagship product, working closely with engineering and product teams.
      </p>
    </section>

    {/* Key Responsibilities */}
    <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span> Key Responsibilities
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Lead end-to-end design process from research to high-fidelity prototypes.",
          "Maintain and evolve our design system, ensuring consistency across all platforms.",
          "Collaborate with stakeholders to define product goals and success metrics.",
          "Conduct user testing and gather qualitative data to inform design decisions."
        ].map((task, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
            <FiCheckCircle className="text-brand-secondary mt-1" /> {task}
          </li>
        ))}
      </ul>
    </section>

    {/* Requirements */}
    <section>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span> Requirements
      </h3>
      <ul className="space-y-3 list-disc list-inside text-slate-600 dark:text-slate-300">
        <li>5+ years of experience in product design, specifically for SaaS or enterprise software.</li>
        <li>Proficiency in Figma, Adobe Creative Suite, and prototyping tools.</li>
        <li>Strong portfolio showcasing complex problem-solving and visual design excellence.</li>
        <li>Experience working in an Agile/Scrum development process.</li>
        <li>Excellent communication skills and ability to articulate design rationale.</li>
      </ul>
    </section>
  </div>
);

export default JobDisc;