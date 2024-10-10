import { Router } from 'express';
import { getImpresora, getIdImpresora,
    postImpresora,
    putImpresora,
    deleteImpresora } from '../controller/impresoraController.js';

const impresoraRoute = Router();

impresoraRoute.get('/', getImpresora),
impresoraRoute.get('/:id', getIdImpresora),
impresoraRoute.post('/', postImpresora),
impresoraRoute.put('/:id', putImpresora),
impresoraRoute.delete('/:id', deleteImpresora)

export default impresoraRoute;
