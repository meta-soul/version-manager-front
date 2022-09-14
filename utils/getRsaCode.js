import Vue from 'vue'
import secretConstant from '../src/assets/secretConstant';
import JSEncrypt from 'jsencrypt';

let getRsaCode = function (str) { // 注册方法
    let pubKey = secretConstant.publicKey;// ES6 模板字符串 引用 rsa 公钥
    let encryptStr = new JSEncrypt();
    encryptStr.setPublicKey(pubKey); // 设置 加密公钥
    try {//防止连续加密报错
        let data;
        if (encryptStr.encrypt(str) != false) {
            data = encryptStr.encrypt(str);  // 进行加密
            return data;
        }
        else {
            throw new Error('length err')
        }
    } catch (err) {
        console.log('err11', err)
        return data
    }
}
export default getRsaCode