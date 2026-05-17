import "./App.css";

function Greeting({ name, role }: { name: string; role: string }) {
  return (
    <p>
      Hello, {name}! Role: {role}
    </p>
  );
}

function App() {
  return (
    <>
      <h1> Welcome to my finance tracker. </h1>
      <Greeting name="Ekam" role="owner" />
      <Greeting name="Friend" role="viewer" />
      <Greeting name="World" role="guest" />
    </>
  );
}

export default App;
