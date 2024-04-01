import axios from 'ts-axios-new'

const CODE_CODE = 0

export function get(url) {
    return function(params = {}) {
        return axios.get(url, { params }).then(res => {
            const { errno: code, data } = res.data
            if (code === CODE_CODE) {
                return data
            }
        }).catch(err => {
            console.log('获取数据失败', err)
        })
    }
}
