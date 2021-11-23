import axios from "axios";
const createApi = ()=>{

const http = axios.create({
    baseURL: 'http://localhost:6789',
  });

const post = async (newTask) => {
    try {
        if(newTask!==""){
          await http.post("/tasks", {title:newTask})
          const response = await get()
          return response
    }
        
    } catch (error) {
        return error.response
    }
  };

const del = async (id) =>{
    try {
        await http.delete(`/tasks/${id}`)
        const response = await get()
        return response
        
    } catch (error) {
        return error.response    
    }
  }

const get = async () =>{
    try {
        const response = await http.get("/tasks")
        return response
        
    } catch (error) {
        return error.response
    }
  }
  return {post,get,del}
};

const api = createApi()

export default api;