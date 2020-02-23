import schemaSample from "./schemaSample";
import { TaxForm } from "../types";
import xmljs from "xml-js";

export function convertToJson(taxForm: TaxForm) {
  const form = Object.assign({}, schemaSample);

  form.dokument.hlavicka.dic = taxForm.r001_dic;
  form.dokument.hlavicka.datumNarodenia = taxForm.r002_datum_narodenia;
  form.dokument.hlavicka.skNace = {
    k1: "62",
    k2: "01",
    k3: "0",
    cinnost: "Počítačové programovanie",
  };

  form.dokument.hlavicka.priezvisko = taxForm.r004_priezvisko;
  form.dokument.hlavicka.meno = taxForm.r005_meno;
  form.dokument.hlavicka.adresaTrvPobytu.ulica = taxForm.r007_ulica;
  form.dokument.hlavicka.adresaTrvPobytu.cislo = taxForm.r008_cislo;
  form.dokument.hlavicka.adresaTrvPobytu.psc = taxForm.r009_psc;
  form.dokument.hlavicka.adresaTrvPobytu.obec = taxForm.r010_obec;
  form.dokument.hlavicka.adresaTrvPobytu.stat = taxForm.r011_stat;

  form.dokument.telo.r32.uplatnujemNCZDNaManzela = taxForm.r032_uplatnujem_na_partnera
    ? "1"
    : "0";

  form.dokument.telo.r33.uplatNCZDNaKupelStarostlivost = taxForm.r033_partner_kupele
    ? "1"
    : "0";

  form.dokument.telo.tabulka1.t1r2.s1 = taxForm.t1r10_prijmy.toFixed(2);
  form.dokument.telo.tabulka1.t1r2.s2 = taxForm.t1r10_vydavky.toFixed(2);
  form.dokument.telo.tabulka1.t1r10.s1 = taxForm.t1r10_prijmy.toFixed(2);
  form.dokument.telo.tabulka1.t1r10.s2 = taxForm.t1r10_vydavky.toFixed(2);

  form.dokument.telo.vydavkyPoistPar6ods11_ods1a2 = taxForm.vydavkyPoistne.toFixed(
    2,
  );

  form.dokument.telo.r41 = taxForm.r041.toFixed(2);
  form.dokument.telo.r42 = taxForm.r042.toFixed(2);
  form.dokument.telo.r43 = taxForm.r043.toFixed(2);
  form.dokument.telo.r47 = taxForm.r047.toFixed(2);
  form.dokument.telo.r55 = taxForm.r055.toFixed(2);
  form.dokument.telo.r57 = taxForm.r057.toFixed(2);

  form.dokument.telo.r72 = taxForm.r072_pred_znizenim.toFixed(2);
  form.dokument.telo.r73 = taxForm.r073.toFixed(2);
  form.dokument.telo.r77 = taxForm.r077_nezdanitelna_cast.toFixed(2);
  form.dokument.telo.r78 = taxForm.r078_zaklad_dane_z_prijmov.toFixed(2);
  form.dokument.telo.r80 = taxForm.r080_zaklad_dane_celkovo.toFixed(2);
  form.dokument.telo.r81 = taxForm.r081.toFixed(2);
  form.dokument.telo.r90 = taxForm.r090.toFixed(2);
  form.dokument.telo.r105 = taxForm.r105_dan.toFixed(2);
  form.dokument.telo.r107 = taxForm.r107.toFixed(2);
  form.dokument.telo.r113 = taxForm.r113.toFixed(2);

  form.dokument.telo.r125 = taxForm.r125_dan_na_uhradu.toFixed(2);
  form.dokument.telo.neuplatnujem = "1";

  // TODO doplnit dnesny datum
  form.dokument.telo.datumVyhlasenia = "19.02.2020";

  form.dokument.telo.socZdravPoistenie.pr11 = taxForm.priloha3_r11_socialne.toFixed(
    2,
  );
  form.dokument.telo.socZdravPoistenie.pr13 = taxForm.priloha3_r13_zdravotne.toFixed(
    2,
  );
  form.dokument.telo.socZdravPoistenie.datum = "19.02.2020";

  return form;
}

export function convertToXML(taxForm: TaxForm) {
  const jsonForm = convertToJson(taxForm);
  let XMLForm = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  XMLForm += xmljs.js2xml(jsonForm, {
    compact: true,
    spaces: 3,
    indentCdata: true,
  });

  return XMLForm;
}
