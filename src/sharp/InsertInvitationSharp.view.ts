import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InsertInvitationSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H3.01v18H21V3h-3V1h-2zm3 18H5V8h14v11z\"/>")
      .name("InsertInvitationSharp")
  }
}

export default InsertInvitationSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
