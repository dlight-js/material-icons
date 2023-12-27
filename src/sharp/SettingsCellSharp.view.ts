import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SettingsCellSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM6 0v20h12V0H6zm10 16H8V4h8v12z\"/>")
      .name("SettingsCellSharp")
  }
}

export default SettingsCellSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
