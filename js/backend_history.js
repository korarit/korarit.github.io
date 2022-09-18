const { createApp } = Vue

//process หน้าประวัติ
createApp({
    data() {
        return {
            name: 'Poftfolio',
            myname: 'กรฤต แสงทอง',
            school: 'สวรรค์อนันต์วิทยา',
            me_data: ''
        }
    },
    metainfo(){
        return {
            meta: [
                { charset: 'utf-8' }
            ]
        }
    },
    getMyData(){
        axios.post("action.php",{
            action:"get_my_data"
        }).then(function(res){
            app.me_data=res.data
        })
    }
}).mount('#history_page')