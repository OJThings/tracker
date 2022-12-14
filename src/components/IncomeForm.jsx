import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };
  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Name"
          ref={desc}
        />

        <input
          type="number"
          name="price"
          id="price"
          placeholder="price.."
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="date.."
          ref={date}
        />
        <input type="submit" value="ADD Income" />
      </div>
    </form>
  );
}

export default IncomeForm;
