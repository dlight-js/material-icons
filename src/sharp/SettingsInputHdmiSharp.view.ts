import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SettingsInputHdmiSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 7V2H6v5H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z\"/>")
      .name("SettingsInputHdmiSharp")
  }
}

export default SettingsInputHdmiSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
