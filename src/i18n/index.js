import zh from './zh'
import en from './en'
import { createI18n } from 'vue-i18n'

console.log('createI18n', createI18n)
const messages = {
    zh,
    en,
}
let searchParams = new URLSearchParams(location.search);
const language = (navigator.language || 'en').toLocaleLowerCase() // 这是获取浏览器的语言
const i18n = createI18n({
    locale: searchParams.get('lang') || localStorage.getItem('language') || (['en', 'zh'].indexOf(language.split('-')[0]) != -1 ? language.split('-')[0] : '') || 'zh',
    // fallbackLocale: 'zh', // 设置备用语言
    messages,
})
export default i18n