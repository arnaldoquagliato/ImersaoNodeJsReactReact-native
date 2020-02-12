import React, {Component} from "react";
import api from '../../src/services/api'


export default class Product extends Component{
    state = {
        product: {},
    };

    async componentDidMount(){
         const { id } = this.props.match.params;

         const response = await api.get(`/products/${id}`);

         this.setState({ product: response.data })
    }
    
    render(){
        const { product } = this.state;

        return <h1>Product</h1>
    }
}