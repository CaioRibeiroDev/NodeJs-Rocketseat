declare namespace Express {
  export interface Request {
    user: {
      id: string
    },

    file: any,

    files: any
  }
}
