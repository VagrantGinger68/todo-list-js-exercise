// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete : false,

    logState : function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted : function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Take all the poo out of the litter box");
const task2 = newTask("Do laundry", "Just do it.");
const tasks = [task1, task2];

task2.logState();
task2.markCompleted();
task2.logState();
