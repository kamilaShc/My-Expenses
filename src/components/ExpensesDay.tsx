interface Props {
  subject: string;
  sum: number;
}

function ExpensesDay({ subject, sum }: Props) {
  return (
    <div className="row">
      <div className="col">
        <p>{subject}</p>
      </div>
      <div className="col">
        <p>{sum} Eur</p>
      </div>
    </div>
  );
}

export default ExpensesDay;
