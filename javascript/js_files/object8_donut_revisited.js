var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
var printOut = function() {
    donuts.forEach(function(donut) {
        var str = donut.type + " donuts cost $" + donut.cost + " each";
        console.log(str);
    });
};

printOut();