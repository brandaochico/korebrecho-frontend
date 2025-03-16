import { createContext } from "react";
import { Products } from "../assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'R$';
    const deliveryFee = '15';

    const value = {
        Products, currency, deliveryFee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );

}

export {ShopContextProvider};