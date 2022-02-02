import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGifs } from "../redux/actions/Actions";
import { API_ENDPOINT, API_ENDPOINT2, API_KEY, CLIENT_ID } from "../utils/Api";
// import { dataList } from "../utils/helps";

function Gifs() {
  const [limit, setLimit] = useState(0);

  const dispatch = useDispatch();
  const {products} = useSelector(state=>state.gifs);
  console.log(products,"hello")

  const getGifty = async () => {
    const response = await fetch(
      `${API_ENDPOINT}/trending?api_key=${API_KEY}&limit=20&offset=${limit}`
    );
    const { data } = await response.json();

    const getData = data.map((item) => {
      const { id, title, images } = item;
      const {
        original: { url: image },
      } = images;
      return { id, title, image };
    });
    dispatch(setGifs(getData));
  };

  useEffect(() => {
    getGifty();
    // eslint-disable-next-line
  }, [limit]);

  return (
    <>
      {products.map((item) => {
        const { id, image, title } = item;
        return (
          <div key={id}>
            <img className="photo__image" src={image} alt={title} />
          </div>
        );
      })}
    </>
  );
}

export default Gifs;
