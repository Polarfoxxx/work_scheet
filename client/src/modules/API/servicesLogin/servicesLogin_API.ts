import axios from "axios";
const apiUrl = process.env.REACT_APP_CURRENT_API_URL;


interface type {
    userName: string;
    password: string;
}

async function servicesLogin_Api(params: { userName: string; password: string }): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/login/user`,
            {
                username: params.userName,
                password: params.password,
            },
            { withCredentials: true }
        );
        console.log(response.data);
        
    } catch (error) {
        throw error;
    }
}


export default servicesLogin_Api;