import {Router, Request, Response} from 'express'

const router = Router()

router.get('/',(req: Request,res: Response) =>{
    res.send("Olá mundo!")
})
router.get('/sobrenos',(req: Request,res:Response) =>{
    res.send("Página sobre nos")
})
//ROTA DINAMICA
router.get('/noticia/:slug',(req: Request,res:Response) =>{
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req,res) =>{
    let {origem, destino} = req.params

    res.send(`Procurando voos de ${origem} até ${destino}`)
})
//exportando o arquivo index 
export default router