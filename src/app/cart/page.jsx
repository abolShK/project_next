import Clientfile from "./clientfile"
export function generateMetadata(){
    return {
        title: "Home | Your Online Cart",
        description: "Discover a wide range of amazing Cart product.",
        openGraph: {
            title: "Home | Your Online Cart",
            description: "Explore top-quality Cart products at your fingertips.",
        }
    }
}

export default function Cart(){
    return(
        <Clientfile />
    )
    
}