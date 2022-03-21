import express from 'express'; // need to be defaultly imported to use express
import path from 'path'; // for paths and __dirname/__filename
import { friendsRouter } from './routes/friends.router.js';
import { messagesRouter } from './routes/messages.router.js';

// defining the __dirname using url module and path.dirname()
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(path.dirname(import.meta.url));

const app = express();

//defining setting fro express to set the templating engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const port = 3000;

//defining a middleware for logging the time spent on each request and the url
app.use((req, res, next) => {
    const startTime = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    //when control return back here after executing the next function
    const deltaTimne = Date.now() - startTime;
    console.log(`Request took ${deltaTimne} ms`);
});
// console.log(path.join(__dirname, 'public')); //debug purpose
app.use('/site' ,express.static(path.join(__dirname, 'public'))); // express.static() is a middleware function

app.use(express.json());

// defining the hbs engine variables and functions
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hellooooo',
        welcomeMessage: 'Welcome to demon hunting'
    });
});

// here below we defining the route for friends router root point and thus we modify the path to root('/') with respect to this
app.use('/friends', friendsRouter);

//same as before one
app.use('/messages', messagesRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});