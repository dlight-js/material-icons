import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExposureNeg1TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z\"/>")
      .name("ExposureNeg1TwoTone")
  }
}

export default ExposureNeg1TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
