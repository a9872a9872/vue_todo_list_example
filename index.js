Vue.component('todo-list', {
    props: ['todos'],
    template:
    `<div>
        <li v-for="(todo, index) in todos" v-on:click="remove(index)">
            <del v-if="todo.done">{{ todo.text }}</del>
            <span v-else>{{ todo.text }}</span>
        </li>
    </div>`,
    methods: {
        remove: function (index) {
            this.todos[index].done = !this.todos[index].done
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {text: 'list 1', done: false},
            {text: 'list 2', done: false},
            {text: 'list 3', done: false}
        ],
        message: ''
    },
    methods: {
        add: function () {
            this.todos.push({text: this.message, done: false})
        }
    }
})
