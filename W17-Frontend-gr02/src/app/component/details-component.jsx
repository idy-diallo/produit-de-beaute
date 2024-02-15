import React, { useState } from "react";
import "../globals.css";
import PanierModal from "./panierModal-component";
import 'bootstrap/dist/css/bootstrap.min.css';  

const DetailsComponent = ({setUserType}) => {
  
  const [isPanierModalOpen, setIsPanierModalOpen] = useState(false);
  const [val, setVal] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: "",
    image: "",
    quantity: "",
  });
  const p = JSON.parse(window.localStorage.getItem("stocker"));

  const openPanierModal = () => {
    setSelectedProduct({
      name: p.nom_produit,
      price: p.prix,
      image: p.imageProduit,
      quantity: val,
    });
    window.sessionStorage.setItem("qt", val);
    setIsPanierModalOpen(true);
  };
  const closePanierModal = () => {
    setIsPanierModalOpen(false);
  };
  
  function change(e) {
    setVal(e.target.value)
    window.sessionStorage.setItem("qt", val);
  }

  function inc(e) {
    val < 100 ? setVal(prevVal => parseInt(prevVal, 10) + 1) : 100;
  }
  function dec(e) {
    val - 1 > 0 ? setVal(prevVal => parseInt(prevVal, 10) - 1) : 0;
  }
  
  return (
    <section className="py-5">
      <div className="container3">
        <div className="rowz gx-5">
          <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <img
                className="rounded-4 fit"
                src={p.imageProduit}
              />
            </div>
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark">{p.nom_produit}</h4>
              <div className="mb-3">
                <span className="h6">{p.stock}</span>
                <span className="text-muted">In stock</span>
              </div>

              <div className="mb-3">
                <span className="h5">{p.prix}</span>
                <span className="text-muted">/per box</span>
              </div>

              <p>{p.descriptionProduit}</p>


              <div className="rowz mb-4">
                <div className="col-md-4 col-6 mb-3">
                  <label className="mb-2 d-block">Quantity</label>
                  <div className="input-group mb-3">
                    <button
                      className="btn btn-white border border-secondary px-3"
                      type="button"
                      id="button-addon1"
                      data-mdb-ripple-color="dark"
                      onClick={dec}
                    >
                      <i className="fas fa-minus">-</i>
                    </button>
                    <input
                      type="number"
                      className="form-control text-center border border-secondary"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      min={1}
                      value={val}
                      onChange={(e) => change(e)}
                    />
                    <button
                      className="btn btn-white border border-secondary px-3"
                      type="button"
                      id="button-addon2"
                      data-mdb-ripple-color="dark"
                      onClick={inc}
                    >
                      <i className="fas fa-plus">+</i>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="BTN-Detail">
                <a href="#" className="btn btn-warning shadow-0">
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#" className="btn btn-primary shadow-0" onClick={openPanierModal}>
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </a>
                <a
                  href="#"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg"></i> Favoris{" "}
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <PanierModal
        isOpen={isPanierModalOpen}
        onClose={closePanierModal}
        productInfo={selectedProduct}
      />
    </section>
  );
};

export default DetailsComponent;
