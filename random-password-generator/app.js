// const words = ['BOB', 'BAM', 'BND', 'XOF', 'BIF',
//   'KHR', 'XAF', 'CVE', 'XAF', 'CLP', 'COP', 'KMF',
//   'CRC', 'CUP', 'CDF', 'DKK', 'DJF', 'XCD', 'DOP',
//   'EGP', 'XAF', 'ERN', 'ETB', 'FJD', 'XAF', 'GEL',
//   'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
//   'XCD', 'GNF', 'GTQ', 'XOF', 'GYD', 'HTG', 'HNL',
//   'GNF', 'HNL', 'ISK', 'IRR', 'Japan', 'Australia', 'Afghanistan',
//   'Albania', 'Algeria', 'Brunei', 'Barbados', 'Chile', 'Dominica', 'Zambia',
//   'Aromatic', 'Hearty', 'Roux', 'Victuals', 'Chiffonade', 'Divine', 'Omakase',
//   'Sapid', 'Earthy', 'Fresh', 'Smoky', 'Sweet', 'Sour', 'Airy',
//   'Chewy', 'Creamy', 'Crumbly', 'Blackened', 'Broiled', 'Glazed', 'Sauteed',
//   'Basement', 'Den', 'Hall', 'Porch', 'Yard', 'Counter', 'Mirror',
//   'Sink', 'Armchair ', 'Rug', 'Glass', 'Napkin', 'Stove', 'Microwave',
//   'Toaster', 'dig', 'new', 'rest', 'play', 'win', 'strong'];

//   function getPassword() {
//     const chars='0123456789/%?@#$%';
//     const clength=chars.length;
//     let password = '';

//     while(password.length < 20){
//         password = password.concat(randomWord(chars.length));
//         password = password.concat(chars[randomNumber(clength)]);
//     }

//     password = password.substring(0,16);
//     document.getElementById('password').value = password;
//   }

//   function randomNumber(e) {
//     return Math.floor(Math.random() * e);
//   }

//   function randomWord() {
//     const number = randomNumber(words.length);
//     return words[number]
//   }

const passwordBox = document.getElementById('password');
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~[]{}?/-=";
const allChars = uppercase+lowercase+numbers+symbols;

function createpassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while( password.length < length) {
         password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}