import React, { useEffect, useState } from "react";
import axios from "axios";

const BtcDisplay = () => {
  const [btc, setBtc] = useState([]);
  const [trash, setTrash] = useState("");

  function GetBtc() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((data) => {
        setBtc(data.data);
        setTrash("bybis");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    GetBtc();
    console.log(btc);
    console.log(trash);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      GetBtc();
      console.log(btc);
    }, 3000);
  }, [btc]);

  return <div>{}</div>;
};

export default BtcDisplay;
