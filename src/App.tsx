import { useState } from "react";
import Seats from "./components/Seats";

function App() {
  const [peopleNumber, setPeopleNumber] = useState(0);

  return peopleNumber === 0 ? (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-7xl mb-12">인원수를 선택하세요</h1>
      <div>
        <button className="w-48 h-24 text-4xl bg-sky-300 mx-2" onClick={() => setPeopleNumber(5)}>
          5
        </button>
        <button className="w-48 h-24 text-4xl bg-sky-300 mx-2" onClick={() => setPeopleNumber(6)}>
          6
        </button>
        <button className="w-48 h-24 text-4xl bg-sky-300 mx-2" onClick={() => setPeopleNumber(7)}>
          7
        </button>
        <button className="w-48 h-24 text-4xl bg-sky-300 mx-2" onClick={() => setPeopleNumber(8)}>
          8
        </button>
      </div>
    </div>
  ) : (
    <Seats peopleNumber={peopleNumber} />
  );
}

export default App;
