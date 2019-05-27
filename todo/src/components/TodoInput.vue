<template>
  <div> 
    <input type="text" v-model="newTodoItem" placeholder="할 일을 입력하세요." v-on:keypress.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
  </div>
</template>

<script>

export default {
    data(){
      return {
        newTodoItem: ''
      }
    },
    methods: {
      addTodo() {
        if(this.newTodoItem != ""){
          var value = this.newTodoItem && this.newTodoItem.trim();
            localStorage.setItem(this.newTodoItem, this.newTodoItem)
          this.clearInput();
        }
      },
      clearInput() {
        this.newTodoItem = "";
      }
    }
  }
</script>

<style scoped>
  input:focus
  {
    outline: none;
  }

  .inputBox
  {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input
  {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer
  {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addButton
  {
    color: white;
    vertical-align: middle;
  }
</style>