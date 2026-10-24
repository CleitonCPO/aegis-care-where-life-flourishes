import { describe, expect, test } from "bun:test";
import { serviceOverview, supervision } from "./serviceOverview";

describe("Oferta confirmada da Aegis", () => {
  test("cuidadores atendem no lar, hospital, consultas e viagens", () => {
    expect(serviceOverview.map((service) => service.id)).toEqual(["domiciliar", "hospital", "consultas", "viagens"]);
  });
  test("a supervisão não anuncia equipe de enfermagem como serviço separado", () => {
    expect(supervision.standaloneNursingTeam).toBe(false);
    expect(supervision.scope).toBe("supervisão de enfermagem");
  });
  test("preserva acesso às seis páginas individuais", () => {
    expect(serviceOverview.flatMap((service) => [...service.links]).sort()).toEqual([
      "acompanhamento-de-saude", "acompanhamento-em-viagem", "acompanhante-hospitalar",
      "cuidador-de-idosos", "cuidador-para-adultos", "cuidados-alzheimer-parkinson",
    ]);
  });
});