# Documentación

E-commerce creado con React-App ,se agradadece a [CoderHouse](https://www.coderhouse.com/) al profesor Felix Blanco y a los tutores por la realización de este proyecto

 - [gh-pages](https://enritenconi82.github.io/ReactEnryShop/)
 - [Repositorio](https://github.com/EnriTenconi82/ReactEnryShop)

## FrameWork/Librerias extras

- Se utilizó Bootstrap para la creación de barra de navegacíon con butón hamburguesa y modal

- Se utilizó React-router-dom para la navegacion

## Database

- Se utilizo database firebase
en el DB se encuentras 2 collecciones:

### itemList conteniente los items usados en la app 
        cada item tiene un ID univoco creado por firebase y los campos

- description (string)
- group (number)
- image (url)
- name (string)
- price (number)
- stock (number)


### orders conteniente las ordenes de compras creadas
        cada order contiene un ID univoco credo por firebase y los campos
#### buyer     
 - {  
          email (string)  
          name (string)  
          phone (number)  
         }(*objeto contenientes datos del comprado*)
    
#### cart 
- {[    
           id  (string)  
           name (string)  
           price (number)  
           qta (number)    
          }] (array de objeto contenientes elementos comprado)
        
-  date (date)   
- estado (string) (*valor por defecto:generada*)   


## App
        App contiente componentes incluido en la routes de react-router-dom, al estar fijo el NavBar no fue incluido en las rutas

 ```

  <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Se picó !"/>} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route exact path="/items/:id" element={<ItemDetailsContainer />} /> 
              <Route exact path="/Brief" element={<Brief />} /> 
              <Route exact path="/checkout/:id" element={<Checkout/>} /> 
          </Routes>

        </CartProvider>
      </BrowserRouter>
```
## Context

### CartContext / CartProvider
        Contexto conteniente los elementos correspondientes al carro de compra del usuario ; en su interior se encuentran y proveen:

 - cartList
        Array conteniente los Items agregados al carrito y su  correspondientes cantidad

  - setCartList
        Funcion de Seteo de cartList
    
  - addItem (id, qta, name ,price)
        Función que suma o corrige(si ya existe) item y su cantidad a CartList
        (ver funcion IsInCart)

  - deleteItem(id)
        Función que elimina item de CartList
    
  - removeList
            Función que elimina todos items de CartList
    
  - cartTotalValue
            Función que devuelve valor en dinero de  CartList
    
  - isInCart(id)
        Función que devuelte un item si el mismo existe en CartList

  - calcItemsQty
           Funcion que devuelte un item si el mismo existe en CartList

  - existingQty(id)
            Funcion que devuelte el valor de  la cantidad presente en cartList de un determinado item 

## Routes (componentes)
        Componentes navegables desde router-react-dom
### Brief= ()
        Componente presentacional

- Muestra elementos presente en el carrito  al componente _OrderCreationContainer_, y acciones sobre elementos comprados  
        _{ cartList, deleteItem, removeList,cartTotalValue}_  
        desde el contexto(_cartContext_)

### Checkout=()
- Componente que visualiza un order con un derminado id (proveniente desde el url)
        usando hook de react-router-dom
        _const { id } = useParams();_


###  ItemListContainer = (props)

        Componente con logica de negocio ,

- Al tener como input el
      _props.greeting_  muestra el mensaje de bienvenida al sitio.

- Al no tener props de input muestra los elementos de la categoria correspondiente a lo recibido por el url usando el hook de react-router-dom  
_const { categoryId } = useParam();_
      

###  ItemDetailsContainer= ()
        Componente conteniente logica de negocio.
- Muestra elemento con un       determinado id usando hook de react-router-dom  
_const { id } = useParams();_  
- Efectua operaciones con sobre el carrito a traves    del contexto (cartContext) 
_{addItem,isInCart,existingQty}_



## Components

### Avatar = ({ src, alt = 'item image' }) 
    Componente Presentacional
- Configuración de imagen a mostar
  


### Card = ({ children })
       Componente Presentacional
- Coloca elemento a su interior  en una Card


### CartWidget = ({cartQ})
        Componente Presentacional
- Muestra imagen e cantidad de elementos en carrito (cartQ - cartContext)
- Es llamado en navBar y visualizable si hay elemento en el carrito

### Charging = () 
        Componente Presentacional
- Se visualiza mientras se esperan datos desde el Db 
### ItemDetail= ({item, action})
        Componente Presentacional
- Muestra detalles de elemento (_item_ ) y
        de un acccion (action)
        Action (desde _ItemDetailsContainer_)  

-_ItemQuantitySelector_  
-Botón Agregar/Final de compra

### Item= ({item})
        Componente Presentacional
- Muestra elemento (item)
- Al hacer click sobre el se accede a  
_ItemDetailsContainer_

### ItemQuantitySelector = ({AddItemButton,item})
        Componente Presentacional

-  Visualiza controles para sumar/restar  cantidades de (item)a comprar y devuelve la cantidad a  
_ItemDetails_ (_AddItemButton_)

### Alertmodal=({showModal,setShowModal,text})
        Compomente Presentacional 
- Muestra un texto {text} de advertencia en determinados casos  y lo cierra  
{_showModal,setModalShow_}

### NavBar = ()
    Componente Presentacional

- Muestra o no a cartWidget segun la cantidad de items en carrito
    _calcItemsQty_ proveniente del contexto (_cartContext_)  
    (_calcItemsQty===0_ no se mostrará Widget) 
  
### OrderCreationContainer = () 
    Componente de Logica de App
- Crea una orden conteniende los elementos comprados
    {_cartList,cartTotalValue,removeList_} 
    tomado del contexto (_cartContext_)
    contenido en componente _Brief_

