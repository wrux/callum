import { StructureBuilder } from 'sanity/desk';
import { GlobeHemisphereWest, NewspaperClipping } from 'phosphor-react';

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Countries')
        .icon(() => (
          <>
            <GlobeHemisphereWest
              style={{ fontSize: '2rem', lineHeight: '1' }}
            />
          </>
        ))
        .child(S.documentTypeList('country')),
      S.listItem()
        .title('Posts')
        .icon(() => (
          <>
            <NewspaperClipping style={{ fontSize: '2rem', lineHeight: '1' }} />
          </>
        ))
        .child(S.documentTypeList('post')),
    ]);

export default structure;
