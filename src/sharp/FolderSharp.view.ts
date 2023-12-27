import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FolderSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 4H2v16h20V6H12l-2-2z\"/>")
      .name("FolderSharp")
  }
}

export default FolderSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
