// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from "../../db/pool"
import sql from "../../db/sql"
type Data = {
  address?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>)
{
  pool(sql.selectAddress).then((result)=>{
    if(result.length>0){
      res.send({address:result})
    }
    else{
      res.send({})
    }
  })
}
