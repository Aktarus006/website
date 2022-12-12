import { FORM_FIELDS } from './form'
import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'

export const BANNER = `
  ...on Banner {
    blockType
    bannerFields {
      type
      addCheckmark
      content
    }
  }
`
export const BLOG_CONTENT = `
  ...on BlogContent {
    blockType
    blogContentFields {
      richText
    }
  }
`

export const BLOG_MARKDOWN = `
  ...on BlogMarkdown {
    blockType
    blogMarkdownFields {
      markdown
    }
  }
`

export const CODE_BLOCK = `
  ...on Code {
    blockType
    codeFields {
      language
      code
    }
  }
`

export const CODE_FEATURE = `
  ...on CodeFeature {
    blockType
    codeFeatureFields {
      disableBlockSpacing
      heading
      richText
      enableLink
      link ${LINK_FIELDS()}
      language
      label
      code
    }
  }
`
