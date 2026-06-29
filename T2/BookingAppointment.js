const bookedSlots = ["a1", "b3"];

function bookAppointment(slot)
 {
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            if (bookedSlots.includes(slot)) {
                reject(`Failed to book slot "${slot}" is already booked!`);
            } else {
                bookedSlots.push(slot);
                resolve(`Appointment booked successfully for slot "${slot}"!`);
            }

        }, 3000);
    });
}

async function booking(slot) 
{
    try 
    {
        const message = await bookAppointment(slot);
        console.log(message);
    } 
    catch (error)
    {
        console.log(error);
    }
}

booking("a1"); // Rejected
booking("b3"); // Rejected
booking("a2"); // Successfully
