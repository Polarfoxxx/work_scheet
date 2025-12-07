import axios from "axios";

type Type_for_loginUser = {
    userName: string;
    password: string;
}

async function servicesLogin_Api(params: Type_for_loginUser): Promise<any> {
    try {
        const response = await axios.post("/login/user", {
            username: params.userName,
            password: params.password,
        });
        return response.data;

    } catch (error) {
        console.error("API Error (servicesLogin_Api):", error);
        return undefined;
    };
};


export default servicesLogin_Api;