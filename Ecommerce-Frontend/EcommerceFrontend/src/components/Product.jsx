function Product(props) {
  const { x, showModal } = props;
  return (
    <div className="col-sm-3 " key={x.prodid}>
      <div
        className="card text-center text-dark mb-3 bg-transparent"
        style={{ boxShadow: "0 0 3px 3px white" }}
      >
        <div className="card-header p-1 border-bottom border-white">
          <h5>{x.pname}</h5>
        </div>
        <div className="card-body py-1">
          <img
            style={{ width: "90%", height: "250px", marginBottom: "10px" }}
            src={"http://localhost:9096/" + x.photo}
            className="img-thumnail"
          />
          {/* <h6 className="float-left ">Brand :{x.brand}</h6> */}
          <h6 className="text-center">Price: ₹{x.price}</h6>
        </div>
        <div className="card-footer p-1">
          <button
            onClick={(e) => showModal(x)}
            className="btn btn-sm"
            style = {{background:'#7fa629'}}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
