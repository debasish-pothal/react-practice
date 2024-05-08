import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const classes =
          index === currentItem ? "job-btn active-btn " : "job-btn";

        return (
          <button
            key={job.id}
            className={classes}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
