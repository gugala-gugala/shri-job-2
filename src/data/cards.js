function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const statuses = ['wait', 'error', 'done'];

export const cards = [];
for (let i=0; i<10; i++) {
    cards.push({
        date: randomDate(new Date(0), new Date()),
        time: Math.floor(Math.random()*120),
        status: statuses[randomInteger(0, 2)],
        trunk: ['master', 'super-col-ui-kit'][randomInteger(0,1)],
        hash: ['a12335bb','9c9f13b5', '39491243', 'abfd42ef'][randomInteger(0,3)],
        comment: 'upgrade typescript to 3.8',
        owner: ['asdad', 'fhfdgh', 'SAFsd ESGSE'][randomInteger(0,2)],
        commit: Math.floor(Math.random()*1000),
    });
}
