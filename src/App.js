import './App.css';
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
     <div className='container'>
      <Dictionary />
      <footer>
          This project was coded by Eliana Figueroa,
          and is{" "}
          <a className='footer'
            href="https://github.com/EliFig/dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a className='footer'
            href="https://stupendous-arithmetic-48a25f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
     </div>
    </div>
  );
}

export default App;
