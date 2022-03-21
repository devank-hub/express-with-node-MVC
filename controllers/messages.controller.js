import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(path.dirname(import.meta.url));

function getMessages (req,res) {
    res.render('messages', {
        title : 'Messages',
        friend : 'Ankur',
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Douma.jpg')); // we can also define the path to the file as another argument
    // res.send('<ul><li><h1>Hello World!</h1></li></ul>');
}

function postMessages (req,res) {
    res.send('UPDATING messages . . . Please wait');
}

export{getMessages, postMessages};