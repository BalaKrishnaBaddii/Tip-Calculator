export function Bill({ bill, setBill, onBill, setMyFriendTip, setMytip }) {
  return (
    <div className="box-line">
      <span>How much was the Bill? </span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}
