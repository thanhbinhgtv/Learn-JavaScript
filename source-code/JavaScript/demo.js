courses = [
    'JavaScript', 'PHP', 'Ruby'
];

Array.prototype.map2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i)
    }
}

courses.map2((course, index) => {
    console.log(index, course);
});

console.log(false || 'text');
console.log(false && 'box');
