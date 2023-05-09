import profilePictures from "../../profilePicture";

export const createNewContact = (originalContactsList, setOriginalContactsList, setContactList, q) => {
  const newFriend = {
    name: q,
    image: profilePictures[Math.floor(Math.random() * profilePictures.length)],
    massage: "",
    time: "",
  };
  setOriginalContactsList([...originalContactsList, newFriend]);
  setContactList([...originalContactsList, newFriend]);
};
