From Goratsy (https://github.com/Goratsy):

Русский:
Привет, расскажу на пальцах, что я сделал, чтобы было понятно, как работать с моим кодом, а также его быстро изменить
Всего в папке handShakeServer есть 4 папки: Functions, Models, OpenApi, Plan

#1 Functions 
В папке содержатся все запросы (в папках AuthVK, Ad, User) и есть папке URL

Если вы проект на релизе нужно изменить константную переменную IS_PRODUCTION = true, чтобы отправлять запросы на сервер
Если вы проект в разработке нужно изменить константную переменную IS_PRODUCTION = false, чтобы отправлять запросы на локальный сервер

Перейдем к AuthVK, Ad, User. В них содержаться все запросы (а именно функции с запросами)
Составные части называния функций выглядит так: [что_делает_фукнция][ТИП_ОТПРАВКИ (GET, POST, PATCH, DELETE & ect.)] пример AuthentificationVKGET ([AuthentificationVK][GET])

Список всех функций: 
AuthentificationVKGET, ExchangeTokenVKPOST, LogoutVKPOST, 
CreateUserPOST, GetUserDataGET, RefreshUserDataPATCH, DeleteUserAccountDELETE, GetUserChatsGET, 
GetUserMessageGET, CreateUserChatPOST, RefreshUserChatPATCH, DeleteUserChatDELETE, 
GetAllMessagesGET, CreateNewAdPOST, GetDataAdGET, RefreshDataAdPATCH, DeleteAdDELETE, 
ArchivateAdDELETE, GetListAdGET

Что делают каждая фукнция?:
AuthentificationVKGET - Запускает процесс авторизации пользователя
ExchangeTokenVKPOST - Обмен VK authorization code на access token
LogoutVKPOST - Выйти из текущей учетной записи
CreateUserPOST - Создать нового пользователя
GetUserDataGET - Получить данные пользователя
RefreshUserDataPATCH - Обновить данные пользователя
DeleteUserAccountDELETE - Удалить пользователя
GetUserChatsGET - Получить беседы пользователя
GetUserMessageGET - Получить данные определенной беседы
CreateUserChatPOST - Создать новую беседу
RefreshUserChatPATCH - Обновить беседу
DeleteUserChatDELETE - Удалить беседу
GetAllMessagesGET - Получить все сообщения в беседе
CreateNewAdPOST - Создать новое объявление
GetDataAdGET -  Получить данные объявления
RefreshDataAdPATCH - Обновить данные объявления
DeleteAdDELETE - Удалить объявление
ArchivateAdDELETE - Архивировать объявление
GetListAdGET - Получить список объявлений

В папке OpenApi представлена полная документация

Какая общая структура у функций?

Каждая функция возвращает объект:
Если запрос был успешен (код от 200 до 299), то возвращается объект в виде IData (папка Models) interface 

IData {
    code: number,
    data: object,
}

Если запрос был не успешен (код не от 200 до 299), то возвращается объект в виде IGeneralError (папка Models) interface 

interface IGeneralError {
    code: number,
    message: string,
}

Вывод: когда функция возвращает данные стоит проверять data.code перед тем, как делать различные манипулиции с пришедшими данными

#2 Models
В папке содержатся все Схемы/Модели тем данных, которые приходят с сервера. Они реализованы за счет typescript (а именно interface)

В папке есть OpenApiModels (Модели, которые есть в спецификации/документации в папке Plan и OpenApi), а также собственные MyModels

#3 OpenApi
Содержится фотография, сделанная в swagger для быстрого простмотра запросов, и файл с расширением yaml для полноценного просмотра парамтром и методов запроса

#4 Plan
В папке содержится схема взаимодействия с сервисов VK, frontend и backend, а также модели/схемы данных, которые должны хранится в базе данных

На это readme.txt подходит к концу, спасибо за прочтение!

English:
Hi, I'll tell you on my fingers what I did so that it is clear how to work with my code, as well as quickly change it
In total, there are 4 folders in the handShakeServer folder: Functions, Models, OpenApi, Plan

#1 Functions
The folder contains all requests (in the AuthVK, Ad, User folders) and there is a URL folder

If you are a project on release, you need to change the constant variable IS_PRODUCTION = true to send requests to the server
If you are a project in development, you need to change the constant variable IS_PRODUCTION = false to send requests to the local server

Let's move on to AuthVK, Ad, User. They contain all the requests (namely, functions with requests)
The constituent parts of the function name look like this: [what_the_function_does][SEND_TYPE (GET, POST, PATCH, DELETE & ect.)] example AuthentificationVKGET ([AuthentificationVK][GET])

List of all functions:
AuthentificationVKGET, ExchangeTokenVKPOST, LogoutVKPOST,
CreateUserPOST, GetUserDataGET, RefreshUserDataPATCH, DeleteUserAccountDELETE, GetUserChatsGET,
GetUserMessageGET, CreateUserChatPOST, RefreshUserChatPATCH, DeleteUserChatDELETE,
GetAllMessagesGET, CreateNewAdPOST, GetDataAdGET, RefreshDataAdPATCH, DeleteAdDELETE,
ArchivateAdDELETE, GetListAdGET

What does each function do?:
AuthentificationVKGET - Starts the user authorization process
ExchangeTokenVKPOST - Exchange VK authorization code for an access token
LogoutVKPOST - Log out of the current account
CreateUserPOST - Create a new user
GetUserDataGET - Get user data
RefreshUserDataPATCH - Update user data
DeleteUserAccountDELETE - Delete a user
GetUserChatsGET - Get user conversations
GetUserMessageGET - Get data for a specific conversation
CreateUserChatPOST - Create a new conversation
RefreshUserChatPATCH - Update a conversation
DeleteUserChatDELETE - Delete a conversation
GetAllMessagesGET - Get all messages in a conversation
CreateNewAdPOST - Create a new ad
GetDataAdGET - Get ad data
RefreshDataAdPATCH - Refresh ad data
DeleteAdDELETE - Delete ad
ArchivateAdDELETE - Archive ad
GetListAdGET - Get list of ads

The OpenApi folder contains full documentation

What is the general structure of the functions?

Each function returns an object:
If the request was successful (code from 200 to 299), then an object is returned in the form of IData (Models folder) interface

IData {
code: number,
data: object,
}

If the request was unsuccessful (code not from 200 to 299), then an object is returned in the form of IGeneralError (Models folder) interface

interface IGeneralError {
code: number,
message: string,
}

Conclusion: when a function returns data, it is worth checking data.code before doing various manipulations with the incoming data

#2 Models
The folder contains all the Schemes/Models of the data that come from the server. They are implemented using typescript (namely interface)

The folder contains OpenApiModels (Models that are in the specification/documentation in the Plan and OpenApi folders), as well as their own MyModels

#3 OpenApi
Contains a photo taken in swagger for quick viewing of requests, and a file with the yaml extension for full viewing of parameters and request methods

#4 Plan
The folder contains a diagram of interaction with VK services, frontend and backend, as well as models/data schemas that should be stored in the database

This is where the readme.txt ends, thanks for reading!