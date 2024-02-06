let tasks = [
    {
        id:1,
        name:"Washing clothes",
        status:false
    },
    {
        id:2,
        name:"Washing dishes",
        status:true,
    },
];

const add= (obj)=>{
    var id=(tasks.length)+1;
    obj.id=id;
    tasks.push(obj);
    console.log("New task added");
    console.log(tasks);
};

const remove = (id)=>{
    for(var i=0;i<tasks.length;i++){
        if(tasks[i].id==id){
            tasks.splice(i,1);
            console.log("Task removed");
            console.log(tasks);
        }
    }
};

const complete =(id)=>{

    for(var i=0;i<tasks.length;i++){
        if(tasks[i].id==id){
            tasks[i].status=true;
            console.log("Task completed");
            console.log(tasks);
        }

        var task = tasks.find(ele=>ele.id===id)
        task.status=true;     
    }
};

const showall =()=>{
    console.log(tasks);
}

const sortTasks =()=>{
    var sortedTasks = tasks.sort((a,b)=>a.name.localeCompare(b.name))
    console.log(sortedTasks);
}

const nbrOfUndoneTasks=()=>{
    var nbr=0;
    for(var i=0;i<tasks.length;i++){
        if(tasks[i].status==false){
            nbr++;
        }
    }
    return nbr;
}

var newItem={
    name:"cooking",
    status:false
}

add(newItem);

remove(2);

showall();

complete(1);

sortTasks();

console.log(nbrOfUndoneTasks()); 