import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'simao'},
        { id: 2, name: 'ana'},
        { id: 3, name: 'sara'},
    ]
    return response.json(users);
}