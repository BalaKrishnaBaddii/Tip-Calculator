import { useState } from "react";
import { Bill } from "./Bill";
import { Tip } from "./Tip";
import { Checkout } from "./Checkout";
import { Reset } from "./Reset";

export function TipCalcultor() {
  const [bill, setBill] = useState("");
  const [mytip, setMytip] = useState(0);
  const [friendTip, setMyFriendTip] = useState(0);
  const averageTipPercentage = (mytip + friendTip) / 2;
  const tip = (bill * averageTipPercentage) / 100;

  function handleReset() {
    setBill("");
    setMytip(0);
    setMyFriendTip(0);
  }
  return (
    <div className="container">
      <Bill bill={bill} setBill={setBill} reset={handleReset} />
      <Tip setTip={setMytip} bill={bill}>
        How would you like the Service?
      </Tip>
      <Tip setTip={setMyFriendTip} bill={bill}>
        How did your friend like the Service?
      </Tip>
      {bill > 0 && (
        <>
          <Checkout bill={bill} tip={tip}></Checkout>
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
