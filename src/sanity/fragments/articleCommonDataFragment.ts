import groq from 'groq';
import { imageFragment } from '.';

export const articleCommonDataFragment = groq`
  _id,
  title,
  publishedAt,
  excerpt,
  ${imageFragment('mainImage')},
  "imageCount": math::sum(
    content[] {
      "count": 0,
      _type == "imageBlock" => {
        "count": 1,
      },
      _type in ["imageGalleryBlock", "inlineImagesBlock"] => {
        "count": length(images[]),
      },
    }.count
  ),
  // Assumes 5 characters as mean word length
  // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
  // Words per minute: 180
  "readingTime": round(
    length(pt::text(content[].content))
    / 5 / 180
  ),
  "slug": slug.current,
`;
