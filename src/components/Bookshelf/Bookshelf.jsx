import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setBooks([...books, newBook]);

    setNewBook({
      title: "",
      author: "",
    });
  };
  return (
    <>
      <h1>My Bookshelf</h1>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />

            <label>Author:</label>
            <input
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />

            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div key={index} className="bookCard">
              <p>
                <strong>{book.title}</strong>
              </p>
              <p>by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
