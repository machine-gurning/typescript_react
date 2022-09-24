


function updateAddressRecord<T1 extends T2, T2>(contactInfo: T1, address: T2): T2 {
    let key: keyof typeof address

    for (key in address) {
        if (address[key] !== contactInfo[key]) {
            address = {...address, k: contactInfo[key]}
        }
    }

    console.log(address);
    return address
}


const address = {
    number: 10,
    street: "Downing Street",
    city: "London",
    country: "United Kingdom"
}

const contactInfo = {
    firstName: "Boris",
    surname: "Johnson",
    occupation: "MP",
    number: 99,
    street: "Somewhere Street",
    city: "London",
    country: "United Kingdom"
}

console.log(address)

updateAddressRecord(contactInfo, address)

console.log(address)