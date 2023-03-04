const { default: BaseLayout } = require("layout/BaseLayout");

const PageNotFound = () => {
  return (
    <BaseLayout>
      <div className="w-full h-full flex">
        <p className="text-textRed text-3xl m-auto">Page Not Found</p>
      </div>
    </BaseLayout>
  );
};

export default PageNotFound;
