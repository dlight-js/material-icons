import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DriveFileMoveRtlSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 6H12l-2-2H2v16h20V6zM12 17l-4-4 4-4v3h4v2h-4v3z\"/>")
      .name("DriveFileMoveRtlSharp")
  }
}

export default DriveFileMoveRtlSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
