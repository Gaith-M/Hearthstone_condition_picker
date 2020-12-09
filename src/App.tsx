import React, { useContext, useState } from "react";
import Form from "./Components/Form/Form";
import { Context } from "./Context/context";
import { chooseCondition } from "./functions/mainFunction";
import "./app.css";

const App: React.FC = () => {
  const context = useContext(Context);
  const [type, setType] = useState<string | null>(null);
  const [condition, setCondition] = useState<string | null>(null);

  // State handlers
  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    value === "" ? setType(null) : setType(value);
  };

  const getRandomCondition = (type: string | null) => {
    let selected = chooseCondition(context, condition, type);
    setCondition(selected);
  };

  return (
    <main>
      <header>
        <h1>Hearthstone Random Conditions</h1>
      </header>
      <div>
        <div>
          <p>
            {condition
              ? condition
              : "Click go to pick a condition randomly. Select a filter to make conditions more specific"}
          </p>
        </div>
        <Form handleChange={handleTypeSelect} />
        <button onClick={() => getRandomCondition(type)}>Go!</button>
      </div>
    </main>
  );
};

export default App;
