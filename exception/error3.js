process.on('uncaughtException', (err) => {
    console.log('예기치 못한 에러',err);
});

setInterval( () => {
    throw new Error('서버를 문제입니다.');
},1000);

setTimeout( () => {
    console.log('실행됩니다.');
}, 2000);
