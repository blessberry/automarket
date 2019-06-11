import 'dotenv/config';
import path from 'path';
import express from 'express';
import user from './server/routes/user';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(301).redirect('/man');
});

app.get('/man', (req, res) => {
  res.status(200)
    .sendFile(path.resolve('manual.html'));
});

app.use('/api/v1/', user);

app.all('/*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Wrong api endpoint, does not exist',
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));

export default app;
