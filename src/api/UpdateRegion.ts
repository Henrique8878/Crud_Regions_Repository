import { api } from "@/lib/axios";


interface updateRegionProps{
    Id:string,
    Uf?:string,
    Nome?:string,
    Ativo?:string
}


export async function updateRegion({Id,Uf,Nome,Ativo}:updateRegionProps){
    await api.put("/api/region",{
        Id,
        Uf,
        Nome,
        Ativo
    })
}
    