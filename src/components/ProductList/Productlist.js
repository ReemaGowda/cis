import React, { Component } from "react";
import axios from "axios";
import "../ProductList/productlist.scss";
import { Link } from "react-router-dom";

export default class Productlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  getProductList() {
    axios
      .get("http://test.com360degree.com/apis/getProductList")
      .then((response) => {
        console.log(response.data);
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getProductList();
  }

  add(id, name, price) {
    document.write('<p id="jstext">' + name + '</p>')
   document.write('<p id="jstext">' + price + '</p>')
    axios({
      method: "post",
      url: "http://test.com360degree.com/apis/getProductDetails",
      body: {
        productid: id,
        productname: name,
        productprice: price,
      },
    });
      console.log(name);
      console.log(price)
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
            <div className="container-1">
              
          {this.state.products.map((product) => (
            <div key={product.id} className="flex-box-container-1">
              {/* <img src={product.image}/> */}
              <p>Name :{product.name}</p>
              <img
                src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5184217_png/attract-round-ring--white--rose-gold-tone-plated-swarovski-5184217.png"
                width="50"
              />
              <p>Price :{product.price}</p>
              <Link
                to={`/productdetails/${product.id}`}
                onClick={() =>
                  this.add(product.id, product.name, product.price)
                }>
                View Details
              </Link>
            </div>
          ))} 
        </div>
      </React.Fragment>
    );
  }
}
