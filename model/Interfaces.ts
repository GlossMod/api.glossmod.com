//#region 接口
type sourceType = "GlossMod" | "NexusMods" | "Thunderstore" | "ModIo" | "SteamWorkshop" | "CurseForge" | "GitHub"

export interface IModInfo {
    id: number
    from?: sourceType
    webId?: string | number
    modIo_id?: number
    Thunderstore?: {
        namespace: string
        name: string
    }
    modName: string
    gameID?: number
    modVersion: string
    modType?: number
    modDesc?: string
    modAuthor?: string
    modWebsite?: string
}

//#endregion