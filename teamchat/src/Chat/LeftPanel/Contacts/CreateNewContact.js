import profilePictures from "../../../profilePicture";

let idCounter = 0;

export const createNewContact = (originalContactsList, setOriginalContactsList, setContactList, q) => {
  const newFriend = {
    id: idCounter++,
    name: q,
    image: profilePictures[Math.floor(Math.random() * profilePictures.length)],
    massage: "",
    time: "",
  };
  setOriginalContactsList([...originalContactsList, newFriend]);
  setContactList([...originalContactsList, newFriend]);
};
