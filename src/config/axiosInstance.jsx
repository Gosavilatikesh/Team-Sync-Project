import axios from 'axios'

export let axiosInstance = axios.create({
    baseURL:"https://team-sync-backend-n78w.onrender.com/api",
    withCredentials: true,
})


axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        let orginalReq = error.config;
        
        if(error.response.status === 401 && !orginalReq._retry){
            orginalReq._retry = true;

            try {

                await axiosInstance.get("/auth/get-accessToken")
                return axiosInstance(orginalReq)
                
            } catch (error) {
                window.location.href = "/";
                return Promise.reject(error)
            }
        }
    }
)
