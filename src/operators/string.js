var userName = 'diegodisant';

/**
 * Concatenation
 *
 * + -> a += '0';
 */

console.log(userName + '0');

userName = userName + '0';

console.log(userName)

userName += '1'; //overload

console.log(userName);

/**
 * String operations
 *
 * concat: adds a string at the end
 * trim: remove white spaces at start and end positions
 * charAt: position at 0-index (0, 1, 2, 3, ...)
 * replace: change one string by match
 * includes: checks if one string is inside the string
 * toUpperCase: converts text as mayus
 * toLowerCase: converts text as minus
 */

console.log(userName.concat('2'));

userName = '      jonasilken      ';

console.log(userName.trimEnd());
console.log(userName.trimStart());

userName = userName.trim();

console.log(userName);

console.log(userName.charAt(0));

console.log(userName.replace('silk', 'salk'));

console.log(userName.includes('silk'));

console.log(userName.toUpperCase());

console.log('JONATHAN'.toLowerCase());
