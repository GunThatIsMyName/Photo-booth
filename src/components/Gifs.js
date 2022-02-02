import React, { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { errorGifs, loadingGifs, resetGifs, setGifs } from "../redux/actions/GifsActions";

// utils and styles
import { ImageItem } from "../styles/Main.styles";
import { API_ENDPOINT, API_KEY } from "../utils/Api";
import { gifStoreData } from "../utils/helps";

// components
import Error from "./Error";
import Loader from "./Loader";

const Gifs = () => {
  const dispatch = useDispatch();
  const {
    gifs: { products, limit, loading,error },
    main: { search },
  } = useSelector((state) => state);

  const getGifty = async () => {
    let newData;
    dispatch(loadingGifs());
    if (search) {
      try{
        const response = await fetch(
          `${API_ENDPOINT}/search?api_key=${API_KEY}&limit=12&offset=${limit}&q=${search}`
        );
        const { data } = await response.json();
        newData = gifStoreData(data);
      }catch{
        dispatch(errorGifs())
      }
    } else {
      try {
        const response = await fetch(
          `${API_ENDPOINT}/trending?api_key=${API_KEY}&limit=12&offset=${limit}`
        );
        const { data } = await response.json();
        newData = gifStoreData(data);
      } catch {
        dispatch(errorGifs())
      }
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
      dispatch(resetGifs());
    };
    // eslint-disable-next-line
  }, []);

  if(error){
    return <Error />
  }

  return (
    <>
      {products.map((item) => {
        const { id, image, title } = item;
        return (
          <div key={id}>
            <ImageItem className="photo__image" src={image} alt={title} />
          </div>
        );
      })}

      {loading && <Loader /> }
    </>
  );
};

export default Gifs;
