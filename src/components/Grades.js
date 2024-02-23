import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faTrophy,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const GradesTable = ({ gradesData }) => {
  return (
    <table className="grades-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Count</th>
          <th>Grades</th>
        </tr>
      </thead>
      <tbody>
        {gradesData.map((data, index) => (
          <tr key={index}>
            <td>{data.type}</td>
            <td>{data.count || 1}</td>
            <td>{data.grades.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Grades = () => {
  const user = {
    name: "Yussuf",
  };

  const gradesData = [
    { type: "Challenge", grades: [90, 85, 95] },
    { type: "Quiz", count: 5, grades: [75, 80, 88, 92, 78] },
    { type: "Lab Work", count: 5, grades: [92, 87, 90, 94, 88] },
    { type: "Project", count: 1, grades: [96] },
  ];

  const chartData = gradesData.flatMap((gradeType) => {
    return gradeType.grades.map((grade, index) => ({
      subject: `${gradeType.type} ${index + 1}`,
      grade: grade,
    }));
  });

  const attendanceData = [
    { date: "2024-02-01", attended: true },
    { date: "2024-02-05", attended: false },
  ];

  const totalClasses = attendanceData.length;
  const attendedClasses = attendanceData.filter(
    (entry) => entry.attended
  ).length;
  const attendancePercentage = (attendedClasses / totalClasses) * 100;

  return (
    <div>
      <h2 className="main-title">Software Engineering FT 06 Phase 3</h2>
      <hr style={{ borderTop: "1px solid #ddd", margin: "20px 0" }} />
      <h4 className="section-heading">
        Filter Options <FontAwesomeIcon icon={faInfoCircle} color="#3498db" />
      </h4>
      <div className="filter-options">
        <label htmlFor="course">Course</label>
        <select id="course" name="course">
          <option value="Software Engineering FT 06 Phase 4 Remote">
            Software Engineering FT 06 Phase 4 Remote
          </option>
        </select>

        <label htmlFor="arrangeBy">Arrange By</label>
        <select id="arrangeBy" name="arrangeBy">
          <option value="Due Date">Due Date</option>
        </select>

        <label htmlFor="dueDate">Due Date</label>
        <select id="dueDate" name="dueDate">
          <option value="Name">Name</option>

          <option value=" Model">
            Model
          </option>

          <option value=" Due Date">
            Due Date
          </option>

          <option value="Assignment Group">
            Assignment Group
          </option>
        </select>

        <button className="inactive-button" disabled>
          Apply
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Attendance Overview</h4>
        <p>{`${user.name} attended ${attendedClasses} out of ${totalClasses} classes.`}</p>
        <p>{`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Subject-wise Performance</h4>
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="grade" fill="#8884d8" />
        </BarChart>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Grades Overview</h3>
        <GradesTable gradesData={gradesData} />
      </div>
    </div>
  );
};

export default Grades;
