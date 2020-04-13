import schema from './schema'
import corsHeaders from './cors'

// Create base schema
export const baseSchema = schema()

// Cors headers
export const corsOption = corsHeaders
