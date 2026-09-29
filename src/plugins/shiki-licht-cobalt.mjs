// Licht thema voor codeblokken, gebaseerd op de kleuren uit DESIGN.md.
// Alle tekstkleuren halen minimaal 4,5:1 contrast op de Surface-achtergrond.
/** @type {import('shiki').ThemeRegistration} */
export const lichtCobalt = {
  name: 'licht-cobalt',
  type: /** @type {const} */ ('light'),
  colors: {
    'editor.background': '#f0f1f6',
    'editor.foreground': '#171721',
  },
  settings: [
    { settings: { background: '#f0f1f6', foreground: '#171721' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#50505e', fontStyle: 'italic' } },
    { scope: ['string', 'string.quoted', 'string.unquoted.plain', 'markup.inline.raw'], settings: { foreground: '#0f5f58' } },
    { scope: ['constant.numeric', 'constant.language', 'constant.other', 'support.constant'], settings: { foreground: '#8f4206' } },
    { scope: ['keyword', 'storage', 'storage.type', 'keyword.control', 'keyword.operator.word'], settings: { foreground: '#2d3a9e' } },
    { scope: ['entity.name.tag', 'entity.name.tag.yaml', 'support.type.property-name', 'meta.object-literal.key', 'entity.other.attribute-name', 'variable.other.key', 'keyword.other.definition.ini', 'entity.name.section'], settings: { foreground: '#2d3a9e' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call'], settings: { foreground: '#3442c0' } },
    { scope: ['variable', 'variable.other', 'variable.parameter'], settings: { foreground: '#171721' } },
    { scope: ['entity.name.type', 'support.type', 'support.class', 'entity.name.class'], settings: { foreground: '#0f5f58' } },
    { scope: ['punctuation', 'keyword.operator', 'meta.brace'], settings: { foreground: '#50505e' } },
    { scope: ['invalid'], settings: { foreground: '#b42318' } },
  ],
};
