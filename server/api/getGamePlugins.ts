//#region 接口
type sourceType = "GlossMod" | "NexusMods" | "Thunderstore" | "ModIo" | "SteamWorkshop" | "CurseForge" | "GitHub"

interface ITag {
    name: string
    color: string
}

interface IModInfo {
    id: number
    from?: sourceType
    webId?: string | number
    nexus_id?: string
    modIo_id?: number
    Thunderstore?: {
        namespace: string
        name: string
    }
    modName: string
    fileName: string
    gameID?: number
    md5: string
    modVersion: string
    tags?: ITag[]
    isUpdate?: boolean
    modType?: number
    isInstalled: boolean
    weight: number
    modFiles: string[]
    modDesc?: string
    modAuthor?: string
    modWebsite?: string
    advanced?: {
        enabled: boolean
        data: any
    }
    key?: string
}

//#endregion

export default defineEventHandler((event) => {

    let data: IModInfo[] = [
        {
            id: 46899,
            gameID: 261,
            webId: 46899,
            from: "GlossMod",
            modName: "Script Hook V",
            modWebsite: "https://mod.3dmgame.com/mod/46899",
            modDesc: "最基础的前置插件",
            modAuthor: "Alexander Blade",
            fileName: "",
            md5: "",
            modVersion: "",
            isInstalled: false,
            weight: 0,
            modFiles: []
        }
    ]


    return data
})
