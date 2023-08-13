import { getApiInstance } from "@/utils/api-utils";

export interface GetVideoSectionResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export interface GetVideoSectionRequest {
  limit: number;
  skip: number;
  select: string;
}

export default async function GetVideoSection(
  data: GetVideoSectionRequest
): Promise<GetVideoSectionResponse[]> {
  return (
    await getApiInstance().get(
      `/products?limit=${data.limit}&skip=${data.skip}&select=${data.select}`
    )
  ).data["products"];
}
