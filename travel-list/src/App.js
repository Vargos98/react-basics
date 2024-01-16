export default function App(){
  return(
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );

}

function Logo(){
  return(
    <h1>👜✈ Let's Go! ✈🌴</h1>
  );
}

function Form(){
  return(
    <div className="add-form">
      <h3>What do you need to pack for your travel? 🤔</h3>
    </div>
  );
}

function PackingList(){
  return(
    <div className="list">
      LIST
    </div>
  )

}
function Stats(){
  return(
    <footer className="stats">
    <em> 👜 You have X items on your list, and you already packed X (X%) in total. </em>
    </footer>
  );

}