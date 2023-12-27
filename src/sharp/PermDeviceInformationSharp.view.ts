import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PermDeviceInformationSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zM5 1v22h14V1H5zm12 18H7V5h10v14z\"/>")
      .name("PermDeviceInformationSharp")
  }
}

export default PermDeviceInformationSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
