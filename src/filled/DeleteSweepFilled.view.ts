import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeleteSweepFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z\"/>")
      .name("DeleteSweepFilled")
  }
}

export default DeleteSweepFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
