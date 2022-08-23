import { useState } from "react";
import "./homepage.css";
import Modal from 'react-modal';
import { useItem } from "../../context/items-context";

const Homepage = () =>{

const [modal, setModal] = useState(false);
const [check, setCheck] = useState(false);
const { items, createItem, singleItem, setSingleItem, deleteItem, toggle} = useItem();

const itemHandler = () =>{
createItem();
setModal(false);
}

const customStyle = {
overlay: {
backgroundColor: "rgba(52, 58, 64, 0.8)",
},
content: {
width: "18rem",
height: "20rem",
margin: "8rem auto",
backgroundColor: "var(--box-color)",
textAlign: "center"
},
};
return(
<div className="App">
    <main>
        <section className="top-section">
            <h1 className="head">Welcome User!</h1>
            <h3 className="page-subhead">To Do Items</h3>
        </section>
        <section className="items-container">
            <p className="items-head">Items</p>

            {items.map((item) => (
            <div className="items-list">
                <div className="item-cont">
                    {check ?
                    <input type="checkbox" className="check strike" onChange={()=> setCheck(false)}></input> :
                    <input type="checkbox" className="check strike" onChange={()=> setCheck(true)}></input>
                    }
                    <p className="item-name">{item.name}</p>
                </div>
                <div className="item-icon">
                    <span><i class="fas fa-trash-alt icon-color" onClick={()=> deleteItem(item.id)}></i></span>
                </div>
            </div>
            ))}
            <div className="items-btn">
                <button class="float-btn float-action" onClick={()=> setModal(true)}>
                    <span><i class="fal fa-plus"></i></span>
                </button>
            </div>
        </section>

        {
        modal && (
        <Modal isOpen={ modal } style={ customStyle }>
            <header className="modal-header">
                <h3 className="card-title">Create New Item</h3>
                <i class="fas fa-times icon-color" onClick={()=> setModal(false)}></i>
            </header>
            <main className="modal-subhead">
                <label gor="username">Name</label>
                <input type="text" placeholder="Item name" className="inp-box" name="username" value={singleItem.name}
                    onChange={(e)=>
                setSingleItem({...singleItem, name: e.target.value})}/>
                <button className="btn-modal" onClick={()=> itemHandler()}>CREATE</button>
            </main>
        </Modal>
        )
        }
    </main>
</div>
)
}

export { Homepage };