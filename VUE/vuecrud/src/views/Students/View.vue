

<template>
    <div class="card">
        <div class="card-header">
            <h4>
                Students 
                <RouterLink to="/students/create" class="btn btn-primary float-end"> Add Student</RouterLink>
            </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created AT</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </template>

<script type="module" src="">
import axios from 'axios'
    export default{
        name: 'students',
        data(){
            return{
                students: []
            }
        },
        mounted(){{
            this.getstudents();
            // console.log('i am here')
        }},
        methods: {
            getstudents(){
                axios.get('').then(res => {
                    console.log(res)
                });
            }
        }
    }
</script>