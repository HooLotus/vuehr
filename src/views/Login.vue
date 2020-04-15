<template>
    <div>
        <el-form :model="loginForm" :rules="loginRules" label-width="0px" class="login_container" :ref="loginFormRef">
            <h3 class="login_title">系统登录</h3>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入内容" prefix-icon="iconfont icon-bussiness-man"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入内容" prefix-icon="iconfont icon-password" show-password></el-input>
            </el-form-item>
            <el-checkbox v-model="checked">记住我</el-checkbox>
            <el-form-item class="login_btn">
                <el-button type="primary">登录</el-button>
                <el-button type="info">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            loginForm:{
                username:'admin',
                password:'123456'
            },
            checked:true,
            loginRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在3到8个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在3到18个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login(){
            this.$refs.loginFormRef.validate(async valid=>{
                if(!validate){
                    this.$message.error('错了哦，这是一条错误消息');
                }
                const result=await axios.post('/login',this.loginForm)
            })
        }
    },
}
</script>

<style scoped>
.login_container{
    width: 350px;
    border: 1px solid #eaeeae;
    border-radius: 14px;
    box-shadow: 0 0 25px #cac6c6 ;
    padding: 15px 35px 15px 35px;
    background: #fff;
    position: absolute;
    left:45%;
    top:30%;
    transform: transform(-50%,-50%);
}
.login_title{
    text-align: center;
    margin: 0px 0px 15px 0px;
}
.login_btn{
    display: flex;
}
</style>
