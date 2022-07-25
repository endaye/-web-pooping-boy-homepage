import "./App.css";

function App() {
  return (
    <div className='App'>
      <img className='app-img-bg' src={process.env.PUBLIC_URL + "/img/bg.png"} alt='Background' />
      <img className='app-img-logo' src={process.env.PUBLIC_URL + "/img/logo.svg"} alt='Poopboi Logo' />
    </div>
  );
}

export default App;
