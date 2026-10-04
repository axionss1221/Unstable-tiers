import crypto from 'crypto';
import { cookies } from 'next/headers';
const name='sapvp_admin';
function sign(v:string){return crypto.createHmac('sha256',process.env.SESSION_SECRET||'change-me').update(v).digest('hex')}
export function makeSession(){const v=process.env.ADMIN_USERNAME||'admin'; return `${v}.${sign(v)}`}
export async function isAdmin(){const c=await cookies(); const raw=c.get(name)?.value; if(!raw)return false; const [v,s]=raw.split('.'); if(!v||!s)return false; const expected=sign(v); if(s.length!==expected.length)return false; return crypto.timingSafeEqual(Buffer.from(s),Buffer.from(expected)) && v===process.env.ADMIN_USERNAME}
export {name};
