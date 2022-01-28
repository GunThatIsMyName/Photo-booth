import { useEffect, useState } from "react";
import { API_ENDPOINT, API_KEY } from "./utils/Api";

function App() {
  const [list,setList]=useState([]);
  const [count,setCount]=useState(0);


  const getGifty=async()=>{
    const response = await fetch(`${API_ENDPOINT}/trending?api_key=${API_KEY}&limit=3&offset=${count}`);
    const {data} = await response.json();

    const getData = data.map(item=>{
      const {id,title,images}=item;
      const {original:{url:image}}=images;
      return {id,title,image};
    })
    setList(prev=>[...prev,...getData]);
  }
  
  useEffect(()=>{
    getGifty();
  },[count])



  return (
    <>
      <h1>Giphy</h1>

      {list.map(item=>{
        const {id,image,title}=item;
        return <div key={id} >
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
      })}

      <button onClick={()=>setCount(prev=>prev+3)} >Pagination</button>
    </>
  );
}

export default App;
