import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const Learners = () => {
  const [learners, setLearners] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchLearners = async () => {
      try {
        const response = await axios.get(
          "https://nobility-hub-backend.onrender.com/register"
        );
        setLearners(response.data);
      } catch (error) {
        console.error("Error fetching learners:", error);
      }
    };

    fetchLearners();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>View all Learners</button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Learners Modal"
        style={{
          content: {
            width: "600px",
            height: "500px",
            margin: "auto",
            backgroundColor: "#c3c3c3",
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
        }}
      >
        <h2>Available Learners</h2>
        <div>
          <ol>
            {learners.map((learner) => (
              <li key={learner.id}>
                {learner.first_name} {learner.last_name}
              </li>
            ))}
          </ol>
        </div>
        <button onClick={handleCloseModal} style={{ backgroundColor: "red" }}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Learners;
