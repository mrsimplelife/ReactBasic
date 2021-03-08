import { Button } from "antd";
import "App.css";

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={() => console.log("hi")}>
        button
      </Button>
    </div>
  );
}

export default App;
