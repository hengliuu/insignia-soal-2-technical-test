import { getApiInstance } from "@/utils/api-utils";

export interface GetUsersByIdResponse {
  id: number;
  firstName: string;
  mddleName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
}

export async function getUsersById(): Promise<GetUsersByIdResponse> {
  return (await getApiInstance().get(`/users/1`)).data;
}
