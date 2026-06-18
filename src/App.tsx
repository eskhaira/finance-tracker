import { useState } from "react";

type TransactionProps = {
  id: number;
  description: string;
  amount: number;
  onDelete: (id: number) => void;
};

function Transaction({ id, description, amount, onDelete }: TransactionProps) {
  return (
    <li>
      {description} - ${(amount / 100).toFixed(2)}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Diesel - Flying J", amount: 14250 },
    { id: 2, description: "Coffee - Tim Hortons", amount: 325 },
    { id: 3, description: "Truck wash", amount: 2800 },
  ]);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [searchText, setSearchText] = useState("");

  function handleDelete(idToRemove: number) {
    const newTransactions = transactions.filter((t) => t.id !== idToRemove);
    setTransactions(newTransactions);
  }

  function handleClearAll() {
    setTransactions([]);
  }

  function handleAdd(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Number.isNaN(Number(amount))) {
      return;
    }

    if (amount.trim() === "") {
      return;
    }

    if (description.trim() === "") {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: Math.round(Number(amount) * 100),
    };

    // console.log(newTransaction.amount); // I just needed to test if amount is being stored as integer cents

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  }
  const filteredTransactions = transactions.filter((t) =>
    t.description.includes(searchText),
  );

  const visibleCount = filteredTransactions.length;
  const totalCount = transactions.length;

  return (
    <div>
      <h1>Transactions</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>
        <input
          type="text"
          placeholder="Search Transactions"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </p>
      <ul>
        {filteredTransactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <p>
        Showing {visibleCount} of {totalCount}
      </p>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default App;
