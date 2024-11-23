import { useState } from "react";
import Button from "./Button";
import { TFriend } from "./types";

function FormAddFriend({
  onAddFriend,
}: {
  onAddFriend: (friend: TFriend) => void;
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  return (
    <form
      className="form-add-friend"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name || !image) {
          return;
        }

        const id = crypto.randomUUID();

        const newFriend: TFriend = {
          id,
          name,
          image: `${image}?u=${id}`,
          balance: 0,
        };

        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
      }}
    >
      <label htmlFor="name">👤 Friend Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label htmlFor="img">📷 Image Url</label>
      <input
        type="text"
        name="img"
        id="img"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
