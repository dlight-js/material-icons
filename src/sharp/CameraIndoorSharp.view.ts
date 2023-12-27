import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CameraIndoorSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3 4 9v12h16V9l-8-6zm4 13.06L14 15v2H8v-6h6v2l2-1.06v4.12z\"/>")
      .name("CameraIndoorSharp")
  }
}

export default CameraIndoorSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
