import { createApp } from "./app";

const port= process.env.PORT || 3000;

const app= createApp();

app.listen(port, () => {
    console.log('App is running in port 3000');
})