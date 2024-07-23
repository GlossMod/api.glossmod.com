import { IModInfo } from "~/model/Interfaces"


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
            modVersion: "latest",
        }
    ]


    return data
})