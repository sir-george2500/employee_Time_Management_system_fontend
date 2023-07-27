import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
      <button onClick={onClose} style={{ float: "right", backgroundColor: "black", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
        Close
      </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;