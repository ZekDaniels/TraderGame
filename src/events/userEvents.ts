import { encryptAsync } from "../util/encrypt";

export async function encryptPasswordIfChanged(user: any, options: any) {
   
    if (user.changed("password")) {
        user.password = await encryptAsync(user.get("password"));
    }
}
