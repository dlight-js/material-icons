import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhoneAndroidSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 1H5v22h14V1zm-5 20h-4v-1h4v1zm3-3H7V4h10v14z\"/>")
      .name("PhoneAndroidSharp")
  }
}

export default PhoneAndroidSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
