import { GlobeHemisphereWest, NewspaperClipping } from '@phosphor-icons/react';
import { type StructureBuilder } from 'sanity/desk';

export const defaultDocumentNodeResolver = (S: StructureBuilder) =>
  S.document().views([S.view.form()]);

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Countries')
        .icon(GlobeHemisphereWest)
        .child(S.documentTypeList('country')),
      S.listItem()
        .title('Posts')
        .icon(NewspaperClipping)
        .child(S.documentTypeList('post')),
    ]);
