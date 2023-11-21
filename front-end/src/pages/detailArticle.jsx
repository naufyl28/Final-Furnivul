import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function DetailArticle() {
  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Articles</Breadcrumb.Item>
        <Breadcrumb.Item>Detail</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <h1>DetailArticle</h1>
      </div>
    </>
  );
}

export default DetailArticle;
