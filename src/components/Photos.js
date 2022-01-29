import React, { useEffect, useState } from "react";
import { API_ENDPOINT2, CLIENT_ID } from "../utils/Api";

function Photos() {
  const [page,setPage]=useState(1);
  const [list, setList] = useState([]);

  const getData = async () => {
    const response = await fetch(`${API_ENDPOINT2}/photos?client_id=${CLIENT_ID}&per_page=20&page=${page}`);
    const data = await response.json();

    let newList = data.map((item) => {
      const { id, alt_description: description, urls } = item;
      const { regular:image } = urls;
      return { id, image, description };
    });

    setList((prev) => [...prev, ...newList]);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      {list.map((item) => {
        const { id, image, description } = item;
        return (
          <div key={id}>
            <img className="photo__image" src={image} alt={description} />
            {/* <h2>{description}</h2> */}
          </div>
        );
      })}

<button onClick={() => setPage((prev) => prev + 1)}>More photos</button>
    </>
  );
}

export default Photos;
