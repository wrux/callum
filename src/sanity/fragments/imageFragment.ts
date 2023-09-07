export const imageFragment = (attr: string, opts?: { as: string }) => `
  "${opts?.as ?? attr}": ${attr} {
    ...,
    asset -> {
      ...,
      "alt": altText,
      metadata {
        lqip,
        dimensions
      },
    },
  }
`;
