import axios from 'axios';
const baseURL  = "https://api.zbztb.cn/api/public/v1";

export const fetchGet = (url, param) => {
    return new Promise((resolve, reject) => {
        let newUrl = baseURL + url;
        axios.get(newUrl, {
            params: param
        }).then((res) => resolve(res.data.message)
        ),err => reject(err)
    })   
}   
//轮播图
export const car = () => fetchGet('/home/swiperdata');
//导航菜单
export const nav = () => fetchGet('/home/catitems');
//楼层
export const floordata = () => fetchGet('/home/floordata');
//分类
export const cat = () => fetchGet('/categories');
//商品列表详情
export const goodsList = (id='',name='') => fetchGet('/goods/search',{cid:id,query:name});
//商品详情
export const goodsDetail = (id) => fetchGet('/goods/detail',{goods_id:id});