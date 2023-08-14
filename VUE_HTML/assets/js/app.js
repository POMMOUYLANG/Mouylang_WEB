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
    },
    methods: {
        async getUser(){
            // console.log(this.firstName)
            const res = await fetch('https://randomuser.me/api')
            const {result} = await res.json()

            console.log(result)
            this.firstName = 'SAM',
            this.lastName =  'Smith',
            this.email = 'smithsam@gmail.com',
            this.gender = 'Male',
            this.picture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnp100mRs3ONsl3K-RyfLGSHqFE-xBxuxeQ&usqp=CAU'
            }
    },
})


app.mount('#app');