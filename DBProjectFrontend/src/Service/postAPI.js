import axios from 'axios';

const link = 'http://localhost:8086';


export const  viewAllPost= async (class_id) => {
<<<<<<< HEAD
    // return await axios.get(`${link}/viewAllPost`, class_id);
    return await axios.get(`http://localhost:8086/viewAllPost`, class_id);
=======
    console.log(`${link}/viewAllPost`)
    return await axios.get(`${link}/viewAllPost`, class_id);
    
>>>>>>> 919c3523b5226a4740d8dda23ac68e48ddfcb3b7
}

export const editPost = async (obj) => {
    return await axios.put(`${link}/editPost`, obj);
}

export const deletePost = async (obj) => {
    return await axios.delete(`${link}/deletePost`,obj);
}

export const createPost = async (obj) => {
    return await axios.post(`${link}/createPost`, obj)
}