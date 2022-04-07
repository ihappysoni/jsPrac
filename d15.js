$(".heading").click(function() {
    $("p").toggle()
    // $(this).hide()
})

//ajax
//it's a function which takes an object of diff keys
$("button").click(function() {
    $.ajax(
        {
            url: "https://jsonplaceholder.typicode.com/todos",
            type: "GET",
            success: function (data) {
                console.log(data);
            }
        }
    )
})

//JS is a functional programming langugage
//classes
class A{
    constructor(username){
        this.username=username;
    }
    printname(){
        console.log("name is:", this.username);
    }
}
var a = new A("Happy");
a.printname();
console.log(a.username);
class B extends A{

}
