function generatePassword(length) {
    const chr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const rndIndex = Math.floor(Math.random() * chr.length);
        password += chr[rndIndex];
    }

    return password;
}

console.log(generatePassword(8)); // Наприклад: "f8G7cB2d"
console.log(generatePassword(12)); // Наприклад: "A9c7J3m2K5pR"