import axios from "axios";
import { useCallback } from "react";
import { IUser } from "../interfaces/IUser";

export const useUserFetcher = () => {
  const execute = useCallback(async (): Promise<IUser> => {
    const responce = await axios.get("user?id=1");

    return responce.data;
  }, [axios]);

  return { execute };
};
