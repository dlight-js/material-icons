import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ApprovalSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 14v8h16v-8H4zm14 4H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5z\"/>")
      .name("ApprovalSharp")
  }
}

export default ApprovalSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
