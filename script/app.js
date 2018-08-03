var todo_app = new Vue({
	el: "#todo",

	data: {
		new_task: '',
		task_list: []
	},

	methods: {
		addTask: function() {

			if (this.new_task.trim().length > 0){
				this.task_list.push({text:this.new_task});
				this.new_task = '';
			}	
		}
	}
});