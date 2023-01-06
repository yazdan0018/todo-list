import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

  const getLocalStorageValue = () => {
    try {
      const init = localStorage.getItem(key);
      return init ? JSON.parse(init) : initialValue;
    } catch (e) {
      console.log(e, 'this is localstorage error');
      return initialValue;
    }
  };

  const [value, setValue] = useState(getLocalStorageValue());

  const updateLocalStorage = (key, newValues) => {
    try {
      setValue(newValues);
      localStorage.setItem(key, JSON.stringify(newValues));
    } catch (e) {
      console.log(e, 'this is error when updating localStorage');
    }
  };

  return {value, updateLocalStorage};
};

export default useLocalStorage;