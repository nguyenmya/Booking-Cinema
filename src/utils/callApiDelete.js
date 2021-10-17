
import axios from "axios";
import { BASE_URL } from "settings/apiConfig";

const callApiPost = (endpoint, method = "DELETE", data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {
    
      'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FuZzI4OSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNhbmd0cEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsInNhbmd0cEBnbWFpbC5jb20iLCJHUDAyIl0sIm5iZiI6MTYzMzIyNzExOCwiZXhwIjoxNjMzMjMwNzE4fQ.EOIoWFsdGdvRDJCuT_Vxoj248q0WBxyu4eDolOZWVOQ'
    },
  })
}
export default callApiPost;

