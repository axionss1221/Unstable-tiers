export const MODES = ['Sword','Axe','Mace','UHC','SMP','Netherite','OP','Diamond','Pot','Vanilla','Diamond SMP','Cart'] as const;
export const TIERS = ['HT1','LT1','HT2','LT2','HT3','LT3','HT4','LT4','HT5','LT5','UNR','UNSTABLE'] as const;
export const TIER_POINTS: Record<string, number> = {HT1:10,LT1:9,HT2:8,LT2:7,HT3:6,LT3:5,HT4:4,LT4:3,HT5:2,LT5:1,UNR:0,UNSTABLE:0};
