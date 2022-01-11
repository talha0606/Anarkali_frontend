import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import avatar from "../images/avatar.png";


function ShopDetail() {
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState("");
    const [shopaddress, setshopAddress] = useState("");
    const [shopemail, setshopEmail] = useState("");
    const [shopName, setshopName] = useState("");
    const [shopDescription, setshopDescription] = useState("");
    const [shopImage, setshopImage] = useState(avatar);

    const callSellerPage = async () => {
        try {
            const res = await fetch(
                `/shopinfo?sellerid=${localStorage.getItem("id")}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await res.json();
            console.log(data);
            setshopName(data[0].sName);
            setshopDescription(data[0].sDescription);
            setshopAddress(data[0].address);
            setshopEmail(data[0].email);
            setshopImage(data[0].shopImage);

        } catch (err) {
            history.push("/login");
        }
    };

    useEffect(() => {
        console.log("sellerid " + localStorage.getItem("id"));
        callSellerPage();
    }, []);

    const changeid = () => setId(localStorage.getItem("id"));

    return (
        <div className="container shopDetailPage">

            <div className="card text-white shopImgDetailPage">
                <img
                    className="card-img"
                    src={`/uploads/${shopImage}`}
                    alt="Shop Image"
                    height="1000px"
                    // width="1000px"
                />
                <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    )
}

export default ShopDetail;
