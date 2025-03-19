import { GraphQlError } from 'graphql';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

// interface JwtPayload {
//   _id: unknown;
//   username: string;
//   email: string,
// }

export const authenticateToken = ({ req }: any ) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.header.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data }: any = jwt.verify(token, process.env.JWT_SECRET_KEY || '', { maxAge: '1h' });
    req.user = data;
  } catch (err) {
    console.log('Invalid token');
  };
  return req;
};
    
export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { username, email, _id };
  const secretKey = process.env.JWT_SECRET_KEY || '';

  return jwt.sign({ data: payload}, secretKey, { expiresIn: '1h' });
};

export class AuthenticationError extends GraphQlError {
  constructor(message: string) {
    super(message, undefined, undefined, undefined, ['UNAUTHENTICATED']);
    Object.defineProperty(this, 'name', { value: 'AuthenticationError'});
  }
}
//     jwt.verify(token, secretKey, (err, user) => {
//       if (err) {
//         return res.sendStatus(403); // Forbidden
//       }

//       req.user = user as JwtPayload;
//       return next();
//     });
//   } else {
//     res.sendStatus(401); // Unauthorized
//   }
// };


