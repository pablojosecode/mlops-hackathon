
import { GoogleOAuthProvider } from "@react-oauth/google";

const chat = () => {
    return (
        <GoogleOAuthProvider clientId="45408313407-q6jsic6d271qhjh76t6rfpg8c3nljj9n.apps.googleusercontent.com">

            <div className="w-screen dark:bg-[#080708] min-h-screen pb-10 ">
            </div>
        </GoogleOAuthProvider>
    )
}

export default chat;