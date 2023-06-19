import { sibling } from "./relation-partials/sibling";
import { kin } from "./relation-partials/kin";
import { mentor } from "./relation-partials/mentor";
import { companion } from "./relation-partials/companion";
import { mate } from "./relation-partials/mate";
import { rival } from "./relation-partials/rival";
import { patron } from "./relation-partials/patron";
import { animal } from "./relation-partials/animal";

export const relationsTypes = [
  'sibling',
  'kin',
  'mentor',
  'companion',
  'mate',
  'rival',
  'patron',
  'animal'
];

export const relationStatuses = [
  'living',
  'missing',
  'estranged',
  'deceased'
];

export const relations = {
  sibling,
  kin,
  mentor,
  companion,
  mate,
  rival,
  patron,
  animal
}