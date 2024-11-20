import { useState } from 'react';

const BookLending: React.FC = () => {
  // State for lending data
  const [lendingData, setLendingData] = useState<
    { bookTitle: string; borrower: string; lendDate: string }[]
  >([]);

  // State for returning data
  const [returningData, setReturningData] = useState<
    { bookTitle: string; borrower: string; returnDate: string }[]
  >([]);

  // Handler to lend a book
  const handleLending = () => {
    const newLending = {
      bookTitle: 'React Handbook',
      borrower: 'John Doe',
      lendDate: new Date().toLocaleDateString(),
    };
    setLendingData((prevData) => [...prevData, newLending]);
  };

  // Handler to return a book
  const handleReturning = () => {
    const newReturning = {
      bookTitle: 'React Handbook',
      borrower: 'John Doe',
      returnDate: new Date().toLocaleDateString(),
    };
    setReturningData((prevData) => [...prevData, newReturning]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <h1 className="text-4xl font-bold text-center mb-8">Book Lending and Returning</h1>

        {/* Buttons to perform actions */}
        <div className="text-center space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            onClick={handleLending}
          >
            Lend a Book
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
            onClick={handleReturning}
          >
            Return a Book
          </button>
        </div>

        {/* Lending Records */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Lending Records</h2>
          {lendingData.length > 0 ? (
            <ul className="space-y-4">
              {lendingData.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <strong>{item.bookTitle}</strong> was lent to <em>{item.borrower}</em> on{' '}
                  <span className="text-blue-600">{item.lendDate}</span>.
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No books have been lent yet.</p>
          )}
        </section>

        {/* Returning Records */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Returning Records</h2>
          {returningData.length > 0 ? (
            <ul className="space-y-4">
              {returningData.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <strong>{item.bookTitle}</strong> was returned by <em>{item.borrower}</em> on{' '}
                  <span className="text-green-600">{item.returnDate}</span>.
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No books have been returned yet.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default BookLending;
