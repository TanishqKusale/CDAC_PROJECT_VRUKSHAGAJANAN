import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import productvalidation from './productvalidation';
import image from "./img/bg.png";

function AddProduct() {
  const sellerid = sessionStorage.getItem('id');
  const [product, setProduct] = useState({
    pname: '',
    pcat: '',
    price: '',
    // subcat: "",
    // brand: "",
    sellerId: sellerid,
  });
  const [errors, setErrors] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    setSelectedPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(productvalidation(product));
    setSubmitted(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      const formData = new FormData();
      formData.append('pic', selectedPhoto);
      formData.append('pname', product.pname);
      formData.append('pcat', product.pcat);
      formData.append('price', product.price);
      // formData.append("brand", product.brand);
      // formData.append("subcat", product.subcat);
      formData.append('sellerId', sellerid);
      console.log(product);
      axios
        .post('http://localhost:9096/api/products', formData)
        .then((resp) => {
          let result = resp.data.data;
          console.log(result);
          alert('Product saved successfully');
          history.push('/myproducts');
        })
        .catch((error) => {
          console.log('Error', error);
          alert('Error saving product');
        });
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="card shadow bg-dark" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", borderBlockColor: "#5e912d", borderWidth: 3 ,borderRadius: 10 }}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <h4 className="text-center p-2 font-weight-bold">Add Product Form</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">
                    Product Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="pname"
                      value={product.pname}
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.pname && (
                      <small className="text-danger float-right">
                        {errors.pname}
                      </small>
                    )}
                  </div>
                </div>
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">
                    Category
                  </label>
                  <div className="col-sm-8">
                    <select
                      name="pcat"
                      value={product.pcat}
                      onChange={handleInput}
                      className="form-control"
                    >
                      <option value="">Select Category</option>
                      <option>COLORED</option>
                      <option>RED</option>
                    </select>
                    {errors.pcat && (
                      <small className="text-danger float-right">
                        {errors.pcat}
                      </small>
                    )}
                  </div>
                </div>
                {/* <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">
                    Sub Category
                  </label>
                  <div className="col-sm-8">
                    <select
                      name="subcat"
                      value={product.subcat}
                      onChange={handleInput}
                      className="form-control"
                    >
                      <option value="">Select Sub Category</option>
                      <option>Upper Wear</option>
                      <option>Bottom Wear</option>
                    </select>
                    {errors.subcat && (
                      <small className="text-danger float-right">
                        {errors.subcat}
                      </small>
                    )}
                  </div>
                </div> */}
                <div className="form-group form-row ">
                  <label className="col-sm-4 form-control-label ">Price</label>
                  <div className="col-sm-8 ">
                    <input
                      type="number"
                      name="price"
                      value={product.price}
                      onChange={handleInput}
                      className="form-control"
                    />
                    {errors.price && (
                      <small className="text-danger float-right">
                        {errors.price}
                      </small>
                    )}
                  </div>
                </div>
                {/* <div className="form-group form-row">
                  {/* <label className="col-sm-4 form-control-label">Brand</label> */}
                {/* <div className="col-sm-8"> */}
                {/* <select
                      name="brand"
                      value={product.brand}
                      onChange={handleInput}
                      className="form-control"
                    >
                      <option value="">Select Brand</option>
                      <option>Siyarams</option>
                      <option>Raymonds</option>
                      <option>Wrangler</option>
                      <option>Black Berry</option>
                      <option>Louis Phillipe</option>
                      <option>Peter England</option>
                      <option>Oswal</option>
                      <option>Zara</option>
                      <option>Levis</option>
                      <option>Pepe Jeans</option>
                      <option>Pantaloons</option>
                    </select> */}
                {/* {errors.brand && (
                      <small className="text-danger float-right">
                        {errors.brand}
                      </small>
                    )} */}
                {/* </div>
                </div>  */}

                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label">Photo</label>
                  <div className="col-sm-8">
                    <input
                      type="file"
                      required
                      name="photo"
                      value={product.photo}
                      onChange={handleFileInput}
                      className="form-control-file"
                    />
                  </div>
                </div>

                <button className="btn float-right text-light" style = {{background:'#7fa629'}}>
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
