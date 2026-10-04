import {NextResponse} from 'next/server';import {db} from '../../../lib/db';
export async function GET(){const ps=await db.player.findMany({include:{tiers:true},orderBy:[{points:'desc'},{username:'asc'}]});return NextResponse.json(ps)}
