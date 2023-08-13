import { getApiInstance } from "@/utils/api-utils";

export interface GetActivityHeaderSectionResponse {
  id: number;
  body: string;
  user: GetActivityDetailSectionResponse;
}

export interface GetActivityDetailSectionResponse {
  id: number;
  username: string;
}

export interface GetActivitySectionRequest {
  limit: number;
  skip: number;
  select: string;
}

export default async function GetActivitySection(
  data: GetActivitySectionRequest
): Promise<GetActivityHeaderSectionResponse[]> {
  return (
    await getApiInstance().get(
      `/comments?limit=${data.limit}&skip=${data.skip}&select=${data.select}`
    )
  ).data["comments"];
}
