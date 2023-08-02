import { Router } from 'express';
import axios from 'axios';
const router = Router();

router.get('/', async (req, res) => {
  try {
    const comments = await axios('https://jsonplaceholder.typicode.com/albums');
    console.log('sending albums data')
    return res.send(comments.data);
  } catch (error) {
    // Handle the error appropriately, for example:
    return res.status(500).send('Error fetching data from the external API.');
  }
});

export default router;
