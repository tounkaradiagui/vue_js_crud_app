
<template>
    <div class="container mt-3">
      <div class="card shadow">
        <div class="card-header">
          <h4>Liste des étudiants
            <RouterLink class="btn btn-primary btn-sm float-end" to="/students/create">Ajouter</RouterLink>
          </h4>
        </div>
        <div class="card-body">
          <table class="table table-bordered table-stripped">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Cours</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th colspan="2" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody v-if="this.students.length > 0">
              <tr v-for="(student, index) in this.students" :key="index">
                <td>{{ student.nom }}</td>
                <td>{{ student.prenom }}</td>
                <td>{{ student.cours }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.telephone }}</td>
                <td>
                  <RouterLink :to="{path: '/students/edit/'+student.id}" class="btn btn-success btn-sm">Modifier</RouterLink>
                </td>
                <td>
                  <RouterLink to="/" class="btn btn-danger btn-sm">SUpprimer</RouterLink>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="8">Chargement...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'students',
    data(){
      return {
        students: []
      }
    },
    mounted(){
      this.getStudents();
      // console.log('je suis')
    },
    
    methods: {
      getStudents(){
        axios.get('http://127.0.0.1:8000/api/students').then(res => {
          this.students = res.data.students
          // console.log(this.students)

        });
      }
    },
  }
</script>