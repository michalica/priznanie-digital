export interface TypDP {
  rdp: string;
  odp: string;
  ddp: string;
}

export interface ZdanovacieObdobie {
  rok: string;
  datumDDP: string;
}

export interface SkNace {
  k1: string;
  k2: string;
  k3: string;
  cinnost: string;
}

export interface AdresaTrvPobytu {
  ulica: string;
  cislo: string;
  psc: string;
  obec: string;
  stat: string;
}

export interface AdresaObvPobytu {
  ulica: string;
  cislo: string;
  psc: string;
  obec: string;
}

export interface Zastupca {
  priezvisko: string;
  meno: string;
  titul: string;
  titulZa: string;
  rodneCislo: string;
  ulica: string;
  cislo: string;
  psc: string;
  obec: string;
  stat: string;
  tel: string;
  email: string;
}

export interface Hlavicka {
  dic: string;
  datumNarodenia: string;
  typDP: TypDP;
  zdanovacieObdobie: ZdanovacieObdobie;
  skNace: SkNace;
  priezvisko: string;
  meno: string;
  titul: string;
  titulZa: string;
  adresaTrvPobytu: AdresaTrvPobytu;
  nerezident: string;
  prepojeniePar2: string;
  adresaObvPobytu: AdresaObvPobytu;
  zastupca: Zastupca;
}

export interface R31 {
  priezviskoMeno: string;
  rodneCislo: string;
}

export interface R32 {
  uplatnujemNCZDNaManzela: string;
  vlastnePrijmy: string;
  pocetMesiacov: string;
}

export interface R33 {
  uplatNCZDNaKupelStarostlivost: string;
  preukazZaplatUhrady: void;
}

export interface Dieta {
  priezviskoMeno: string;
  rodneCislo: string;
  kupelnaStarostlivost: string;
  m00: string;
  m01: string;
  m02: string;
  m03: string;
  m04: string;
  m05: string;
  m06: string;
  m07: string;
  m08: string;
  m09: string;
  m10: string;
  m11: string;
  m12: string;
}

export interface R34 {
  dieta: Dieta[];
}

export interface R37 {
  uplatDanBonusZaplatUroky: string;
  zaplateneUroky: string;
  pocetMesiacov: string;
}

export interface T1r1 {
  s1: string;
  s2: string;
}

export interface T1r2 {
  s1: string;
  s2: string;
}

export interface T1r3 {
  s1: string;
  s2: string;
}

export interface T1r4 {
  s1: string;
  s2: string;
}

export interface T1r5 {
  s1: string;
  s2: string;
}

export interface T1r6 {
  s1: string;
  s2: string;
}

export interface T1r7 {
  s1: string;
  s2: string;
}

export interface T1r8 {
  s1: string;
  s2: string;
}

export interface T1r9 {
  s1: string;
  s2: string;
}

export interface T1r10 {
  s1: string;
  s2: string;
}

export interface T1r11 {
  s1: string;
  s2: string;
}

export interface T1r12 {
  s1: string;
  s2: string;
}

export interface T1r13 {
  s1: string;
  s2: string;
}

export interface Tabulka1 {
  t1r1: T1r1;
  t1r2: T1r2;
  t1r3: T1r3;
  t1r4: T1r4;
  t1r5: T1r5;
  t1r6: T1r6;
  t1r7: T1r7;
  t1r8: T1r8;
  t1r9: T1r9;
  t1r10: T1r10;
  t1r11: T1r11;
  t1r12: T1r12;
  t1r13: T1r13;
}

export interface T1r14 {}

export interface T1r22 {}

export interface T1r32 {}

export interface T1r42 {}

export interface T1r52 {}

export interface Tabulka1a {
  t1r1: T1r14;
  t1r2: T1r22;
  t1r3: T1r32;
  t1r4: T1r42;
  t1r5: T1r52;
}

export interface T1r15 {}

export interface T1r23 {}

export interface Tabulka1b {
  t1r1: T1r15;
  t1r2: T1r23;
}

export interface PredchObdobie {}

export interface R49 {
  predchObdobie: PredchObdobie;
}

export interface PredchObdobie2 {}

export interface R50 {
  predchObdobie: PredchObdobie2;
}

export interface PredchObdobie3 {}

export interface R51 {
  predchObdobie: PredchObdobie3;
}

export interface PredchObdobie4 {}

export interface R52 {
  predchObdobie: PredchObdobie4;
}

export interface T2r1 {}

export interface T2r2 {}

export interface T2r3 {}

export interface T2r4 {}

export interface T2r5 {}

export interface T2r6 {}

export interface T2r7 {}

export interface T2r8 {}

export interface T2r9 {}

export interface T2r10 {}

export interface T2r11 {}

export interface T2r12 {}

export interface Tabulka2 {
  t2r1: T2r1;
  t2r2: T2r2;
  t2r3: T2r3;
  t2r4: T2r4;
  t2r5: T2r5;
  t2r6: T2r6;
  t2r7: T2r7;
  t2r8: T2r8;
  t2r9: T2r9;
  t2r10: T2r10;
  t2r11: T2r11;
  t2r12: T2r12;
}

export interface T3r1 {}

export interface T3r2 {}

export interface T3r3 {}

export interface T3r4 {}

export interface T3r5 {}

export interface T3r6 {}

