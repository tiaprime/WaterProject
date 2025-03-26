// import { createContext, ReactNode, useContext, useState } from "react"
// import { CartItem } from "../types/CartItem"

// interface CartContextType {
//     cart: CartItem[]
//     addToCart: (item: CartItem) =>  void
//     removeFromCart: (projectId : number) => void
//     clearCart : () => void
// }


// const cartContext = createContext<CartContextType | undefined>(undefined)



// export const CartProvider = ({children}: {children : ReactNode}) => {
//     const [cart, setCart] = useState<CartItem[]>([])

//     const addToCart = (item: CartItem) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find((c) => c.projectId === item.projectId) //bool
//             const updateCart = prevCart.map((c) =>
//                 c.projectId === item.projectId? {...c, donationAmount: c.donationAmount + item.donationAmount} : c
//             )

//             return existingItem ? updateCart : [...prevCart, item]
//         })
//     }


//     const removeFromCart = (projectId : number) => {
//         setCart((prevCart) => prevCart.filter((c) => c.projectId === projectId))
//     }


//     const clearCart = () =>{
//         setCart(() => [])
//     }


//     return(

//         <cartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
//             {children}
//         </cartContext.Provider>
//     )

// } 


// export const useCart = () => {
//     const context = useContext(cartContext)
//     if (!context){
//         throw new Error('useCart must be used within a CartProvider')
//     }
// }

//* HILTON CODE
import { createContext, ReactNode, useContext, useState } from 'react';
import { CartItem } from '../types/CartItem';

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (projectId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
        const existingItem = prevCart.find((c) => c.projectId === item.projectId);
        const updatedCart = prevCart.map((c) =>
            c.projectId === item.projectId
            ? { ...c, donationAmount: c.donationAmount + item.donationAmount }
            : c
        );

        return existingItem ? updatedCart : [...prevCart, item];
        });
    };

    const removeFromCart = (projectId: number) => {
        setCart((prevCart) => prevCart.filter((c) => c.projectId !== projectId));
    };

    const clearCart = () => {
        setCart(() => []);
    };

    return (
        <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart }}
        >
        {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};