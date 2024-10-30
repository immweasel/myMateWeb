import { URL } from "../URL/URL";

interface IError {
    code: number,
    message: string,
}

const AuthentificationVKGET = async () => {
    const DOMEN: string = URL + '/v1/auth/vk';

    interface IAuth {
        auth_id: string,
        code_challenge: string,
        state: string,
        scopes: string,
    }

    let request = await fetch(DOMEN, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (request.ok) {
        let data: IAuth = await request.json();
        let response = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}

const ExchangeTokenVKPOST = async ({code, device_id, auth_id, state} : {code: string, device_id: string, auth_id?: string, state: string}) => {
    const DOMEN: string = URL + '/v1/auth/vk/exchange-code';

    interface IBody {
        code: string,
        device_id: string,
        auth_id?: string,
        state: string
    }

    let body: IBody = {
        code,
        device_id,
        auth_id,
        state 
    }


    let request = await fetch(DOMEN, {
        method: "POST", 
        mode: "no-cors", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (request.ok) {
        let data: {access_token: string} = await request.json();
        let response = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}


export { AuthentificationVKGET, ExchangeTokenVKPOST };