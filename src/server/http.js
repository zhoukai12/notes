import {get, post} from './api'

export default {
    //获取全部用户信息
    apiGetHomeData() {
        return get('/index');
    },
    apiGetTypeInfo() {
        return get('/getTypeInfo');
    },
}