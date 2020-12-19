import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';

export const getColorData = () => {
    return axiosWithAuth()
        .get('/api/colors')
        .then((res)=>{
          console.log(res.data);
          // setColorList(res.data);
          return res.data;
  
          // this.setState({
          //   friendsList: res.data
          // });
        })
        .catch((err)=>{
          console.log(err);
        })
  };