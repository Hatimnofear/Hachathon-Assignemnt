"use client";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { cartActions } from "@/store/slice/cartSlice";
import { configureStore } from '@reduxjs/toolkit'




const AddToCart = () => {
    const dispatch = useDispatch();
    const addItem = () => 
    { 
        dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
        toast.success("Product Added");
    };
  return <Button onClick={addItem}> Add To Cart</Button>;
};
export default AddToCart;