# SA PvP Community — pronto para deploy

Projeto Next.js + PostgreSQL + Prisma para um ranking Minecraft competitivo inspirado na estrutura pública da SA PvP, sem copiar código ou assets proprietários.

## O que já funciona
- Homepage, leaderboard e perfil individual.
- Nenhum jogador aleatório: só contas adicionadas pelo admin.
- Minecraft username -> UUID usando a API pública da Mojang.
- Skin/avatar/render 3D via Crafatar.
- Painel `/admin` com login privado por variáveis de ambiente.
- Apenas o admin autenticado pode adicionar, editar ou excluir jogadores e alterar tiers.
- 12 gamemodes: Sword, Axe, Mace, UHC, SMP, Netherite, OP, Diamond, Pot, Vanilla, Diamond SMP e Cart.
- Tiers: HT1, LT1, HT2, LT2, HT3, LT3, HT4, LT4, HT5, LT5, UNR e UNSTABLE.
- Pontuação automática por tier.
- País, UUID e histórico estrutural prontos para expansão.
- PostgreSQL persistente com Prisma.
- Logout, proteção de API e cookies HTTP-only.

## Rodar localmente
1. Copie `.env.example` para `.env`.
2. Preencha `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD` e `SESSION_SECRET`.
3. Rode `npm install`.
4. Rode `npx prisma db push`.
5. Rode `npm run dev`.
6. Abra `/admin` e entre com as credenciais definidas no `.env`.

## Colocar no ar
Recomendação simples: Vercel para o Next.js + qualquer PostgreSQL compatível (Neon, Supabase, Railway etc.).

No projeto da Vercel, configure as mesmas quatro variáveis de ambiente. O build já está definido como `npm run build`. Depois do primeiro deploy, o banco precisa estar com o schema aplicado; para isso execute `npx prisma db push` usando a `DATABASE_URL` de produção ou use uma pipeline de migrações.

## Importante sobre vínculo de Minecraft
A API pública usada aqui confirma que o username existe e retorna o UUID correspondente. Ela não prova que a pessoa que digitou o username é dona da conta. Se você quiser verificação de posse real, o próximo módulo deve usar código de confirmação no servidor Minecraft ou OAuth/fluxo de conta compatível.

## Segurança
Nunca coloque `.env` no GitHub. Troque `ADMIN_PASSWORD` e `SESSION_SECRET` por valores longos e aleatórios antes do deploy. O painel administrativo não deve ser exposto com credenciais de exemplo.
