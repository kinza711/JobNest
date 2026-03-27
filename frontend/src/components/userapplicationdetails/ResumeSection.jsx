
import { FiDownload, FiEye } from "react-icons/fi"; // general icons
import { AiOutlineRobot } from "react-icons/ai"; // AI summary icon

const ResumeSection = ({ userApp }) => {
  const resumeURL = userApp?.resume; // resume URL from backend

  const handleDownload = () => {
    if (!resumeURL) return;

    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = resumeURL.split("/").pop(); // filename from path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-slate-900 dark:text-white">Resume</h4>
        <button
          onClick={handleDownload}
          className="flex items-center gap-1 text-brand-primary font-bold text-sm hover:opacity-90 transition-opacity"
        >
          <FiDownload className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-8 text-center border-2 border-dashed border-slate-200 dark:border-slate-700">
        {resumeURL ? (
          <iframe
            src={resumeURL}
            title="Resume Preview"
            className="w-full h-[60vh] rounded-lg"
          ></iframe>
        ) : (
          <p className="text-slate-500 dark:text-slate-400">
            No resume uploaded
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeSection;
