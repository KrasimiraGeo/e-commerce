import { Header } from "../../components/ShopHeader/Header"
import { FetchAllProducts } from '../Admin/FetchAllProducts'
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { Cart } from "../../components/Cart/Cart"
import { AuthContext } from '../../store/auth-context'
import { Upload } from "../Admin/Upload"

import { useState, useContext } from "react"
import { CartProvider } from "../../store/CartProvider"

export const ShopPage = (props) => {

    const [change, setChange] = useState(false)

    const reRenderHandler = (changeDetected) => {
        console.log(change);  //false
        setChange(changeDetected)
        console.log(change); // false
    }

    console.log(change); // true

    const [loginModalIsVisible, setLoginModalIsVisible] = useState(false)
    const [cartModalIsVisible, setCartModalIsVisible] = useState(false)

    const ctx = useContext(AuthContext)

    const showLoginModalHandler = () => {
        setLoginModalIsVisible(true)
    }

    const hideLoginModalHandler = () => {
        setLoginModalIsVisible(false)
    }

    const showCartModalHandler = () => {
        setCartModalIsVisible(true)
    }

    const hideCartModalHandler = () => {
        setCartModalIsVisible(false)

    }

    return (

        <CartProvider>
            {loginModalIsVisible && <LoginForm onClose={hideLoginModalHandler} />}
            <Header onShowLogin={showLoginModalHandler} onShowCart={showCartModalHandler} />
            {cartModalIsVisible && <Cart onClose={hideCartModalHandler} />}
            {ctx.isAdmin && <Upload onActionChange={reRenderHandler} />}
            <FetchAllProducts onDetectedChange={change} />
        </CartProvider>
    )
}

