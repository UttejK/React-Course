import { useState } from "react";
import Button from "./Button";
import { TFriend } from "./types";

function FormSplitBill({
  selectedFriend,
  onBillSplit,
}: {
  selectedFriend: TFriend;
  onBillSplit: (value: number) => void;
}) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : 0;

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitBillSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !paidByUser) {
      alert("Either Bill or Expense is missing");
      return;
    }

    onBillSplit(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="img">💵 Bill Amount</label>
      <input
        type="number"
        name="img"
        id="img"
        value={bill}
        onChange={(e) => setBill(parseFloat(e.target.value))}
      />
      <label htmlFor="img">💵 Your Expense</label>
      <input
        type="number"
        name="img"
        id="img"
        value={paidByUser}
        onChange={(e) => {
          const value = parseFloat(e.target.value);
          if (value > bill) {
            return;
          }
          setPaidByUser(parseFloat(e.target.value));
        }}
      />
      <label htmlFor="img">💵 {selectedFriend.name}'s Expense</label>
      <input
        type="number"
        name="img"
        id="img"
        disabled
        readOnly
        value={paidByFriend}
      />

      <label htmlFor="whoispaying">💵 Who is paying the bill?</label>
      <select
        name="whoispaying"
        id="whoispaying"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="friend">{selectedFriend.name}</option>
        <option value="user">You</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
