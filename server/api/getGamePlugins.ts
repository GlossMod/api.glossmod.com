export type sourceType = "GlossMod" | "NexusMods" | "Thunderstore" | "ModIo" | "SteamWorkshop" | "CurseForge" | "GitHub"

interface IGamePlugins {
    gameID: number
    modId: number
    from?: sourceType
    modIo_id?: number
    Thunderstore?: {
        namespace: string
        name: string
    }
    modName: string
    modWebsite: string
    modDesc: string
    modAuthor: string
}



export default defineEventHandler((event) => {

    let data: IGamePlugins[] = [
        {
            gameID: 261,
            modId: 46899,
            from: "GlossMod",
            modName: "Script Hook V",
            modWebsite: "https://mod.3dmgame.com/mod/46899",
            modDesc: "最基础的前置插件",
            modAuthor: "Alexander Blade"
        }
    ]


    return data
})