export interface T3r7 {}

export interface T3r8 {}

export interface T3r9 {}

export interface T3r10 {}

export interface T3r11 {}

export interface T3r12 {}

export interface T3r13 {}

export interface T3r14 {}

export interface T3r15 {}

export interface T3r16 {}

export interface T3r17 {}

export interface T3r18 {}

export interface T3r19 {}

export interface Tabulka3 {
  t3r1: T3r1;
  t3r2: T3r2;
  t3r3: T3r3;
  t3r4: T3r4;
  t3r5: T3r5;
  t3r6: T3r6;
  t3r7: T3r7;
  t3r8: T3r8;
  t3r9: T3r9;
  t3r10: T3r10;
  t3r11: T3r11;
  t3r12: T3r12;
  t3r13: T3r13;
  t3r14: T3r14;
  t3r15: T3r15;
  t3r16: T3r16;
  t3r17: T3r17;
  t3r18: T3r18;
  t3r19: T3r19;
}

export interface ObchMeno {}

export interface R142 {
  obchMeno: ObchMeno;
  suhlasZaslUdaje: string;
}

export interface UdajeOprijmoch {}

export interface OsobitneZaznamy {
  uvadza: string;
  udajeOprijmoch: UdajeOprijmoch[];
  rekreaciaPar19ods2: string;
}

export interface SposobPlatby {
  poukazka: string;
  ucet: string;
  ucetZahranicie: string;
}

export interface BankovyUcet {}

export interface DanovyPreplatokBonus {
  vyplatitDanovyBonus: string;
  vyplatitDanovyBonusUroky: string;
  vratitDanPreplatok: string;
  sposobPlatby: SposobPlatby;
  bankovyUcet: BankovyUcet;
}

export interface Pr4 {}

export interface Pr5 {}

export interface Pr6 {}

export interface Pr22 {}

export interface Pr23 {}

export interface Pr24 {}

export interface PrilPodielyNaZisku {
  pr4: Pr4;
  pr5: Pr5;
  pr6: Pr6;
  pr8: string;
  pr22: Pr22;
  pr23: Pr23;
  pr24: Pr24;
  pr26: string;
}

export interface Pr1 {}

export interface SocZdravPoistenie {
  pr1: Pr1;
  pr11: string;
  pr13: string;
  priPrimoch6ods1a2VediemPU: string;
  datum: string;
}

export interface Telo {
  r29: string;
  r30: string;
  r31: R31;
  r32: R32;
  r33: R33;
  r34: R34;
  r35udajeDalsieDeti: string;
  r36: string;
  r37: R37;
  r38: string;
  r38a: string;
  r39: string;
  r40: string;
  tabulka1: Tabulka1;
  vydavkyPar6ods11_ods1a2: string;
  vydavkyPar6ods11_ods3: string;
  vydavkyPar6ods11_ods4: string;
  vydavkyPar6ods10_ods1a2: string;
  vydavkyPar6ods10_ods4: string;
  vydavkyPoistPar6ods11_ods1a2: string;
  uplatnujemPar17ods17_ods1a2: string;
  uplatnujemPar17ods17_ods3a4: string;
  ukoncujemUplatnovaniePar17ods17_ods1a2: string;
  ukoncujemUplatnovaniePar17ods17_ods3a4: string;
  tabulka1a: Tabulka1a;
  tabulka1b: Tabulka1b;
  r41: string;
  r42: string;
  r43: string;
  r44: string;
  r45: string;
  r46: string;
  r47: string;
  r48: string;
  r49: R49;
  r50: R50;
  r51: R51;
  r52: R52;
  r53: string;
  r54: string;
  r55: string;
  r56: string;
  r57: string;
  r58: string;
  r59: string;
  r60: string;
  r61: string;
  r62: string;
  r63: string;
  r64: string;
  r65: string;
  tabulka2: Tabulka2;
  tabulka3: Tabulka3;
  r66: string;
  r67: string;
  r68: string;
  r69: string;
  r70: string;
  r71: string;
  r72: string;
  r73: string;
  r74: string;
  r75: string;
  r76: string;
  r76a: string;
  r76b: string;
  r77: string;
  r78: string;
  r79: string;
  r80: string;
  r81: string;
  r82: string;
  r83: string;
  r84: string;
  r85: string;
  r86: string;
  r87: string;
  r88: string;
  r89: string;
  r90: string;
  r91: string;
  r92: string;
  r93: string;
  r94: string;
  r95: string;
  r96: string;
  r97: string;
  r98: string;
  r99: string;
  r100: string;
  r101: string;
  r102: string;
  r103: string;
  r104: string;
  r105: string;
  r106: string;
  r107: string;
  r109: string;
  r112: string;
  r113: string;
  r115: string;
  r125: string;
  r139: string;
  neuplatnujem: string;
  splnam3per: string;
  r142: R142;
  osobitneZaznamy: OsobitneZaznamy;
  r143: string;
  datumVyhlasenia: string;
  danovyPreplatokBonus: DanovyPreplatokBonus;
  prilPodielyNaZisku: PrilPodielyNaZisku;
  socZdravPoistenie: SocZdravPoistenie;
}

export interface Dokument {
  hlavicka: Hlavicka;
  telo: Telo;
}

export interface OutputJson {
  dokument: Dokument;
}
