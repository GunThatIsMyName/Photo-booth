import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { resetPhotos, setPhotos } from "../redux/actions/PhotoActions";
import { API_ENDPOINT2, CLIENT_ID } from "../utils/Api";

function Photos() {

  const dispatch = useDispatch();
  const {products,page} = useSelector(state=>state.photos);

  const getData = async () => {
    const response = await fetch(`${API_ENDPOINT2}/photos?client_id=${CLIENT_ID}&per_page=20&page=${page}`);
    const data = await response.json();

    let newList = data.map((item) => {
      const { id, alt_description: description, urls } = item;
      const { regular:image } = urls;
      return { id, image, description };
    });

    dispatch(setPhotos(newList));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [page]);


  // Cleaning photos
  useEffect(() => {
    return()=>{
      dispatch(resetPhotos());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {products.map((item) => {
        const { id, image, description } = item;
        return (
          <div key={id}>
            <img className="photo__image" src={image} alt={description} />
            {/* <h2>{description}</h2> */}
          </div>
        );
      })}
    </>
  );
}

export default Photos;
