import type { AxiosResponse } from "axios";
import { AuthAPI } from "@/config/axios";
import { useSession } from "next-auth/react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/config/Auth";

interface RESPONSE {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}

export const Login = async (
  username: string,
  password: string,
): Promise<AxiosResponse<RESPONSE>> => {
  const res: AxiosResponse<RESPONSE> = await AuthAPI.post("auth/login", {
    username,
    password,
    expiresInMins: 20,
  });

  return res;
};

export const GetClientToken = () => useSession()?.data?.accessToken;

export const GetServerToken = async () => {
  const session = await getServerSession(authOptions);
  return session?.accessToken;
};
