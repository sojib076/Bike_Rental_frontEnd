// src/components/PlusMinusButton.jsx


import PropTypes from 'prop-types';
// If using shadcn/ui, you can import their Button component
// import { Button } from '@shadcn/ui';

const PlusMinusButton = ({
  count ,
  setCount,
  min = 1,
  max = 10,
} :{
    count: number;
    setCount: (count: number) => void;
    min?: number;
    max?: number;
}) => {
  const handleDecrease = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecrease}
        disabled={count <= min}
        className={`w-10 h-10 flex items-center justify-center text-xl font-bold rounded-md 
          ${count <= min ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button
        onClick={handleIncrease}
        disabled={count >= max}
        className={`w-10 h-10 flex items-center justify-center text-xl font-bold rounded-md 
          ${count >= max ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

PlusMinusButton.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default PlusMinusButton;
