import { api } from "@/lib/axios";

interface regionByIdResponse{
    Id:number,
    Uf:string,
    Nome:string,
    Ativo:string
}

interface regionByIdProps{
    id:number
}

export async function regionById({id}:regionByIdProps){
    const response = await api.get<regionByIdResponse>(`/api/region/${id}`)
    return response.data
}