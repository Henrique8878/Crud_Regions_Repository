import { api } from "@/lib/axios";


interface createRegionProps{
    Uf:string,
    Nome:string,
}


export async function createRegion({Uf,Nome}:createRegionProps){
    await api.post("/api/region",{
        Uf,
        Nome,
    })
}
    