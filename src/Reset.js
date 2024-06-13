export function Reset({ onBill, onmyFriendtip, onMytip }) {
  function handleReset() {
    onBill(0);
    onmyFriendtip(0);
    onMytip(0);
  }
  return <button onClick={handleReset}>Rest</button>;
}
