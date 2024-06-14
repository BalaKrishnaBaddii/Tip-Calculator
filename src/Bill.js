export function Bill({ bill, setBill, reset }) {
  return (
    <div className="box-line">
      <span>How much was the Bill? </span>
      <input
        type="text"
        value={bill}
        placeholder="Bill Value"
        onChange={(e) =>
          e.target.value > 0 ? setBill(Number(e.target.value)) : reset()
        }
      />
    </div>
  );
}
