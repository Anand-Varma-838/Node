var fs= require('fs')
var chalk= require('chalk')
var note= require('./list.json')

var addNote = function(title, body){
    fs.readFile("list.json", function(err,data){
        if(err) throw err;
        const list = JSON.parse(data);
        if(!checkEmpty(list)){
            var index = checkList(list,title);
            if(index !== false){
                console.log(error('Title already exists!'));
            }
            else{
                list.push({
                    title: title,
                    body: body
                });
                var update = JSON.stringify(list);
                fs.writeFileSync("list.json",update);
                console.log(chalk.green('New note created successfully!'));
            }
        }
        else{
            console.log(warning("You don't have any notes!"));
        }
    });
} 

var removeNote = function(title){
    fs.readFile("list.json", function(err,data){
        if(err) throw err;
        const list = JSON.parse(data);
        if(!checkEmpty(list)){
            var index = checkList(list,title);
            if(index !== false){
                var updatedList = list.filter((li)=>{
                    return (li.title!==title);
                });
                var update = JSON.stringify(updatedList);
                fs.writeFileSync("list.json",update);
                console.log(chalk.green('Note removed successfully!'));
            }
            else{
                console.log(error("Note not found!"));
            }
        }
        else{
            console.log(warning("You don't have any notes!"));
        }
    });
}

var readNote = function(title){
    fs.readFile("list.json", function(err,data){
        if(err) throw err;
        const list = JSON.parse(data);
        if(!checkEmpty(list)){
            var index = checkList(list,title);
            if(index !== false){
                console.log(chalk.yellow(list[index].title));
                console.log(chalk.blue(list[index].body));
            }
            else{
                console.log(error("Note not found!"));
            }
        }
        else{
            console.log(warning("You don't have any notes!"));
        }
    });
}

var listNote = function(){
    fs.readFile("list.json", function(err,data){
        if(err) throw err;
        const list = JSON.parse(data);
        if(!checkEmpty(list)){
            console.log(chalk.blue('Your Notes: '))
            list.forEach(li => {
                console.log(chalk.green(li.title));
            });
        }
        else{
            console.log(warning("You don't have any notes!"));
        }
    });
} 

var checkEmpty = function(list){
    if(list.length === 0){
        return true;
    }
    return false;
}

var checkList = function(list,title){
    for (var i=0; i<list.length; i++){
        if(list[i].title.toLowerCase() == title.toLowerCase()){
            return i;
        }
    }
    return false;
}
 
module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote,
    checkEmpty,
    checkList
}