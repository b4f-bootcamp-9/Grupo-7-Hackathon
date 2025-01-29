import { FindOneUser } from "@/data/usersData";


export async function ReadUser(data) {

    const res = await FindOneUser(data)

    if(res === null){
        return false
    }
    return true
}

