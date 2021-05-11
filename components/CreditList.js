import CreditItem from "./CreditItem";

const CreditList = ({ credits }) => {
  return (
    <div>
      {credits.map((credit) => (
        <CreditItem credit={credit} />
      ))}
    </div>
  );
};

export default CreditList;
