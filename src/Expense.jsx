const Expense = ({ title, amount, date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="pet">
      <h1> {title} </h1>
      <h2> {amount} </h2>
      <h2>
        {day}-{month}-{year}
      </h2>
    </div>
  );
};

export default Expense;
