import Search from "./Components/Search";
import { useEffect, useState } from "react";
import Table from "./Components/Table";
import axios from "axios";

const url = "https://dummyjson.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  // api calling
  const makerequet = async (url) => {
    const response = await axios.get(url);
    return response.data.users;
  };

  const fetchData = () => {
    setIsloading(true);
    setError(null);

    makerequet(url)
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message));

    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // deleting row
  const handleId = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  // search item
  const keys = ["firstName", "lastName", "email"];
  // console.log(users[0]["firstName"]);
  const handleSearchItem = (searchItem) => {
    const searchValue = searchItem.toLowerCase();

    const filteredItem = users.filter((item) =>
      // item.firstName.toLowerCase().includes(searchValue)
      keys.some((key) => item[key].toLowerCase().includes(searchValue))
    );

    setUsers(filteredItem);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "gray", fontStyle: "italic" }}>
        Table Component
      </h1>
      <hr />

      <Search searchItem={handleSearchItem} />
      {isloading && <h2>Loading ...</h2>}
      {error && <h2>{error}</h2>}
      {users && <Table users={users} id={handleId} />}
    </>
  );
};

export default App;
