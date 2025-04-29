import { Router } from 'express';
import { sendEmail } from '../models/mailer';
import chatMessageModel from '../models/chat';

const router = Router();

export const secretKey = process.env.SECRET!;

export function xorEncrypt(text: string, key: string = secretKey): string {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
    }
    return Buffer.from(result).toString('base64');
}

export function xorDecrypt(encryptedBase64: string, key: string = secretKey): string {
    const encrypted = Buffer.from(encryptedBase64, 'base64').toString();
    let result = '';
    for (let i = 0; i < encrypted.length; i++) {
        const charCode = encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
    }
    return result;
}


router.get('', (req, res) => {
    res.render('index');
})

router.post('/mail', (req, res) => {
    const { mail, asunto, contenido } = req.body;
    if (mail && asunto && contenido) {
        sendEmail(
            mail, 
            asunto, 
            xorEncrypt(contenido)
        ).then(() => {
            res.send('email sent');
        }).catch(() => {
            res.status(500).send('Failed to send email');
        })
    } else {
        res.send('Porfavor completa todos los campos')
    }
})

router.get('/mail', (req, res) => {
    res.render('mail')
})

router.get('/chat', async (req, res) => {
    const messages = await chatMessageModel.find().sort({ timestamp: 1 }).lean();
    res.render('chat', { messages });
})

router.post('/chat/send', async (req, res) => {
    const { userName, text } = req.body;

    if (userName && text) {
        await chatMessageModel.create({ userName, text });
    }

    res.redirect('/chat');
});

router.get('/decrypt', async (req, res) => {
    res.render('desencriptar');
})

router.post('/decrypt', async (req, res) => {
    const { text } = req.body;

    let decrypted = ''
    if (text) {
        decrypted = xorDecrypt(text);
    }

    res.send(decrypted);
});


export default router;