import Link from 'next/link';import './globals.css';
export const metadata={title:'SA PvP Community',description:'Minecraft competitive rankings and player tiers'};
export default function Layout({children}:{children:React.ReactNode}){return <><header><Link className="brand" href="/">SA <span>PVP</span></Link><nav><Link href="/ranking">Ranking</Link><Link href="/admin">Admin</Link></nav></header>{children}<footer>SA PvP Community · plataforma independente · Não afiliada à Mojang Studios.</footer></>}
