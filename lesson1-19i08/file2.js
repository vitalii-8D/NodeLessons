const myVariable = 'mar-2020';

    // Але так функції ліпше не експортувати
/*exports.createUser = () => {

}*/

// module.exports = myVariable;
// exports.someVar = myVariable;

global.name = 'Vitalii';

    // Найліпше експортувати об'єктом
module.exports = {
    myVariable,
}
