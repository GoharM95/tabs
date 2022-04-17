// import React, { useState, useEffect } from "react";
// import "./App.css";

// const url = "https://course-api.com/react-tabs-project";

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(0);

//   const fetchJobs = async () => {
//     const response = await fetch(url);
//     const newJobs = await response.json();
//     console.log(newJobs);

//     setJobs(newJobs);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   if (loading) {
//     return <h2>loading...</h2>;
//   }
//   console.log(jobs);
//   const { dates, duties, title } = jobs[value];
//   return (
//     <div>
//       <h2>experience</h2>
//       <div>
//         {jobs.map((job, index) => {
//           return (
//             <button key={job.id} onClick={() => setValue(index)}>
//               {job.company}
//             </button>
//           );
//         })}
//       </div>
//       <h3>{title}</h3>
//       <h3>{dates}</h3>
//       {duties.map((duty, index) => {
//         return (
//           <div key={index}>
//             <p>{duty}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";

const url = "https://course-api.com/react-tabs-project";

class App extends React.Component {
  state = { loading: true, jobs: [], value: 0 };

  fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    this.setState({ jobs: newJobs });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.fetchJobs();
  }

  render() {
    const { loading, jobs, value } = this.state;
    if (loading) {
      return <h2>loading...</h2>;
    }
    console.log(jobs);
    const { dates, duties, title } = jobs[value];
    return (
      <div>
        <h2>experience</h2>
        <div>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => this.setState({ value: index })}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <h3>{title}</h3>
        <h3>{dates}</h3>
        {duties.map((duty, index) => {
          return (
            <div key={index}>
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
