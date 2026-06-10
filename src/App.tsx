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
      {description} - ${amount}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Diesel - Flying J", amount: 142.5 },
    { id: 2, description: "Coffee - Tim Hortons", amount: 3.25 },
    { id: 3, description: "Truck wash", amount: 28.0 },
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

  function handleAdd() {
    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
    };
    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  }

  function handleSearch() {
    const newTransaction = transactions.filter(
      (t) => t.description == searchText,
    );
    setTransactions(newTransaction);
    setSearchText("");
  }

  return (
    <div>
      <h1>Transactions</h1>
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
      <p>
        <input
          type="text"
          placeholder="searchText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </p>
      <ul>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button onClick={() => handleClearAll()}>Clear All</button>
    </div>
  );
}

export default App;
