module.exports = () => {
    return {
        rollback: () => {
            console.log('ROLLBACK');
        },
        commit: () => {
            console.log('COMMIT');
        }
    }
}
