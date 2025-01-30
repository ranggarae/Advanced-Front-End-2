import React from "react";
import HoverVertical from "./HoverVertical";

const MyList = ({ movies, redirectPath = "/watchberanda", redirectPath0 = "/detailberanda" }) => {
  return (
    <div className="w-full bg-black text-white p-4 md:p-6">
      {/* Daftar Film */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-y-10">
        {movies.slice(0, 12).map((movie, index) => (
          <HoverVertical key={index} movie={movie} redirectPath={redirectPath} redirectPath0={redirectPath0} />
        ))}
      </div>
    </div>
  );
};

export default MyList;