import React, { useEffect, useState } from "react";
import axios from "axios";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/recommendations",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations", error);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div className="recommendations-container">
      <h2>Recommended Properties</h2>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>
            <h3>{rec.name}</h3>
            <p>{rec.description}</p>
            <p>Price: {rec.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
