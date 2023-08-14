const app = Vue.createApp({
    // template: '<h1>Welcome To Vue JS and Name: {{firstName}}</h1>',
    data(){
        return{
            firstName: 'POM',
            lastName: 'Mouylang',
            email: 'mouylangpom@gmail.com',
            gender: 'Female',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWt54eC2lBZybJaeKr3lWDeIUrq_q7Imecg&usqp=CAU',
        }
    }
})

app.mount('#app');