import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Address = () => {
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/crypto/getAddress?address=${location.state.value}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return <div>address</div>;
};

export default Address;
