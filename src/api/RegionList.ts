import { api } from "@/lib/axios";

interface regionListResponse{
    id:number,
    uf:string,
    nome:string,
    ativo:boolean
}

export async function regionList(){
    const response = await api.get<regionListResponse[]>("/api/region")
    console.log(response.data)
    return response.data
}