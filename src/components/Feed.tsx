import React,{useState} from"react"
import { Link } from "react-router-dom";
import styled
 from "styled-components";


const Container = styled.article`
  width: 32%;
  height: 0;
  padding-bottom: 32%;
  position: relative; /* 포지셔닝을 위해 relative를 설정합니다. */

  &  img {
    position: absolute; /* 포지셔닝을 위해 relative를 설정합니다. */

    width: 100%;
    height: 100%;
    top: 0%;
  }
  &>a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

const HoverEffect=styled.div`
 opacity: 0.5; 
 background-color: rgb(0, 0, 0);
 position: absolute;
 top: 0px;
 width: 0px;
 width: 100%;
 height: 100%;
 z-index: 3;

 display: flex;
 align-items: center;
 justify-content: center;

 &>span{
    z-index: 4;
    color:white;
    font-size: 20px;
}
  
`
interface Iprops{
    id:number;
    imageUrl:string;
    name:string

}
const Feed=({id,imageUrl,name}:Iprops)=>{
const [hover,setHover]=useState(false)

    return  <Container onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
      <Link to={`feed/${id}`}>
     
        {hover&& <HoverEffect>
            <span>            {name}
</span>
            </HoverEffect>}
           
            <img src={imageUrl} alt={`character/${id}`}/>
            </Link>
          </Container>
}

export default Feed