<template>
    <div class="container mt-3">
        <div class="card shadow">
            <div class="card-header">
                <h4>
                    Modification des infos
                    <RouterLink to="/students" class="btn btn-danger float-end btn-sm">Retour</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>
                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="">Nom</label>
                        <input type="text" v-model="model.student.nom" class="form-control"/>
                    </div>
                    
                    <div class="mb-3 col-md-6">
                        <label for="">Prénom</label>
                        <input type="text" v-model="model.student.prenom" class="form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="">Cours</label>
                        <input type="text" v-model="model.student.cours" class="form-control"/>
                    </div>
                    
                    <div class="mb-3 col-md-6">
                        <label for="">Email</label>
                        <input type="email" v-model="model.student.email" class="form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="">Téléphone</label>
                        <input type="text" v-model="model.student.telephone" class="form-control"/>
                    </div>
                    
                    <div class="mt-4 col-md-6">
                        <button type="button" @click="updateStudent" class="btn btn-success">Valider</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'studentEdit',
        data(){
            return {
                studentId : '',
                errorList: '',
                model: {
                    student: {
                        nom: '',
                        prenom: '',
                        cours: '',
                        email: '',
                        telephone: ''
                    }
                }
            }
        },

        mounted(){
            // console.log(this.$route.params.id);

            this.studentId = this.$route.params.id;
            this.getStudentData(this.$route.params.id);
        },

        methods: {

            getStudentData(studentId){

                axios.get(`http://127.0.0.1:8000/api/students/edit/${studentId}`)
                    .then(res => {
                        console.log(res.data.student);
                        this.model.student = res.data.student
                    
                })
                .catch(function(error){
                    if (error.response) {
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    } 
                });

            },

            updateStudent(){
                var mythis = this;
                axios.put(`http://127.0.0.1:8000/api/students/edit/${this.studentId}`, this.model.student )
                    .then(res => {

                    console.log(res.data)
                    alert(res.data.message);
                    
                    this.errorList = '';
                })
                .catch(function(error){
                    if (error.response) {
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
                        }

                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }

                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
            }
        }
    }

</script>