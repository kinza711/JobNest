import { FiGlobe, FiFileText } from "react-icons/fi"; // General icons
import { FaBehance, FaLinkedin, FaGithub } from "react-icons/fa"; // Brand icons

const ProfessionalLinks = () => {
  const links = [
    {
      label: "Portfolio Website",
      icon: <FiGlobe className="w-5 h-5" />,
      url: "#",
      color: "text-brand-primary",
    },
    {
      label: "Behance Case Studies",
      icon: <FaBehance className="w-5 h-5" />,
      url: "#",
      color: "text-brand-secondary",
    },
    {
      label: "LinkedIn Profile",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "#",
      color: "text-blue-700",
    },
    {
      label: "GitHub Repository",
      icon: <FaGithub className="w-5 h-5" />,
      url: "#",
      color: "text-gray-800 dark:text-gray-200",
    },
  ];

  return (
    <div className="glass rounded-xl p-6 shadow-sm">
      <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <FiFileText className="text-primary w-5 h-5" />
        Professional Links
      </h4>

      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary group transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3">
              <span className={`${link.color} group-hover:text-primary`}>
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            <span className="text-slate-400 text-sm">
              {/* small arrow icon */}
              <FiFileText className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalLinks;
