import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DriveFileMoveSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 6H12l-2-2H2v16h20V6zM12 17v-3H8v-2h4V9l4 4-4 4z\"/>")
      .name("DriveFileMoveSharp")
  }
}

export default DriveFileMoveSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
