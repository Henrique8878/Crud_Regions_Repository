import { api } from "@/lib/axios";
import type { QueryFunctionContext } from "@tanstack/vue-query";

interface regionByIdResponse{
    id:number,
    uf:string,
    nome:string,
    ativo:string
}

interface regionByIdProps{
    id:number
}

export async function regionById(context:QueryFunctionContext<readonly[string,number]>){
    const id = context.queryKey[1]
    const response = await api.get<regionByIdResponse>(`/api/region/${id}`)
    return response.data
}