import React, { useEffect, useState } from "react";
import style from "./search.module.css";
const Search = (props) => {
  const [changeValue, setChangeValue] = useState("");
  const handleOnchange = (event) => {
    const value = event.target.value;
    setChangeValue(value);
  };

  useEffect(() => {
    props.searchItem(changeValue);
  }, [changeValue]);

  return (
    <form className={style.form}>
      <input
        type="text"
        placeholder="Search ..."
        onChange={handleOnchange}
        value={changeValue}
      />
    </form>
  );
};

export default Search;
