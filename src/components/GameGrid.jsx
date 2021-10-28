import React,{useEffect,useState}from 'react'
import Card from './Card';
import Marker from './Marker';
import { DragDropContext,Draggable,Droppable } from "react-beautiful-dnd";
import wood from '../assets/wood.jpg'
const yourCards =[
 "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C9",
  "C10",
  "CJ",
  "CQ",
]

const oppCards =[
"CK",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D8",
  "D9",
  "D10"
]

let playedCards =[
"CK",
  "D1",
]

const flippedOp=[]
function GameGrid() {

    const[playedCards,setPlayedCards] =useState([])

    useEffect(()=>{

    },[])

    const renderCards =(cards= [], isClickable  = false)=>{
        if (!cards) {
        return null;
        }

        return cards.map(card => (
            <Draggable draggableId={card} key={card} index={card}>
                {(provided) => (
                <Card
                    className={isClickable ? "card-clickable" : "card"}
                    id={card}
                    key={card}
                    card={card}
                    style={{ fontSize: "17pt" }}
                    disabled={!isClickable}
                    onCardClick={(e)=>{handleClick(e,card)}}
                    ContainerProps={{ ref: provided.innerRef }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                />
                )}
            </Draggable>
        ));
        
    }
const playCard =(card)=>{
    let newArr=[...playedCards]
    if(newArr.length===2) {
        newArr=[];
        newArr.push(card) 

    }else{
      newArr.push(card)  
    }
    setPlayedCards(newArr);

}
const handleClick = (e,card) => {
    switch (e.detail) {
      case 1:
        console.log("click");
        break;
      case 2:
        playCard(card);
        break;
      case 3:
        console.log("triple click");
        break;
    default:
        break;
    }
}

    const renderPLayedCards =(cards, isClickable  = false)=>{
                if (!cards) {
        return null;
        }

        return cards.map(card => (
            <Draggable draggableId={card} key={card} index={card}>
                {(provided) => (
                <Card
                    className={"playedCard"}
                    id={card}
                    key={card}
                    card={card}
                    style={{ fontSize: "17pt" }}
                    disabled={!isClickable}
                    onCardClick={(e)=>{handleClick(e,card)}}
                    ContainerProps={{ ref: provided.innerRef }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                />
                )}
            </Draggable>
        ));
    }
    const onDragEnd = ({ source, destination }) => {

    }
    return (
         <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId={15}>
              {(provided) => (
            <div className="gameGrid">
                <div className="gameGrid__container">
                    <div className="gameGrid__container__info">
                        <div className="infoOpp">
                            <h4>Opponent Cards</h4>
                            <hr/>
                            {renderCards(oppCards, true)}
                        </div>
                        <div className="infoFlip">
                            <h4>flipped Cards</h4>
                            {renderCards(flippedOp, false)}
                            <hr/>
                            <Marker/>
                            
                        </div>
                    </div>
                    <div className="gameGrid__container__played">
                        <div className="played">
                            <div className="box">
                                {renderPLayedCards(playedCards, false)}
                            </div>
                        </div>

                    </div>
                    <div className="gameGrid__container__info2">
                        <div className="infoOpp">
                            <h4>Your Cards</h4>
                            <hr/>
                            {renderCards(yourCards, true)}
                        </div>
                        <div className="infoFlip">
                            <h4>flipped Cards</h4>
                            <hr/>
                            <Marker/>
                        </div>
                    </div>
                </div>

            </div>
        )}
        </Droppable>
        </DragDropContext>
    )
}

export default GameGrid
