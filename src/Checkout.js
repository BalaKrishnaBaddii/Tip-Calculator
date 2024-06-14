export function Checkout({ bill, tip }) {
  return (
    <div className="box-line">
      {bill === 0 ? null : tip === 0 ? (
        <h3>You Pay ${bill}</h3>
      ) : (
        <h3>
          You Pay ${Math.round(bill + tip)} (${bill} + ${Math.round(tip)} Tip)
        </h3>
      )}
    </div>
  );
}
