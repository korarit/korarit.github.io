const { createApp } = Vue
//process หน้าปก
createApp({
    data() {
        return {
            name: 'Poftfolio',
            myname: 'นายกรฤต แสงทอง',
            school: 'สวรรค์อนันต์วิทยา'
        }
    },
    metainfo(){
        return {
            meta: [
                { charset: 'utf-8' }
            ]
        }
    }
}).mount('#index_page')