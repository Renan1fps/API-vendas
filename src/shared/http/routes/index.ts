import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' });
});

export { router };
