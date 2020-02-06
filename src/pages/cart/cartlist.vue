<template>
    <div class="cart">
        <buttom></buttom>
        <!-- 购物车 -->
        <div class="cartList" >
            <div class="goods" v-for="(item,index) in cartList" :key="item.goodsId">
                <div class="checked">
                    <van-checkbox class="checkBox" 
                    @click="change(item.goodsId)"
                    v-model="item.checked"  
                    checked-color="red"/>
                </div>
                <div class="img1">
                    <img :src="item.goodsSImg || 'http://hbimg.b0.upaiyun.com/1e3ead27ad747c7c92e659ac5774587a680bb8d25252-mRVFlu_fw658'" >
                </div>
                <div class="goodsTitle">
                    <div class="goodsName" >
                        <h4 v-cloak>{{item.goodsName}}</h4>
                    </div>
                    <div class="goodsPrice">
                        <h4 v-cloak>{{`￥${item.goodsPrice}`}}</h4>
                        <span @click="del(index)">删除</span>
                        <van-stepper class="Stepper"
                        input-width="0.4rem" button-size="0.4rem" 
                        v-model="item.goodsNum" 
                        integer />
                    </div>
                </div>
            </div>
        </div>
        
        <div class="pay">
            <div class="checked">
                <van-checkbox class="checkBox" v-model="allCheck" checked-color="red"/>
                <span>全选</span>
            </div>
            <div class="allPay">
                <span>总计：</span>
                <span>{{goodsTotal}}</span>
            </div>
            <div class="button">
                <h3>去结算</h3>
            </div>
        </div>
        <!-- 这是一个空格 -->
        <div class="space"></div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import buttom from '@/components/buttom';
export default {
  name: 'cart',
  data(){
      return {
          

      }
  },
  
  updated() {
    window.sessionStorage.setItem('list', JSON.stringify(this.cartList))
  },
  computed: {
      ...mapState(["cartList"]),
      goodsTotal(){
          let num = 0;
          this.cartList.map(item => {
              if(item.checked){
                num += (item.goodsPrice*item.goodsNum)
              }
          })
        return num
    },
    allCheck:{
        get(){
            let flag = true;
            if(this.cartList.length == 0){
                return flag = false;
            }else{
                this.cartList.map(item => {
                    if(!item.checked){
                       return flag = false;
                    }
                })
            }
            return flag
        },
        set(){
            this.GOODS_ALL_SELECT(this.allCheck)
        }  
    },
   
  },
  methods:{
      ...mapMutations(["CART","GOODS_SELECT","GOODS_ALL_SELECT","DELETE_CART_GOODS"]),
    goBack(){
      this.$router.go(-1)
    },
    goHome(){
      this.$router.push({path:`/home`})
    },
    change(id){
        this.GOODS_SELECT(id)
    },
    del(num){
        this.DELETE_CART_GOODS(num)
    },
  },
  components:{
    buttom
  }
}
</script>

<style scoped lang="scss">
    @import '../../common/style/mixin';
    .cart{
        width:100%;
        height: calc(100vh - 1rem);
        .cartList{
            display: flex;
            height: calc(100vh - 1rem);
            flex-flow: column;
            margin: 0.1rem 0.1rem 0 0.1rem; 
            box-sizing: border-box;
            .goods{
               width:100%;
               height: 2.2rem;
               display: flex;
               margin-top: 0.2rem;
               background-color: $fc;
               border-radius: 0.2rem;
               overflow: hidden;
               &:nth-of-type(1){
                   margin-top: 0;
               }
               .checked{
                   width: 10%;
                   height:100%;
                   position: relative;
                   .checkBox{
                       @include center;
                   }
               }
               .img1{
                   width: 30%;
                   height:100%;
                   img{
                       display:block;
                       width:100%;
                       height:100%; 
                   }
               }
               .goodsTitle{
                   width:60%;
                   height:100%;
                   display: flex;
                   flex-flow: column;
                    padding-left: 0.2rem;
                   .goodsName{
                       width: 100%;
                       height: 1rem;
                       padding: 0.3rem 0.1rem 0 0; 
                       h4{
                            font-family: '黑体';
                            @include b3;
                       }
                   }
                   .goodsPrice{
                       width: 100%;
                       height: 1rem;
                       padding: 0.2rem 0.1rem 0.1rem 0; 
                       display: flex;
                       justify-content:space-between;
                       align-items: center;
                       .Stepper{
                           font-family: '黑体';
                       }
                       h4{
                           color:red;  
                           width: 30%;
                       }
                       span{
                           background-color: red;
                           padding: 0.05rem;
                           border-radius: 0.1rem;
                           color: $fc;
                       }
                   }
               }
            }
        }
        .pay{
            width: 100%;
            height: 1rem;
            position: fixed;
            bottom:0;
            display: flex;
            line-height: 1rem;
            background-color: $fc;
            .checked{
                   width: 20%;
                   height: 100%;
                   position: relative;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    text-align: center;
                   .checkBox{
                       height: 60%;
                       
                   }
                   span{
                    height: 40%;
                    line-height: 0.3rem;
                    font-size:0.2rem;
                    color: rgb(119, 115, 115); 
                   }
               }
            .allPay{
                width: 50%;
                height: 100%;
                padding-right:0.1rem;
                text-align: right;
                
            }
            .button{
                width: 30%;
                height: 100%;
                text-align: center;
                background-color: #f2270c;
                
                h3{
                    color: $fc;
                    // font-family: '黑体';
                    font-weight: 700;
                    font-size: 0.4rem;
                }
            }
        }
        .space{
            width:100%;
            height: 1rem;
        }
    }
</style>