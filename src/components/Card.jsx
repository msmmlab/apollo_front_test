import React from "react";
import "./Card.css";

const Card = ({ user }) => {
    return <div className="card-container">{user.username}</div>;
};

export default Card;
