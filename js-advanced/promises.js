function delay(ms){
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
}

async function main() {
    const start = Date.now()

    const [delay1, delay2, delay3] = await Promise.all([
        delay(1000),
        delay(2000),
        delay(3000),
    ])

    console.log(delay1, delay2, delay3)

    const end = Date.now()

    console.log("Terminou: ", (end - start) / 1000 + "")
}
main()