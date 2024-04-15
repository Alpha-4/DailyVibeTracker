import {prisma} from "@/utils/db"
import {currentUser} from "@clerk/nextjs"
import {User} from "@clerk/nextjs/dist/types/server";
import {redirect} from "next/navigation";


const createNewUser = async () => {

    const user: User = (await currentUser())!;
    const dbUser = await prisma.user.findUnique({
        where: {
            clerkId: user.id
        }
    })

    if (!dbUser) {
        const newUser = await prisma.user.create({
            data: {
                clerkId: user.id,
                email: user?.emailAddresses[0]?.emailAddress
            }
        })
    }
    redirect("/journal")
}

const page = async () => {
    await createNewUser();
    return (
        <div>Hi New user!!</div>
    )
}

export default page