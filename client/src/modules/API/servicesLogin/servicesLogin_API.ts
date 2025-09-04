import axios from "axios";
const apiUrl = process.env.CURRENT_API_URL;


interface type {
    userName: string;
    password: string;
}

async function servicesLogin_Api(params: type): Promise<any> {


    try {
        const response = await axios.get(`${apiUrl}/login/user`, {
            params: {
                username: params.userName,
                password: params.password
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default servicesLogin_Api;