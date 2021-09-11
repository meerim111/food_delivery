import { readFile } from 'fs'


export const getProducts = (req,res) => {
    readFile(
        `${process.cwd()}/data/data.json`,
        {encoding:"utf-8"},
        (err,products) => {
            if(err) return res.status(404).json({err})
            res.json(JSON.parse(products))
        }
    )

}