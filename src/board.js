// Task board module
class Board {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

	getTasks(status) {
    	if (status) {
        	const validStatuses = ['todo', 'in-progress', 'done'];
        	if (!validStatuses.includes(status)) {
            return this.tasks; // invalid status -> return all
        }
        return this.tasks.filter(t => t.status === status);
    }
    return this.tasks;
}

module.exports = Board;
