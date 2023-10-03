import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./Productcomponent";
import axios from "axios";
import {setProducts} from "../redux/action/productActions"
import { useEffect } from "react";

const ProductListing = () => {
    const products = useSelector((state) => state)
   const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios
        .get("http://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err)
        })
        dispatch (setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products :",products)
    return (
        <div className="ui grid component">
            <ProductComponent />
        </div>
    )
}
export default ProductListing