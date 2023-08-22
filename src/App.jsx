import { useState } from "react";
import shoes from "./assets/images/index";
import { bigShoe1 } from "./assets/images/index";
import ShoeCard from "./ShoeCard";
function App() {
  const [BigShoeImgState, setBigShoeImgState] = useState(bigShoe1);
  return (
    <main
      className=" container mx-auto mt-10 flex w-2/4 flex-col items-center   justify-center gap-y-10 rounded-xl
     border border-coral-red pb-6 text-center shadow-3xl"
    >
      <div className="flex w-full items-center justify-center rounded-xl bg-white p-4">
        <img src={BigShoeImgState} className="max-w-sm object-contain" />
      </div>
      <div className="flex justify-center gap-5">
        {shoes.map((obj) => (
          <ShoeCard
            key={crypto.randomUUID()}
            imgUrl={obj}
            BigShoeImgState={BigShoeImgState}
            setCurrentImg={function (shoe) {
              setBigShoeImgState(shoe);
            }}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
