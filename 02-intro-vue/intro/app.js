const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    //     <h1>{{message}}</h1>
    //     <p>-{{autor}}</p>
    // `,
    setup() {
        const message = ref("I'm Batman!!!");
        const autor = ref("Bruce Wayne")

        // setTimeout(() => {
        //     message.value = "I'm Gokú";
        //     autor.value = 'Gokú'
        //     console.log('Se ejecuta')
        // }, 3000);

        const changeQuote = () => {
            message.value = "I'm Gokú";
            autor.value = 'Gokú'
        }

        return {
            message,
            autor,
            changeQuote,
        }

    }
})

app.mount('#myApp');