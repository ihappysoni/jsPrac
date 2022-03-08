var x = 10

function a() {
    var y = 20
    function b() {
        console.log(x, y)
    }
    b()
}
a()
