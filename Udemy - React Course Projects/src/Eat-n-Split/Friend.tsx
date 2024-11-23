import Button from "./Button";
import { TFriend } from "./types";

function Friend({
  friend,
  selectedFriend,
  onFriendSelect,
}: {
  friend: TFriend;
  selectedFriend: TFriend | null;
  onFriendSelect: (friend: TFriend) => void;
}) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={`${friend.name}'s image`} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} and you are even</p>}

      <Button onClick={() => onFriendSelect(friend)}>
        {isSelected ? "Deselect" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
