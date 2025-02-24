import React from "react";

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      <img src={book.image} alt={book.name} style={styles.image} />
      <h3>{book.name}</h3>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

// Inline styles for simple design
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
};

export default BookCard;
