import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { siteSettings } from './siteSettings'
import { teamMember } from './teamMember'
import { faq } from './faq'
import { icp } from './icp'
import { inquiry } from './inquiry'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, siteSettings, teamMember, faq, icp, inquiry],
}
