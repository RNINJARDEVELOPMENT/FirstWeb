function createTask(){
    let taskInputObject = document.getElementById("taskInput");
    let task = taskInputObject.value;
    
    if(task.trim() == ''){
        alert('Please enter Task before you try to add!');
        return;
    }

    let taskTextNode = document.createTextNode(task);
    let taskPNode = document.createElement('p');

    taskPNode.appendChild(taskTextNode);

    let divNode = document.getElementById("tasks");

    divNode.appendChild(taskPNode);
    taskInputObject.value = '';
}
