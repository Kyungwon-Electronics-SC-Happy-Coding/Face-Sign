import LoginCheck from "component/LoginCheck/LoginCheck";
import BaseLayout from "layout/BaseLayout";

const NeedLoginLayout = ({ children, searchState }) => {
  return (
    <LoginCheck>
      <BaseLayout children={children} searchState={searchState} />
    </LoginCheck>
  );
};

export default NeedLoginLayout;
