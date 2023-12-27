import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SnippetFolderSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 6-2-2H2v16h20V6H12zm7 11h-6V9h3.5l2.5 2.5V17zm-3.12-6.5 1.62 1.62v3.38h-3v-5h1.38z\"/>")
      .name("SnippetFolderSharp")
  }
}

export default SnippetFolderSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
