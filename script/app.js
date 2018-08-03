var todo_app = new Vue({
	el: "#todo",

	data: {
		new_task: '',
		task_list: [],
		completed_list: []
	},

	methods: {
		addTask: function() {

			if (this.new_task.trim().length > 0){
				this.task_list.push({text:this.new_task, done: false});
				this.new_task = '';
			}	
		},

		removeTask: function(index) {
			this.task_list[index].done=true;
			this.completed_list.push(this.task_list[index]);
			this.task_list.splice(index,1);
		} 
	}
});
