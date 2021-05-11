const CreditItem = ({ credit }) => {
  return (
    <div>
      <div>{credit.title}</div>
      <div>{credit.artist}</div>
      <img src={credit.img} alt={credit.title} />
    </div>
  );
};

export default CreditItem;
