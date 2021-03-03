import { v4 as UUID } from 'uuid';

export const loadSessionId = async (itemName) => {
  let savedCartId = localStorage.getItem(itemName);

  if (savedCartId === null) {
    const myNewId = UUID();
    await localStorage.setItem(itemName, myNewId);
    savedCartId = await localStorage.getItem(itemName);
  }
  return savedCartId;
};
