import * as jose from 'jose'

const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2')

export async function getJWT(data: any){
  const jwt = new jose.SignJWT({ 'urn:example:claim': true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2h')
    .sign(secret)
  return jwt
}