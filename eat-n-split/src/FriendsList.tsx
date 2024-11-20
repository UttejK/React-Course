import Friend from "./Friend";
import { TFriend } from "./types";

function FriendsList({
  friends,
  selectedFriend,
  onFriendSelect,
}: {
  friends: TFriend[];
  selectedFriend: TFriend | null;
  onFriendSelect: (friend: TFriend) => void;
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          selectedFriend={selectedFriend}
          friend={friend}
          onFriendSelect={onFriendSelect}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
