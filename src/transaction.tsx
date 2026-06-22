import formatCents from "./formatCents";

type TransactionProps = {
  id: number;
  description: string;
  amount: number;
  onDelete: (id: number) => void;
  category: string;
};

function Transaction({ id, description, amount, onDelete }: TransactionProps) {
  return (
    <li>
      {description} - {formatCents(amount)}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default Transaction;
