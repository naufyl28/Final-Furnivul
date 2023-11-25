import { Breadcrumb, Card } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailArticle() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6b7134c9f303460892979d4632931405"
    ).then((result) => {
      setData(result.data.articles);
    });
  }, []);

  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item href="/article">Articles</Breadcrumb.Item>
        <Breadcrumb.Item>Detail</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        {datas.map((datas, index) => {
          if (index >= 11) {
            return;
          }
          return (
            <>
              <Card key={index} className="text-3xl font-semibold mt-4 mx-5">
                <p>{datas.title}</p>

                <div className=" rounded-md mt-4 mb-2">
                  <img
                    className="rounded-md"
                    width={450}
                    height={350}
                    src={datas.urlToImage}
                    alt="image 1"
                  />
                </div>
                <div className="text-sm font-semibold mt-4 ">
                  <p>{datas.description}</p>
                </div>
                <div className="text-sm font-semibold mt-4 ">
                  <p>{datas.content}</p>
                </div>
                <div className="text-sm font-semibold mt-4 ">
                  <p>{datas.publishedAt}</p>
                </div>

                <div className="text-sm font-semibold mt-4 ">
                  <p>{datas.url}</p>
                </div>
                <div className="text-sm font-semibold mt-4 ">
                  <p>{datas.author}</p>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DetailArticle;
