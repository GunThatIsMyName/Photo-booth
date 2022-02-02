import React, { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  errorPhotos,
  loadingPhotos,
  resetPhotos,
  setPhotos,
} from "../redux/actions/PhotoActions";
import { ImageItem } from "../styles/Main.styles";

// Utils
import { API_ENDPOINT2, CLIENT_ID } from "../utils/Api";
import { photoStoreData } from "../utils/helps";

// components
import Error from "./Error";
import Loader from "./Loader";

const Photos=()=> {
  const dispatch = useDispatch();
  const {
    photos: { products, page, loading, error },
    main: { search },
  } = useSelector((state) => state);

  const getData = async () => {
    let newList;
    dispatch(loadingPhotos());
    if (search) {
      try {
        const response = await fetch(
          `${API_ENDPOINT2}/search/photos?client_id=${CLIENT_ID}&per_page=12&page=${page}&query=${search}`
        );
        const { results } = await response.json();
        newList = photoStoreData(results);
      } catch {
        dispatch(errorPhotos());
      }
    } else {
      try {
        const response = await fetch(
          `${API_ENDPOINT2}/photos?client_id=${CLIENT_ID}&per_page=12&page=${page}`
        );
        const data = await response.json();
        newList = photoStoreData(data);
      } catch {
        dispatch(errorPhotos());
      }
    }
    dispatch(setPhotos(newList));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [page, search]);

  // Cleaning photos
  useEffect(() => {
    return () => {
      dispatch(resetPhotos());
    };
    // eslint-disable-next-line
  }, []);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {products.map((item) => {
        const { id, image, description } = item;
        return (
          <div key={id}>
            <ImageItem className="photo__image" src={image} alt={description} />
          </div>
        );
      })}
      {loading && <Loader />}
    </>
  );
}

export default Photos;
