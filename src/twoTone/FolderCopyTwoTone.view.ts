import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FolderCopyTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.17 4H7v11h14V6h-7.83z\" opacity=\".3\"/><path d=\"M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 11H7V4h4.17l2 2H21v9z\"/><path d=\"M3 6H1v13c0 1.1.9 2 2 2h17v-2H3V6z\"/>")
      .name("FolderCopyTwoTone")
  }
}

export default FolderCopyTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
