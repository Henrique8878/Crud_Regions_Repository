import { api } from "@/lib/axios";


interface updateRegionProps{
    Id:number,
    Uf?:string,
    Nome?:string,
}


export async function updateRegion({Id,Uf,Nome}:updateRegionProps){
    console.log(Id,Uf,Nome)
    await api.put("/api/region",{
        Id,
        Uf,
        Nome,
    })
}
    