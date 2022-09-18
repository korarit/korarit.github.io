const { createApp } = Vue

//process หน้า cert
createApp({
    data() {
        return {
            name: 'Poftfolio',
            data: '',
        }
    },
    metainfo(){
        return {
            meta: [
                { charset: 'utf-8' }
            ]
        }
    }
}).mount('#certificate_page')