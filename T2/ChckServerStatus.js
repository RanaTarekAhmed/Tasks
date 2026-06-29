function Server()
 {
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            const online = Math.random() > 0.6;
            if (online) resolve("Server is Online!");
             else reject("Server is Offline!");
        }, 3000);

    });
}

async function chckServer()
 {
    for (let attempt = 0; attempt < 5; attempt++) 
    {
        try 
        {
            console.log(`Attempt ${attempt}`);
            const r = await Server();
            console.log(r);
            console.log("Connected Successfully!");
            return;
        }
         catch (error)
        {
            console.log(error);
            if (attempt === 4) console.log("❌ Server failed after 5 attempts.");
            else console.log("Retrying...\n");
        }
    }
}

chckServer();
