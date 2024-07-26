import supabase from "./supabase";

export async function getClicksForUrls(urLIds) {
    const { data, error } = await supabase.from("clicks").select("*").eq("url_id", urLIds)

    if (error) {
        console.log('error', error.message)
        throw new Error("Unable to load Clicks");
    }
    return data;
}