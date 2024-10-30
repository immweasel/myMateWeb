От goratsy:

Русский:
В папке Models написаны schemes (схемы), иначе говоря структуры модели данных, поступающих из backend (сервера)
В папке Functions написаны функции, отправляющие запросы на backend (сервер). Они обрабатывают ответ от backend (сервера) следующим образом:

1) Если есть ошибка при выполнение функции, она обрабатывается
2) Если поступил с сервера код, не входящий в диапозон от 200 до 299, то функция возращает ответ с содержанием ошибки от сервера
2) Если поступил с сервера код, входящий в диапозон от 200 до 299, то функция возращает ответ с содержанием данных от сервера

English:
The Models folder contains schemes, in other words, the structures of the data model coming from the backend (server)
The Functions folder contains functions that send requests to the backend (server). They process the response from the backend (server) as follows:

1) If there is an error when executing the function, it is processed
2) If the code received from the server is not in the range from 200 to 299, the function returns a response with the content of the error from the server
2) If the code received from the server is in the range from 200 to 299, the function returns a response with the content of the data from the server