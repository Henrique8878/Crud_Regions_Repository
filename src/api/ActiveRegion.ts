import { api } from "@/lib/axios";


interface activeRegionProps{
    id:number,
}


export async function activeRegion({id}:activeRegionProps){
    await api.patch(`/api/region/${id}/active`)
}
    