<script lang='ts' setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const router = useRouter()
const cookies = useCookies(['user'])
const main = useMain()

if (!cookies.get('user')) {
    router.push('/login')
}



</script>
<template>
    <div class="index">
        <div class="form">
            <v-card>
                <v-card-title class="title">添加依赖</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="网址" v-model="main.plugins.modWebsite"
                                append-inner-icon="mdi-arrow-bottom-left"
                                @click:appendInner="main.getDataByWebsite(main.plugins.modWebsite)"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="名称" v-model="main.plugins.modName"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="作者" v-model="main.plugins.modAuthor"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="游戏" v-model="main.plugins.gameID"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="WebId" v-model="main.plugins.webId"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="from" v-model="main.plugins.from"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field label="版本" v-model="main.plugins.modVersion"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="说明" v-model="main.plugins.modDesc"></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="actions">
                    <v-btn>添加</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'Index',
}
</script>
<style lang='less' scoped>
.index {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .form {
        width: 700px;
        max-width: 100%;

        .title {
            text-align: center;
        }

        .actions {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>