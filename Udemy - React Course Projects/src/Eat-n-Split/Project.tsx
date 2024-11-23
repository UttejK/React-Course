import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";
import { TFriend } from "./types";
import { initialFriends } from "./utils";

import "./Eat_n_Split.css";

function Project() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState<TFriend[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<TFriend | null>(null);

  function toggleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend: TFriend) {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }
  function handleSelectFriend(friend: TFriend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }
  function handleSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    // APP
    <div className="app">
      {/* SIDEBAR */}
      <div className="sidebar">
        {/* FRIENDS LIST */}
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onFriendSelect={handleSelectFriend}
        />
        {/* FORM TO ADD FRIEND */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {/* BUTTON THAT TOGGLES THE FORM TO ADD NEW FRIENDS */}
        <Button onClick={toggleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {/* FORM TO SPLIT BILL */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onBillSplit={handleSplitBill}
        />
      )}
    </div>
  );
}

export default Project;
