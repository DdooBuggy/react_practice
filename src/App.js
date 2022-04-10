import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome!</h1>
      <Button text={"Continue"} />
      <span>nice to meet you!</span>
    </div>
  );
}

export default App;
