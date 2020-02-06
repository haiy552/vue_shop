<template>
  <!-- 登录组件 -->
  <div class="login">
      <div class="loginBox">
            <div class="header">
                <img src="http://pic4.zhimg.com/50/v2-e5a0c3a6ab0d7e7b4fa02f094ad89ee4_hd.jpg" alt="">
            </div>
            <div class="inputBox">
                <div class="user">
                  <label for="user">用户名:</label><input type="text" id="user" v-model="user">
                </div>
                <div class="password">
                  <label for="password">密码:</label><input type="password" id="password" v-model="password">
                </div>
            </div>
            <div class="loginicon" @click="login">
              <span>
                登录
              </span>
            </div>
       </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data(){
    return {
      user: '',
      password: ''
    }
  },
  watch:{
      
  },
  computed:{
    
  },
  methods:{
    login(){
      let data = this.user == "admin" && this.password == '1234';
      if(!data){
        this.$notify('输入错误,请重新输入');
      }else{
        this.$router.push({path:"/home"});
      }
    } 
  }
}
</script>
<style scoped lang="scss">
@import '@/common/style/mixin';
  .login{
      width:100%;
      height: 100%;
      .loginBox{
          width:100%;
          padding-top: 3rem;
          display: flex;
          flex-flow: column;
          align-items: center;
          .header{
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
              background-color: pink;
              margin-bottom: 1.5rem;
              overflow: hidden;
              img{
                  width: 100%;
                  height: 100%;
              }  
          }
          .inputBox{
            width: 100%;
            display: flex;
            flex-flow: column;
            .user{
              border-bottom: 1px solid #eee;
            }
            .user,.password{
              width: 80%;
              height: 1rem;
              margin: 0 auto;
              line-height: 1rem;
              display: flex;
              align-items: center;
              text-align: center;
              background-color: #fff;
              label{
                width: 25%;
                height:100%;
              }
              input{
                width: 75%;
                height: 100%;
              }
             
            }
          }
          .loginicon{
              margin-top: 2rem;
              width: 1rem;
              height: 0.8rem;
              display: flex;
              align-items: center;
              background-color: rgb(255, 239, 8);
              border-radius: 0.2rem;
              box-shadow: 0rem 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
              transition: 0.2s;
              &:hover{
                box-shadow: inset 0rem 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
                span{
                  color: red;
                }
              }
              span{
                margin: 0 auto;
                font-size: 0.2rem;
              }
          }
      }
    
  }
</style>