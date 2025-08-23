import axios from "axios";
const apiUrl = process.env.CURRENT_API_URL;


interface type {
    username: string;
    password: string;
}

async function servicesLogin(params: type): Promise<any> {


    try {
        const response = await axios.get(`${apiUrl}/user?ID=12345`, {
            params: {
                username: params.username,
                password: params.password
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default servicesLogin;