/**
 * Maakt van dit stukje Markdown een "Wat ik leerde"-blok:
 *
 * :::wat-ik-leerde
 * Begin klein.
 * :::
 */
export const watIkLeerde = {
  name: 'wat-ik-leerde',
  containerDirective(node, ctx) {
    if (node.name !== 'wat-ik-leerde') return;
    ctx.replaceNode(node, {
      type: 'watIkLeerde',
      data: { hName: 'aside', hProperties: { className: ['wat-ik-leerde'], ariaLabel: 'Wat ik leerde' } },
      children: [
        {
          type: 'watIkLeerdeLabel',
          data: { hName: 'p', hProperties: { className: ['wat-ik-leerde__label'] } },
          children: [{ type: 'text', value: 'Wat ik leerde' }],
        },
        ...node.children,
      ],
    });
  },
};
