import {
    CART,
    ADD_CART,
    GOODS_SELECT,
    GOODS_ALL_SELECT,
    DELETE_CART_GOODS
} from './mutation-types'

export default {
    [ADD_CART](state,obj){
        if(state.cartList.length == 0){
            state.cartList.push(obj)
        }
        else{
            let flag = true;
            state.cartList.map((item) => {
               if(item.goodsId == obj.goodsId){
                   item.goodsNum++;
                   flag = false;
               }   
             })
             if(flag){
                state.cartList.push(obj);
             } 
        }  
    },
    [GOODS_SELECT](state,id){
        state.cartList.map(item => {
          if(item.goodsId == id){
              item.checked = !item.checked
          }
        });
    },
    [GOODS_ALL_SELECT](state,checked){
        state.cartList.map(item => {
            item.checked = !checked;
        })
    },
    [DELETE_CART_GOODS](state,num){
        state.cartList.splice(num,1)
    },
    [CART](state,data){
        state.cartList= data
    }
}