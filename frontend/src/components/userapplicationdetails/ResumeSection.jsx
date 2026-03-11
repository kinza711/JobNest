// import { FiDownload, FiEye } from "react-icons/fi"; // general icons
// import { AiOutlineRobot } from "react-icons/ai"; // AI summary icon

// const ResumeSection = () => {
//   return (
//     <div className="glass rounded-xl p-6 shadow-sm">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h4 className="font-bold text-slate-900 dark:text-white">Resume</h4>
//         <button className="flex items-center gap-1 text-brand-primary font-bold text-sm hover:opacity-90 transition-opacity">
//           <FiDownload className="w-4 h-4" />
//           Download PDF
//         </button>
//       </div>

//       {/* Resume Preview */}
//       <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-8 text-center border-2 border-dashed border-slate-200 dark:border-slate-700">
//         <div className="flex flex-col items-center gap-3">
//           <div className="w-16 h-20 bg-white dark:bg-slate-700 rounded shadow-lg flex items-center justify-center">
//             <FiDownload className="w-8 h-8 text-red-500" />
//           </div>
//           <p className="font-semibold text-slate-900 dark:text-white">
//             Marcus_Richardson_Resume_2024.pdf
//           </p>
//           <p className="text-xs text-slate-500 dark:text-slate-400">
//             2.4 MB • Updated 3 days ago
//           </p>

//           {/* Action Buttons */}
//           <div className="mt-6 flex gap-3 justify-center flex-wrap">
//             <button className="flex items-center gap-1 px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
//               <FiEye className="w-4 h-4" />
//               Full Preview
//             </button>
//             <button className="flex items-center gap-1 px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
//               <AiOutlineRobot className="w-4 h-4" />
//               Review AI Summary
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeSection;

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
