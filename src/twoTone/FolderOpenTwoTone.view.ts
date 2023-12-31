import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FolderOpenTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 8h16v10H4z\" opacity=\".3\"/><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"/>")
      .name("FolderOpenTwoTone")
  }
}

export default FolderOpenTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
