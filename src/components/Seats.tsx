import { useState } from "react";
import shuffleArray from "../utils/shuffle-array";

interface Props {
  peopleNumber: number;
}

const Seats: React.FC<Props> = ({ peopleNumber }) => {
  const [peopleArray, _] = useState<number[]>(() =>
    shuffleArray(new Array(peopleNumber).fill(0).map((_, index) => index + 1))
  );

  let seatIndex = 0;

  return (
    <div className="text-6xl w-full h-full flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-pink-100 flex flex-wrap">
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="1"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="2"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="3"
        >
          {(peopleNumber === 6 || peopleNumber === 8) && <span>{peopleArray[seatIndex++]}</span>}
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="4"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="5"
        ></div>
        {/*  */}
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="6"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="7"
        >
          <span>{peopleArray[seatIndex++]}</span>
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4 border-black"
          id="8"
        >
          테
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="9"
        >
          <span>{peopleArray[seatIndex++]}</span>
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="10"
        ></div>
        {/*  */}
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="11"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="12"
        >
          {(peopleNumber === 7 || peopleNumber === 8) && <span>{peopleArray[seatIndex++]}</span>}
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4 border-black"
          id="13"
        >
          이
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="14"
        >
          {(peopleNumber === 7 || peopleNumber === 8) && <span>{peopleArray[seatIndex++]}</span>}
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="15"
        ></div>
        {/*  */}
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="16"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="17"
        >
          <span>{peopleArray[seatIndex++]}</span>
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4 border-black"
          id="18"
        >
          블
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="19"
        >
          <span>{peopleArray[seatIndex++]}</span>
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="20"
        ></div>
        {/*  */}
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="21"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="22"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="23"
        >
          <span>{peopleArray[seatIndex++]}</span>
        </div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="24"
        ></div>
        <div
          className="flex justify-center items-center w-[100px] h-[100px] bg-slate-400 border-4"
          id="25"
        ></div>
      </div>
    </div>
  );
};

export default Seats;
