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

const Grades = () => {

  const user = {
    name: "Yussuf Safia",
  };

  const gradesData = [
    { type: "Challenge", count: 3, grades: [90, 85, 95] },
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
      <h2>{`Grades and Attendance for ${user.name} in Phase 3`}</h2>

      {gradesData.map((gradeType) => (
        <div key={gradeType.type}>
          <h3>{`${gradeType.type}s (${gradeType.count})`}</h3>
          <ul>
            {gradeType.grades.map((grade, index) => (
              <li key={index}>{`${gradeType.type} ${index + 1}: ${grade}`}</li>
            ))}
          </ul>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <h3>Subject-wise Performance</h3>
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
        <h3>Attendance Overview</h3>
        <p>{`${user.name} attended ${attendedClasses} out of ${totalClasses} classes.`}</p>
        <p>{`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`}</p>
      </div>
    </div>
  );
};

export default Grades;
