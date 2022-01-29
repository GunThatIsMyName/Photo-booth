import React, { useEffect, useState } from "react";
import { API_ENDPOINT, API_ENDPOINT2, API_KEY, CLIENT_ID } from "../utils/Api";
// import { dataList } from "../utils/helps";

function Gifs() {
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(0);
  const getGifty = async () => {
    const response = await fetch(
      `${API_ENDPOINT}/trending?api_key=${API_KEY}&limit=20&offset=${limit}`
    );
    const { data } = await response.json();
    console.log(data);

    const getData = data.map((item) => {
      const { id, title, images } = item;
      const {
        original: { url: image },
      } = images;
      return { id, title, image };
    });
    setList((prev) => [...prev, ...getData]);
  };

  useEffect(() => {
    getGifty();
    // eslint-disable-next-line
  }, [limit]);

  return (
    <>
      {list.map((item) => {
        const { id, image, title } = item;
        return (
          <div key={id}>
            <img className="photo__image" src={image} alt={title} />
          </div>
        );
      })}
      <button onClick={() => setLimit((prev) => prev + 20)}>More Gifs</button>
    </>
  );
}

export default Gifs;
