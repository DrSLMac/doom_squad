import { type SchemaTypeDefinition } from 'sanity'
import carouselPics from './schemas/carouselPics-schema'
import about from './schemas/about-schema'
import coach from './schemas/coach-schema'
import pageInfo from './schemas/pageInfo-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carouselPics, about, coach, pageInfo],
}
