import { api } from "@/lib/axios";

interface regionListResponse{
    Id:number,
    Uf:string,
    Name:string,
    Ativo:boolean
}

export async function regionList(){
    const response = await api.get<regionListResponse[]>("/api/region")
    return response.data
}