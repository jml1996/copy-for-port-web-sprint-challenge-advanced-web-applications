import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';

export const getColorData = () => {
    axiosWithAuth()
        .get('/api/colors')
        .then((res)=>{
          console.log("data: ", res);
          setColorList(res.data);
  
          // this.setState({
          //   friendsList: res.data
          // });
        })
        .catch((err)=>{
          console.log(err);
        })
  };