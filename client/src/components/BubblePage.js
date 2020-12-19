import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './../utils/axiosWithAuth';
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColorData } from "./../api/getColorData";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    // getColorData();
    getColorData()
      .then(res => {
        console.log(res);
        setColorList(res);
      })
  }, []);

  // const getColorData = () => {
  //   axiosWithAuth()
  //       .get('/api/colors')
  //       .then((res)=>{
  //         console.log("data: ", res);
  //         setColorList(res.data);
  
  //         // this.setState({
  //         //   friendsList: res.data
  //         // });
  //       })
  //       .catch((err)=>{
  //         console.log(err);
  //       })
  // };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
