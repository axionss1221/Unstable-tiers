import {NextResponse} from 'next/server';import {name} from '../../../../lib/auth';
export async function POST(){const r=NextResponse.json({ok:true});r.cookies.set(name,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:0});return r}
