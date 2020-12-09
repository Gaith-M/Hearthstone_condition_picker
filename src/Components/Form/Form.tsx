import React from "react";

interface FormPropsInterface {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Form = ({ handleChange }: FormPropsInterface) => {
  return (
    <form>
      <label htmlFor="type_select">Filter</label>
      <select id="type_select" name="type" onChange={handleChange}>
        <option value="">--no Filter--</option>
        <option value="cost">Cost</option>
        <option value="type">Type</option>
        <option value="deck">Deck</option>
        <option value="effect">Effect</option>
        <option value="crazy">Crazy</option>
      </select>
    </form>
  );
};

export default Form;
