import { useState } from "react";
import { Bill } from "./Bill";
import { Tip } from "./Tip";
import { Checkout } from "./Checkout";
import { Reset } from "./Reset";

export function Container() {
  const [bill, setBill] = useState(0);
  const [mytip, setMytip] = useState(0);
  const [friendTip, setMyFriendTip] = useState(0);
  const averageTipPercentage = (mytip + friendTip) / 2;
  const tip = (bill * averageTipPercentage) / 100;

  function handlemyTip(value, setTip) {
    bill ? setTip(value) : setTip(0);
  }
  function handleBill(value) {
    setBill(isNaN(value) ? 0 : value);
    if (value === 0) {
      setMyFriendTip(0);
      setMytip(0);
    }
  }
  return (
    <div className="container">
      <Bill
        bill={bill}
        setBill={setBill}
        onBill={handleBill}
        setMytip={setMytip}
        setMyFriendTip={setMyFriendTip}
      />
      <Tip tipValue={mytip} setTip={setMytip} onMytip={handlemyTip}>
        How would you like the Service?
      </Tip>
      <Tip tipValue={friendTip} setTip={setMyFriendTip} onMytip={handlemyTip}>
        How did your friend like the Service?
      </Tip>
      <Checkout>
        {bill === 0 ? null : tip === 0 ? (
          <h3>You Pay ${bill}</h3>
        ) : (
          <h3>
            You Pay ${Math.round(bill + tip)} (${bill} + ${Math.round(tip)} Tip)
          </h3>
        )}
      </Checkout>
      <Reset
        onBill={setBill}
        onMytip={setMytip}
        onmyFriendtip={setMyFriendTip}
      />
    </div>
  );
}
