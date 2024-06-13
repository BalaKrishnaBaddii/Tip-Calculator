export function Tip({ tipValue, setTip, children, onMytip }) {
  return (
    <div className="box-line">
      <span> {children}</span>
      <select
        value={tipValue}
        onChange={(e) => onMytip(Number(e.target.value), setTip)}
      >
        <option value="0">DisSatisfield (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">it was Good (10%)</option>
        <option value="20">Absoulatly Amazing (20%)</option>
      </select>
    </div>
  );
}
