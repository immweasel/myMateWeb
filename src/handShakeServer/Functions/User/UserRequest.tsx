import { IData } from "../../Models/MyModels/DataSchema";
import { IGeneralError } from "../../Models/OpenApiModels/GeneralErrorSchema";
import { IMessage } from "../../Models/OpenApiModels/MessageSchema";
import { IUser } from "../../Models/OpenApiModels/UserSchema";
import { URL } from "../URL/URL";

const CreateUserPOST = async ({ user_id, surname, name, photo, gender, DateOfBirth }: IUser) => {
    const DOMEN: string = URL + '/v1/user/';

    const body: IUser = {
        user_id,
        surname,
        name,
        photo,
        gender,
        DateOfBirth
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
        let data: IUser = await request.json();
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

const GetUserDataGET = async (access_token: string, user_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}?access_token=${access_token}`;

    let request = await fetch(DOMEN, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: IUser = await request.json();
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

const RefreshUserDataPATCH = async (access_token: string, user_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}?access_token=${access_token}`;

    let request = await fetch(DOMEN, {
        method: "PATCH",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: { message: string } = { message: 'OK' };
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

const DeleteUserAccountDELETE = async (access_token: string, user_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}?access_token=${access_token}`;

    let request = await fetch(DOMEN, {
        method: "DELETE",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: { message: string } = { message: 'OK' };
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

 // recoding response data!!!
const GetUserChatsGET = async (user_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}/conversations`;

    let request = await fetch(DOMEN, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: { message: string } = { message: 'OK' };
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

 // recoding body!!!
const GetUserMessageGET = async (user_id: number, conversation_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}/conversation/${conversation_id}`;

    let request = await fetch(DOMEN, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: '',
    });

    if (request.ok) {
        let data: IMessage = await request.json(); 
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

 // recoding body!!!
const CreateUserChatPOST = async (user_id: number, conversation_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}/conversation/${conversation_id}`;

    let body: IMessage = {
        message_id: 0,
        sender_id: 0,
        content: '',
        timestamp: ''
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

 // recoding body!!!
const RefreshUserChatPATCH = async (user_id: number, conversation_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}/conversation/${conversation_id}`;

    let body: IMessage = {
        message_id: 0,
        sender_id: 0,
        content: '',
        timestamp: ''
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


const DeleteUserChatDELETE = async (user_id: number, conversation_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}/conversation/${conversation_id}`;

    let body: IMessage = {
        message_id: 0,
        sender_id: 0,
        content: '',
        timestamp: ''
    }

    let request = await fetch(DOMEN, {
        method: "DELETE",
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

 // recoding body!!!
const GetAllMessagesGET = async (user_id: number, conversation_id: number) => {
    const DOMEN: string = URL + `/v1/user/${user_id}/conversation/${conversation_id}/messages`;

    let request = await fetch(DOMEN, {
        method: "GET",
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

export { CreateUserPOST, GetUserDataGET, RefreshUserDataPATCH, DeleteUserAccountDELETE, GetUserChatsGET, GetUserMessageGET, CreateUserChatPOST, RefreshUserChatPATCH, DeleteUserChatDELETE, GetAllMessagesGET };