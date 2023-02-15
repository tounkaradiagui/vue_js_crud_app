<template>
    <div class="container mt-3">
        <div class="card shadow">
            <div class="card-header">
                <h4>
                    Ajout d'étudants
                    <RouterLink to="/etudiants" class="btn btn-danger float-end btn-sm">Retour</RouterLink>
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
                        <input type="text" v-model="model.etudiant.nom" class="form-control"/>
                    </div>
                    
                    <div class="mb-3 col-md-6">
                        <label for="">Prénom</label>
                        <input type="text" v-model="model.etudiant.prenom" class="form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="">Cours</label>
                        <input type="text" v-model="model.etudiant.cours" class="form-control"/>
                    </div>
                    
                    <div class="mb-3 col-md-6">
                        <label for="">Email</label>
                        <input type="email" v-model="model.etudiant.email" class="form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="">Téléphone</label>
                        <input type="text" v-model="model.etudiant.telephone" class="form-control"/>
                    </div>
                    
                    <div class="mt-4 col-md-6">
                        <button type="button" @click="saveStudent" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: 'etudiantCreate',
        data(){
            return {
                errorList: '',
                model: {
                    etudiant:{
                        nom: '',
                        prenom: '',
                        cours: '',
                        email: '',
                        telephone: ''
                    }
                }
            }
        },

        methods: {
            saveStudent(){
                var mythis = this;
                axios.post('http://127.0.0.1:8000/api/etudiant', this.model.etudiant )
                    .then(res => {

                    console.log(res.data)
                    alert(res.data.message);

                    this.model.etudiant = {
                        nom: '',
                        prenom: '',
                        cours: '',
                        email: '',
                        telephone: ''
                    }
                    this.errorList = '';
                }).catch(function(error){
                    if (error.response) {
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
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