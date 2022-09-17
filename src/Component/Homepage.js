import React,{useState} from "react";
import "./Homepage.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Login from "./Login";
export default function Homepage() {
  const [toggle, settoggle] = useState(false);

  return (
    <div>
      <div
        style={{
          justifyContent: "space-between",
          padding: "0px 30px 0px 30px",
        }}
        className="d-flex "
      >
        <div className="sidemenu">
          <MenuIcon />
        </div>
        <div  className="whatsapp-icon">
          <WhatsAppIcon  />
         {toggle && (<Login/>)}
        </div>
      </div>
      <div style={{ padding: "8px 18px 0px 18px" }}>
        <input placeholder="Search" className="input-text" type="text" />
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div className="left-border-css"></div>
        <div className="camera-icon">
          <PhotoCameraIcon />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div style={{ textAlign: "center" }}>
            <img
              src="/watch.jpg"
              style={{ height: "150px", width: "150px" }}
            ></img>
          </div>
        </div>
        <div className="col-md-1"></div>

        <div className="col-md-7">
          <div>
            <div style={{ fontSize: "20px" }}>Querty Watch </div>
            <div style={{ fontSize: "20px" }}>Leather strap</div>
            <div className="fw-bold d-flex">
              <div>
                <CurrencyRupeeIcon />
              </div>
              <div className="price">12,000</div>
            </div>
            <div>
              <span className="fw-bold">Color:</span>
              <span>Brown</span>
            </div>
            <div style={{ color: "#6dad6d" }}>In stock</div>
          </div>
        </div>
      </div>
      <div
        className="d-flex row mt-2"
        style={{ justifyContent: "space-around" }}
      >
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="d-flex remove-add-circle">
            <div>
              <RemoveCircleOutlineIcon />
            </div>
            <div>1</div>
            <div >
              <AddCircleOutlineIcon />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-7 d-flex">
          <div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="">
            <button className="button-more">See more like this</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div style={{ textAlign: "center" }}>
            <img
              src="/yogamat.jpg"
              style={{ height: "150px", width: "150px" }}
            ></img>
          </div>
        </div>
        <div className="col-md-1"></div>

        <div className="col-md-7">
          <div>
            <div style={{ fontSize: "20px" }}>Yoga mat </div>
            <div style={{ fontSize: "20px" }}>Lorem ipsum</div>
            <div className="fw-bold d-flex">
              <div>
                <CurrencyRupeeIcon />
              </div>
              <div className="price">1000</div>
            </div>{" "}
            <div>
              <span className="fw-bold">Color:</span>
              <span>Blue</span>
            </div>
            <div style={{ color: "#6dad6d" }}>In stock</div>
          </div>
        </div>
      </div>
      <div
        className="d-flex row mt-2"
        style={{ justifyContent: "space-around" }}
      >
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="d-flex remove-add-circle">
            <div>
              <RemoveCircleOutlineIcon />
            </div>
            <div >1</div>
            <div >
              <AddCircleOutlineIcon />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-7 d-flex">
          <div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="">
            <button className="button-more">See more like this</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div style={{ textAlign: "center" }}>
            <img
              src="/braclet.jpg"
              style={{ height: "150px", width: "150px" }}
            ></img>
          </div>
        </div>
        <div className="col-md-1"></div>

        <div className="col-md-7">
          <div>
            <div style={{ fontSize: "20px" }}>Anchor Bracelet </div>
            <div style={{ fontSize: "20px" }}>Lorem ipsum</div>
            <div className="fw-bold d-flex">
              <div>
                <CurrencyRupeeIcon />
              </div>
              <div className="price">5000</div>
            </div>{" "}
            <div>
              <span className="fw-bold">Color:</span>
              <span>Gold</span>
            </div>
            <div style={{ color: "#6dad6d" }}>In stock</div>
          </div>
        </div>
      </div>
      <div
        className="d-flex row mt-2"
        style={{ justifyContent: "space-around" }}
      >
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="d-flex remove-add-circle">
            <div>
              <RemoveCircleOutlineIcon />
            </div>
            <div>1</div>
            <div >
              <AddCircleOutlineIcon />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-7 d-flex">
          <div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="">
            <button className="button-more">See more like this</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <div className="subtotal fw-bold d-flex">
          Subtotal
          <div className="total-price-icon">
            <CurrencyRupeeIcon />
          </div>
          <div className="total-price-css">13,500</div>
        </div>
      </div>
      <div onClick={() => settoggle(!toggle)}  className="proceed-to-buy mt-2">proceed to buy (3 items)</div>
    </div>
  );
}
