function App() {
  const hobbies = ["Coding", "Reading", "Music"];

  return (
    <div>
      <h1>Prerana</h1>
      <h1>hello world</h1>

      <h3>
        Today's Date: {new Date().toLocaleDateString()}
      </h3>

      <h2>Hobbies</h2>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;