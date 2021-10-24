import req from "./config";

export const getListData = (data) => {
    return req("get", "/data", data)
}

