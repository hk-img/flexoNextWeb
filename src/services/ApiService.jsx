import axios from "axios";
import { TOKEN_NAME } from "@/constant/constant";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 || 
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};
export const getAPIAuth = async (url, tokenInit) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: tokenInit ? `Bearer ${tokenInit}` : "",
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const getAPIAuthWithoutBearer = async (url, tokenInit) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: tokenInit ? tokenInit : "",
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const deleteAPIAuth = async (url, tokenInit) => {
  const token = localStorage.getItem(`${TOKEN_NAME}`);
  try {
    const response = await axios.delete(`${BASE_URL}/${url}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const postAPIFormData = async (url, params, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token ? token : ""}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const postAPIFormDataWithoutBearer = async (url, params, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? token : "",
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const postAPI = async (url, params) => {
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const postAPIAuth = async (url, params, tokenInit) => {
  const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const postAPIAuthWithoutBearer = async (url, params, tokenInit) => {
  const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: tokenInit ? tokenInit : token,
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};

export const patchAPIAuth = async (url, params, tokenInit) => {
  const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.patch(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error?.response?.status", error);

    if (
      error?.status === 401 || error?.response?.data?.status === 401 ||
      error?.response?.data?.message === "Invalid token"
    ) {
      localStorage.removeItem(TOKEN_NAME);
      document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      window.location.href = "/";
    }
    throw error;
  }
};
