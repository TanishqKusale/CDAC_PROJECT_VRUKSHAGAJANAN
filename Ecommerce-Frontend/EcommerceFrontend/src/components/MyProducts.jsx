import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./img/bg.png"; 

function MyProducts() {
  const sellerid = sessionStorage.getItem("id");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9096/api/products?sellerid=" + sellerid)
      .then((resp) => {
        console.log(resp.data);
        setProducts(resp.data.data);
        console.log(products);
      });
  }, []);

  const deleteProduct = (prodid) => {
    let resp = window.confirm("Are you sure to delete this product ?");
    if (resp) {
      axios
        .delete("http://localhost:9096/api/products/" + prodid)
        .then((resp) => {
          alert("Product deleted successfully");
          axios
            .get("http://localhost:9096/api/products?sellerid=" + sellerid)
            .then((resp) => {
              console.log(resp.data);
              setProducts(resp.data.data);
              console.log(products);
            });
        });
    }
  };

  return (
    <div className="container">
      <div className="card shadow text-dark" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", borderBlockColor: "#5e912d", borderWidth: 3 ,borderRadius: 10 }}>
        <div className="card-body">
          <h4>My Products</h4>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Category</th>
                {/* <th>Sub Category</th> */}
                {/* <th>Brand</th> */}
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x.prodid}>
                  <td className="text-dark">
                    <img
                      width="100"
                      src={"http://localhost:9096/" + x.photo}
                      className="img-thumnail"
                    />
                    {x.pname}
                  </td>
                  <td className="text-dark">{x.pcat}</td>
                  {/* <td className="text-light">{x.subcat}</td> */}
                  {/* <td className="text-light">{x.brand}</td> */}
                  <td className="text-dark">{x.price}</td>
                  <td>
                    <Link
                      to={"/edit/" + x.prodid}
                      className="btn btn-sm mr-2"
                      style = {{background:'#7fa629'}}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(x.prodid)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
