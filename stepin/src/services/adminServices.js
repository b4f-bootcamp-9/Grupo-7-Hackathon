import { FindOneAdmin } from "@/data/adminData";


export async function ReadUser(data) {

    const res = await FindOneAdmin(data)

    if(res === null){
        return false
    }
    return true
}

