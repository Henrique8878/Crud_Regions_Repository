import { api } from "@/lib/axios";


interface inactiveRegionProps{
    id:number,
}


export async function inactiveRegion({id}:inactiveRegionProps){
    await api.patch(`/api/region/${id}/inactive`)
}
    