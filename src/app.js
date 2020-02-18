import Vue from 'vue';


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        { task: "pickup dogs jobbies 💩"},
        { task: "wash clothes 🧺"},
        { task: "prep food 🍱"}
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          task: this.newTodo
        });
          this.newTodo = "";
        
      }
    }
  });
});
