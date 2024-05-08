import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const jobsResp = await fetch(
      "https://www.course-api.com/react-tabs-project"
    );
    const jobsData = await jobsResp.json();

    setJobs(jobsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
