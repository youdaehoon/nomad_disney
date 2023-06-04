import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { logo } from "../../../assets"
import {useQuery} from"@tanstack/react-query"
import { fechCharacter } from "../../../api"



const Container=styled.div`
position: absolute;
width: 100vw;
height: 100vh;
 overflow: hidden;
 top:0px;
 left: 0px;

 display: flex;
 align-items: center;
 justify-content: center;
`
const Dim=styled.div`
    z-index: 7;
    position: absolute;
    width: 100vw;
height: 100vh;
background-color: rgb(0, 0, 0);
opacity: 0.5;



`

const Content=styled.div`
    z-index: 8;
    max-width: calc(100vw - 64px - 64px);
    height: 80vh;
    background-color: white;
    opacity: 1;

    max-height: 992px;

    display: flex;

    &>img{
        max-height: 992px;
    max-width: 992px;
    aspect-ratio: 1 / 1;
    flex-basis: 992px;


    }


`

const UserInfo=styled.div`
display: flex;
height: 60px;
    border-bottom: 1px solid rgb(239, 239, 239);

align-items: center;
padding-left: 14px;
justify-content: space-between;

&>button{
    width: 60px;
    height: 60px;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
}
`

interface Character{
    films:string[];
    id:number;
    imageUrl:string;
    name:string;
    sourceUrl:string
}
const Character=()=>{
    const {characterId}=useParams()
    const {data,isLoading}=useQuery<Character|undefined>(["character",characterId],()=>{ if(characterId)return fechCharacter(characterId)})
console.log(data)
    return <Container>
        <Dim></Dim>
        <div style={{zIndex:"8"}}>
       
            <Content>
<img src={data?.imageUrl}/>
<div style={{width:"500px"}}>
    <UserInfo>

    <h2>{data?.name}</h2>
    <button><Link to={"/"}>X</Link></button>
    </UserInfo>
    <a>
        <h2 style={{fontSize:"20px",fontWeight:"600"}}>출연작</h2>
        {data?.films.map((el,idx)=><a style={{display:"block"}} key={el}>{el}</a>)}
    </a>
 
</div>


            </Content>
        </div>
        



    </Container>
}

export default Character