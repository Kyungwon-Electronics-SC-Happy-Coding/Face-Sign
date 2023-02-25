import BaseLayout from "layout/BaseLayout";
import { useState } from "react";

const UserList = () => {
  const searchNameState = useState("");
  const [searchName, setSearchName] = searchNameState;

  return (
    <BaseLayout searchState={searchNameState}>
      <div>User List</div>
    </BaseLayout>
  );
};

export default UserList;
