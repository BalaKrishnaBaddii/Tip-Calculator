export function Tip({ tipValue, setTip, children, bill }) {
  return (
    <div className="box-line">
      <span> {children}</span>
      <select
        value={bill > 0 ? tipValue : 0}
        onClick={(e) => setTip(Number(e.target.value))}
      >
        <option value="0">DisSatisfield (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">it was Good (10%)</option>
        <option value="20">Absoulatly Amazing (20%)</option>
      </select>
    </div>
  );
}
