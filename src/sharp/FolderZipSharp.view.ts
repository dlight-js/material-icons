import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FolderZipSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 6-2-2H2v16h20V6H12zm6 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2v2z\"/>")
      .name("FolderZipSharp")
  }
}

export default FolderZipSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
