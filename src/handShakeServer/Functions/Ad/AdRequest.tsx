import { IData } from "../../Models/MyModels/DataSchema";
import { IAd } from "../../Models/OpenApiModels/AdSchema";
import { IGeneralError } from "../../Models/OpenApiModels/GeneralErrorSchema";
import { URL } from "../URL/URL";

const CreateNewAdPOST = async (user_id: number, access_token: string, { ad_id, title, description, location, price} : IAd) => {
    const DOMEN: string = URL + `/v1/ad?user_id=${user_id}&access_token=${access_token}`;

    const body: IAd = {
        ad_id,
        title,
        description,
        location,
        price
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
        let data: {message: string} = {message: 'OK'};
        let response: IData = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IGeneralError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}

const GetDataAdGET = async (ad_id: number, user_id: number, access_token: number) => {
    const DOMEN: string = URL + `/v1/ad/${ad_id}?user_id=${user_id}&access_token=${access_token}`;

    let request = await fetch(DOMEN, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: IAd = await request.json();
        let response: IData = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IGeneralError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}

const RefreshDataAdPATCH = async (user_id: number, access_token: number, { ad_id, title, description, location, price} : IAd) => {
    const DOMEN: string = URL + `/v1/ad/${ad_id}?user_id=${user_id}&access_token=${access_token}`;

    const body: IAd = {
        ad_id,
        title,
        description,
        location,
        price
    }

    let request = await fetch(DOMEN, {
        method: "PATCH",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (request.ok) {
        let data: {message: string} = {message: 'OK'};
        let response: IData = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IGeneralError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}

const DeleteAdDELETE = async (ad_id: number, user_id: number, access_token: number) => {
    const DOMEN: string = URL + `/v1/ad/${ad_id}?user_id=${user_id}&access_token=${access_token}`;

    let request = await fetch(DOMEN, {
        method: "DELETE",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: {message: string} = {message: 'OK'};
        let response: IData = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IGeneralError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}

const ArchivateAdDELETE = async (id: number, user_id: number, access_token: number) => {
    const DOMEN: string = URL + `/v1/ad/${id}/archivate?user_id=${user_id}&access_token=${access_token}`;


    let request = await fetch(DOMEN, {
        method: "DELETE",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: {message: string} = {message: 'OK'};
        let response: IData = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IGeneralError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}

const GetListAdGET = async (city?: string, district?: string, gender?: string, age_requirements?: string) => {
    const DOMEN: string = URL + `/v1/ads?city=${city}&district=${district}&gender=${gender}&age_requirements=${age_requirements}`;

    let request = await fetch(DOMEN, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: IAd[] = await request.json();
        let response: IData = {
            code: request.status,
            data,
        };

        return response;
    } else {
        let error: IGeneralError = {
            code: request.status,
            message: request.statusText,
        }

        return error;
    }
}


export { CreateNewAdPOST, GetDataAdGET, RefreshDataAdPATCH, DeleteAdDELETE, ArchivateAdDELETE, GetListAdGET };