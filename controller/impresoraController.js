import Impresora from "../models/impresora.js";

export async function getImpresora(req, res) {
    try {
        const impresoras = await Impresora.find()
        res.json({ impresoras })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getIdImpresora(req, res) {
    try {
        const impresoras = await Impresora.findById(req.params.id)
        if(!impresoras) {
            return res.status(404).json({ message: 'Impresora no encontrada '})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function postImpresora(req, res) {
    const impresoras = new Impresora(req.body);
    try {
        await impresoras.save();
        res.status(201).json(impresoras)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function putImpresora(req, res) {
    try {
        const impresoras = await Impresora.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!impresoras) {
            return res.status(404).json({ message: 'Impresora no encontrada'})
        }
        res.json(impresoras)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteImpresora(req, res) {
    try {
        const impresoras = await Impresora.findOneAndDelete(req.params.id);
        if (!impresoras) {
            return res.status(404).json({ message: error.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getImpresora,
    getIdImpresora,
    postImpresora,
    putImpresora,
    deleteImpresora
}