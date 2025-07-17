<template>
  <form @submit.prevent>
    <h3>Öğrenciler</h3>
    <input type="text" v-model="student" @keyup="addStudent">
  </form>

  <div>
    <h4>Eklenen Öğrenciler:</h4>
    <div v-for="student in students" :key="student">
      {{ student }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FormData",
  data() {
    return {
      student: "",
      students: []
    };
  },
  methods: {
    addStudent(e) {
      if (e.key === "," && this.student.trim()) {
        const name = this.student.split(",")[0].trim();
        if (name && !this.students.includes(name)) {
          this.students.push(name);
        }
        this.student = "";
      }
    }
  }
};
</script>
