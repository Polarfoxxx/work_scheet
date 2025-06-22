import React from "react";

function Main(): React.JSX.Element {
const [returnedSpeed, setreturnedSpeed] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const diametro = formData.get("inputField");
    const cutSpeed = formData.get("inputFieldSecond");

    if (diametro && cutSpeed) {
      const speed = calculateSpeed(+diametro, +cutSpeed);
      setreturnedSpeed(speed);
    }
  }

  const calculateSpeed = (diametro: number, cutSpeed: number): number => {
    const calculateOne = cutSpeed * 60;
    const calculateTwo = (diametro / 1000) * 3.14;
    const calculateSpeed = calculateOne / calculateTwo;
    return calculateSpeed;
  }


  return (
    <div className="main">
      <h1>Welcome to the Main Module</h1>
      <div>
        <form action="#" onSubmit={e => handleSubmit(e)}>
          <label htmlFor="inputField">Input Field:</label>
          <input type="number" id="inputField" name="inputField" />
          <label htmlFor="inputFieldSecond">Input inputFieldSecond:</label>
          <input type="number" id="inputFieldSecond" name="inputFieldSecond" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
{returnedSpeed}
      </div>
      <p>This is the main content area.</p>
    </div>
  );
}

export default Main;