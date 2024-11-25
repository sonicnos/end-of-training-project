import React from "react";

const Interview = () => {
  return (
    <section className="h-full bg-slate-300 text-6xl font-bold text-black overflow-hidden">
      <div className="flex h-1/2 w-full bg-yellow-500">
        <div className="bg-orange-400 h-full w-1/2 flex items-center justify-center">
          <div className="bg-blue-400 w-80 h-80 rounded-full flex items-center justify-center">
            photo
          </div>
        </div>
        <div className="bg-sky-400 h-full w-full flex gap-x-20 items-center justify-around">
          <div className="bg-red-500 flex flex-col gap-6 h-1/2">
            <h2>Name</h2>
            <h3>Surname</h3>
          </div>
          <div className="bg-red-500 flex flex-col gap-6 h-1/2">
            <h3>Company</h3>
            <h3>Experience job</h3>
          </div>
        </div>
      </div>
      <div className="bg-emerald-600 w-full h-1/2 flex items-center justify-center">
        Description job
      </div>
    </section>
  );
};

export default Interview;
