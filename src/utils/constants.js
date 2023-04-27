export const apyDayOptions = [7, 30, 60, 90, 365]
export const DEFAULT_SELECTED_APY = 30

export const isDevelopment = process.env.NODE_ENV === "development"
export const isProduction = process.env.NODE_ENV === "production"

export const sanitizationOptions = {
  allowedTags: [ 'b', 'i', 'em', 'strong', 'u', 'a', 'img', 'h1', 'h2', 'h3', 'span', 'p', 'ul', 'ol', 'li', 'br', 'figure' ],
  allowedAttributes: {
    'a': [ 'href', 'target', 'rel' ],
    'img': [ 'src', 'alt', 'srcset', 'sizes' ],
    'span': [ 'style' ],
    'ul': [ 'style' ],
    'ol': [ 'style' ]
  },
  allowedIframeHostnames: ['www.youtube.com']
}