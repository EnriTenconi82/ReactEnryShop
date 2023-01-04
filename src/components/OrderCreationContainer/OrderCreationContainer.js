import React,{useState,useContext} from 'react';
import { getFirestore, collection, addDoc,serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {cartContext} from "../../contexts/cartContext";
import "./OrderCreationContainer.css"

const OrderCreationContainer = () => {

  const nav=useNavigate()

  const { cartList,cartTotalValue,removeList} =useContext(cartContext)
  
  const [order,setOrder]=useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [emailCheckValue,setEmailCheckValue]=useState("")
  const [idM,setIdM]=useState()

  const submitHandler = (ev) => {
    ev.preventDefault();
    if(form.email===emailCheckValue){
  
      const db = getFirestore();
      const orderCollection= collection(db, 'orders');
      addDoc(orderCollection,order).then(snapshot=>{
        setIdM(snapshot.id)
        removeList()
        nav(`/Checkout/${snapshot.id}`)
        }
      )
    }

    else (alert("Los mail tienen que coincidir"))

  };


  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    if (name==="emailCheck") setEmailCheckValue(ev.target.value)
    
    else {
        setForm({ ...form, [name]: value });
        setOrder({buyer:form,cart:cartList,total:cartTotalValue(),estado:"generada",date: serverTimestamp()})
      }

    };

  return (
  <div >
    {typeof idM!=="undefined"?
      (<div>mensaje {idM}</div>):
      ( <div>
            <form className="formDiv"  onSubmit={submitHandler}>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                name="name"
                id="name"
                required={true}
                value={form.name}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required={true}
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="emailCheck">Repita su Email</label>
                <input
                  type="email"
                  name="emailCheck"
                  id="emailCheck"
                  required={true}
                  value={form.emailCheck}
                  onChange={changeHandler}
                />
            </div>
            <div>
              <label htmlFor="phone">Telefono</label>
              <input
                type="number"
                name="phone"
                id=""
                required={true}
                value={form.phone}
                onChange={changeHandler}
              />
            </div>
            <button>Enviar</button>
          </form>
      </div>
    )
    }
  </div>
    );
};

export default OrderCreationContainer;
