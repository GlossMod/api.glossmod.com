<script lang='ts' setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const runtimeConfig = useRuntimeConfig()
const router = useRouter()
const cookies = useCookies(['user'])

const password = ref('')

// console.log(runtimeConfig.public.PASSWORD);

if (cookies.get('user')) {
    router.push('/')
}

function login() {
    if (password.value == runtimeConfig.public.PASSWORD) {
        cookies.set('user', 'admin')
        console.log("登录成功");
        router.push('/')
    }
}


</script>
<template>
    <div class="login">
        <div class="form">
            <v-card>
                <v-card-title class="title">登录</v-card-title>
                <v-card-text>
                    <v-text-field label="密码" prepend-icon="mdi-lock" type="password" v-model="password"
                        @keydown.enter="login"></v-text-field>
                </v-card-text>
                <v-card-actions class="actions">
                    <v-btn append-icon="mdi-login" @click="login">登录</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'Login',
}
</script>
<style lang='less' scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .form {
        width: 500px;
        max-width: 80%;

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