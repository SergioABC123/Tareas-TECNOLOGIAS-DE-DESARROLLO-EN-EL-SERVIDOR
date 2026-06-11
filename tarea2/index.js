const { createApp } = require('./app');

const app = createApp();

//escuchar
app.listen(3000, () => {
    console.log('app listeninig in port 3000');
    
});
