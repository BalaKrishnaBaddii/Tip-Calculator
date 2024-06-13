import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  return (
    <div>
      <Bill bill={bill} setBill={setBill}></Bill>
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the Bill? </span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
