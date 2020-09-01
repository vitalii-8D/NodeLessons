let arr = [
    {name: 'dima', age: 23},
    {name: 'alena', age: 26},
    {name: 'kolya', age: 16},
    {name: 'Vitalik', age: 20},
];


module.exports = {
    fetchAll: () => {
        return arr;
    },

    create: (userObject) => {
        arr.push(userObject);
    }
}
