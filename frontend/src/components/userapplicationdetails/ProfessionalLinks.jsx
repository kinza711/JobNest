import { FiGlobe, FiFileText } from "react-icons/fi";
import { FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfessionalLinks = ({ userApp }) => {
  const links = [
    {
      label: "Portfolio Website",
      icon: <FiGlobe className="w-5 h-5" />,
      url: userApp?.portfolio,
      color: "text-brand-primary",
    },
    {
      label: "Website Link",
      icon: <FaBehance className="w-5 h-5" />,
      url: userApp?.website,
      color: "text-brand-secondary",
    },
    {
      label: "LinkedIn Profile",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: userApp?.linkedIn,
      color: "text-blue-700",
    },
    {
      label: "GitHub Repository",
      icon: <FaGithub className="w-5 h-5" />,
      url: userApp?.github,
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
        {links.map(
          (link, index) =>
            link.url && (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className={`${link.color} group-hover:text-primary`}>
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                </div>

                <FiFileText className="w-4 h-4 text-slate-400" />
              </a>
            ),
        )}
      </div>
    </div>
  );
};

export default ProfessionalLinks;
