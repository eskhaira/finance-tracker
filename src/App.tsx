const transactions = [
  { id: 1, description: "Diesel - Flying J", amount: 142.5 },
  { id: 2, description: "Coffee - Tim Hortons", amount: 3.25 },
  { id: 3, description: "Truck wash", amount: 28.0 },
];

type TransactionProps = {
  description: string;
  amount: number;
};

function Transaction({ description, amount }: TransactionProps) {
  return (
    <li>
      {description} - ${amount}
    </li>
  );
}

function App() {
  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <Transaction
            description={transaction.description}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
