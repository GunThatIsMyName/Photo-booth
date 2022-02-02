import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGifs, setGifs } from "../redux/actions/GifsActions";
import { API_ENDPOINT, API_KEY } from "../utils/Api";
// import { dataList } from "../utils/helps";

const Gifs = () => {
  const dispatch = useDispatch();
  const {
    gifs: { products, limit },
    main: { search },
  } = useSelector((state) => state);

  const getGifty = async () => {
    let newData;
    if (search) {
      console.log(search, "search 여기요");
      console.log(limit, "limit");
      const response = await fetch(
        `${API_ENDPOINT}/search?api_key=${API_KEY}&limit=12&offset=${limit}&q=${search}`
      );
      const {data} = await response.json();

      newData = data.map((item) => {
        const { id, title, images } = item;
        const {
          original: { url: image },
        } = images;
        return { id, title, image };
      });
    } else {
      const response = await fetch(
        `${API_ENDPOINT}/trending?api_key=${API_KEY}&limit=12&offset=${limit}`
      );
      const { data } = await response.json();

      newData = data.map((item) => {
        const { id, title, images } = item;
        const {
          original: { url: image },
        } = images;
        return { id, title, image };
      });
    }

    // dispatch  init GIFs Data.
    dispatch(setGifs(newData));
  };

  useEffect(() => {
    getGifty();
    // eslint-disable-next-line
  }, [limit, search]);

  // cleaning Products List
  useEffect(() => {
    return () => {
      console.log("gifs out!");
      dispatch(resetGifs());
    };
    // eslint-disable-next-line
  }, []);

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
};

export default Gifs;
