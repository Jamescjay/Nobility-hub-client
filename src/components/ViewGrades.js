import styles from "./Grades.css";
import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";


const GradesTable = ({ gradesData }) => {
  return (
    <div className="grades-overview">
      <h3 className="section-heading">Grades Overview</h3>
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
    </div>
  );
};

const Grades = () => {
  const user = {
    name: "Admin",
  };

  const [searchInput, setSearchInput] = useState("");
  const [filteredStudent, setFilteredStudent] = useState(null);

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
    { date: "2024-01-01", attended: true },
    { date: "2024-01-05", attended: false },
    { date: "2024-02-01", attended: true },
    { date: "2024-02-05", attended: false },
    { date: "2024-03-01", attended: true },
    { date: "2024-03-05", attended: false },
  ];

  const totalClasses = attendanceData.length;
  const attendedClasses = attendanceData.filter(
    (entry) => entry.attended
  ).length;
  const attendancePercentage = (attendedClasses / totalClasses) * 100;

  const handleSearch = () => {
    const foundStudent = simulateStudentSearch(searchInput);

    // Check if a student is found
    if (foundStudent) {
      setFilteredStudent(foundStudent);
    } else {
      // Handle case when no student is found
      setFilteredStudent(null);
      // You can optionally show a message or perform other actions
      console.log("Student not found");
    }
  };

  const simulateStudentSearch = (name) => {
    const studentsDatabase = [
      { id: 1, name: "John Doe", age: 20, grade: "A" },
      { id: 2, name: "Jane Smith", age: 21, grade: "B" },
      { id: 3, name: "Bob Johnson", age: 22, grade: "C" },
    ];

    return studentsDatabase.find(
      (student) => student.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Admin Dashboard</h2>
      <hr className={styles.sectionDivider} />

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter student name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredStudent ? (
        <div style={{ marginBottom: "20px" }}>
          <h3>Student Details</h3>
          <p>ID: {filteredStudent.id}</p>
          <p>Name: {filteredStudent.name}</p>
          <p>Age: {filteredStudent.age}</p>
          <p>Grade: {filteredStudent.grade}</p>
        </div>
      ) : null}

      <hr className={styles.sectionDivider} />

      <div>
        <h4 className={styles.sectionHeading}>
          Attendance Overview{" "}
          {attendancePercentage >= 75 ? (
            <FontAwesomeIcon icon={faTrophy} color="#FFD700" />
          ) : null}
        </h4>
        <p>
          {`${user.name} ${
            attendancePercentage >= 75
              ? "has excellent attendance!"
              : "attended classes regularly."
          }`}
        </p>
        <p>
          {attendanceData.map((entry, index) => (
            <span key={index} className={styles.attendanceIcon}>
              {entry.attended ? (
                <FontAwesomeIcon icon={faCheckCircle} color="#4CAF50" />
              ) : (
                <FontAwesomeIcon icon={faTimesCircle} color="#f44336" />
              )}
              {` ${entry.date}`}
            </span>
          ))}
        </p>
      </div>

      <div className={styles.chartContainer}>
        <h4>Course-wise Performance</h4>
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="grade" fill="#8884d8" />
        </BarChart>
      </div>

      <hr className={styles.sectionDivider} />

      <div className={styles.gradesTableContainer}>
        <GradesTable gradesData={gradesData} />
      </div>
    </div>
  );
};

export default Grades;
