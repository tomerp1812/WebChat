import profilePictures from "../../profilePicture";

//counter for contacts
let contactCounter = 0;

//when a new contacts is created we set both of the lists of contacts
export const createNewContact = (originalContactsList, setOriginalContactsList, setContactList, q) => {
  const newFriend = {
    id: contactCounter++,
    name: q,
    image: profilePictures[Math.floor(Math.random() * profilePictures.length)],
    massage: "",
    time: "",
  };
  //setters of the lists
  setOriginalContactsList([...originalContactsList, newFriend]);
  setContactList([...originalContactsList, newFriend]);
};
