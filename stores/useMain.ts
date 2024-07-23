import { defineStore } from "pinia";
import type { IModInfo } from "~/model/Interfaces";

export const useMain = defineStore('Main', {
    state: () => ({
        plugins: {
            modVersion: "latest",
        } as IModInfo
    }),
    getters: {

    },
    actions: {
        async getDataByWebsite(website?: string) {
            if (website) {
                // 正则 从 https://mod.3dmgame.com/mod/211349 中获取 211349
                let reg = /https:\/\/mod.3dmgame.com\/mod\/(\d+)/
                let id = website.match(reg)?.[1]
                if (id) {
                    let data = fetch(`https://mod.3dmgame.com/api/v2/GetModData`, {
                        headers: {
                            "Authorization": "67d8667248a801ff6ddc74ac43016168",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ "mod_id": 12345 }),
                        method: "POST"
                    })
                }
            }
        }
    }
})