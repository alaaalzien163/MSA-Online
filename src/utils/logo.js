/**
 * Brand logo sources.
 *
 * The official master (6.png, 1612x936) is high resolution, but it is never
 * displayed wider than ~384px. Shipping it directly forced every visitor to
 * download ~249KB for a logo. These pre-scaled variants are generated from the
 * same master (see the asset pipeline) and served responsively instead:
 *   - 384w covers every 1x display size (navbar 69px, footer 62px, hero 384px).
 *   - 768w covers 2x/retina displays.
 * The master file is kept in the repo as the source of truth but is not bundled.
 */
import logo384 from '../assets/images/logo-384.png'
import logo768 from '../assets/images/logo-768.png'

/** Default 1x source; widely supported fallback for srcset. */
export const brandLogo = logo384

/** Responsive candidate set shared by every logo usage. */
export const brandLogoSrcSet = `${logo384} 384w, ${logo768} 768w`

/** Intrinsic size of the 384w variant, preserving the master 1612:936 ratio. */
export const brandLogoWidth = 384
export const brandLogoHeight = 223

export default brandLogo
