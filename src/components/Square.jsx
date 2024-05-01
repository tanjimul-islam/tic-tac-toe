const Square = ({ value, onSquareClick }) => {
  const handleClick = () => {};

  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
};
export default Square;
