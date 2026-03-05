import React from "react";
import { useNavigate } from "react-router-dom";
const Back = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center rounded-xl h-11 px-6 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
      >
        Cancle
      </button>
    </>
  );
};

export default Back;
