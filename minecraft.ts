export async function resolveMinecraft(username:string){
  const r=await fetch(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`,{cache:'no-store'});
  if(!r.ok) throw new Error('Minecraft account not found');
  const data=await r.json() as {id:string,name:string};
  return {uuid:data.id, username:data.name};
}
export const skinUrl=(uuid:string)=>`https://crafatar.com/avatars/${uuid}?size=128&overlay`;
export const bodyUrl=(uuid:string)=>`https://crafatar.com/renders/body/${uuid}?scale=6&overlay`;
